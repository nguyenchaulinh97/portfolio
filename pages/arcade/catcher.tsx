import React, { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const GAME_DURATION = 30;
const BASKET_WIDTH = 80;
const SPAWN_INTERVAL_MS = 600;
const FALL_SPEED = 3;
const GAME_WIDTH = 400;
const GAME_HEIGHT = 500;

const GOOD_EMOJIS = ["🍎", "🍊", "🍋", "🍇", "🍓", "⭐", "💎", "🧁"];
const BAD_EMOJIS = ["💣", "🔥", "💀"];

type FallingItem = {
  id: number;
  emoji: string;
  x: number;
  y: number;
  isBad: boolean;
  speed: number;
};

export default function EmojiCatcher() {
  const [basketX, setBasketX] = useState(GAME_WIDTH / 2 - BASKET_WIDTH / 2);
  const [items, setItems] = useState<FallingItem[]>([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [gameState, setGameState] = useState<"idle" | "playing" | "done">("idle");
  const [catchEffect, setCatchEffect] = useState<string | null>(null);

  const gameAreaRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const spawnRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const itemIdRef = useRef(0);
  const basketXRef = useRef(basketX);
  const itemsRef = useRef(items);
  const livesRef = useRef(lives);

  basketXRef.current = basketX;
  itemsRef.current = items;
  livesRef.current = lives;

  const clearTimers = useCallback(() => {
    if (spawnRef.current) {
      clearInterval(spawnRef.current);
      spawnRef.current = null;
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    setItems([]);
    setScore(0);
    setLives(3);
    setTimeLeft(GAME_DURATION);
    setGameState("playing");
    setCatchEffect(null);
    livesRef.current = 3;
  }, []);

  // Timer
  useEffect(() => {
    if (gameState !== "playing") return;
    if (timeLeft <= 0 || lives <= 0) {
      setGameState("done");
      clearTimers();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [gameState, timeLeft, lives, clearTimers]);

  // Spawner
  useEffect(() => {
    if (gameState !== "playing") return;

    spawnRef.current = setInterval(() => {
      itemIdRef.current += 1;
      const isBad = Math.random() < 0.22;
      const pool = isBad ? BAD_EMOJIS : GOOD_EMOJIS;
      const emoji = pool[Math.floor(Math.random() * pool.length)];
      const x = Math.random() * (GAME_WIDTH - 40);
      const speed = FALL_SPEED + Math.random() * 1.5;

      setItems((prev) => [
        ...prev,
        { id: itemIdRef.current, emoji, x, y: -30, isBad, speed },
      ]);
    }, SPAWN_INTERVAL_MS);

    return clearTimers;
  }, [gameState, clearTimers]);

  // Game loop
  useEffect(() => {
    if (gameState !== "playing") return;

    const loop = () => {
      setItems((prev) => {
        const currentBasketX = basketXRef.current;
        const nextItems: FallingItem[] = [];
        let scoreChange = 0;
        let livesChange = 0;
        let caughtEmoji: string | null = null;

        for (const item of prev) {
          const nextY = item.y + item.speed;

          // Check if caught by basket
          if (
            nextY >= GAME_HEIGHT - 60 &&
            nextY <= GAME_HEIGHT - 20 &&
            item.x >= currentBasketX - 15 &&
            item.x <= currentBasketX + BASKET_WIDTH + 15
          ) {
            if (item.isBad) {
              livesChange -= 1;
              caughtEmoji = "💥";
            } else {
              scoreChange += 1;
              caughtEmoji = "✨";
            }
            continue;
          }

          // Remove items that fall off screen
          if (nextY > GAME_HEIGHT + 20) {
            continue;
          }

          nextItems.push({ ...item, y: nextY });
        }

        if (scoreChange !== 0) setScore((s) => s + scoreChange);
        if (livesChange !== 0) {
          const newLives = livesRef.current + livesChange;
          setLives(newLives);
          livesRef.current = newLives;
        }
        if (caughtEmoji) {
          setCatchEffect(caughtEmoji);
          setTimeout(() => setCatchEffect(null), 300);
        }

        return nextItems;
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return clearTimers;
  }, [gameState, clearTimers]);

  // Mouse/Touch controls
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (gameState !== "playing" || !gameAreaRef.current) return;
    const rect = gameAreaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - BASKET_WIDTH / 2;
    setBasketX(Math.max(0, Math.min(x, GAME_WIDTH - BASKET_WIDTH)));
  };

  // Keyboard controls
  useEffect(() => {
    if (gameState !== "playing") return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") {
        setBasketX((x) => Math.max(0, x - 20));
      } else if (e.key === "ArrowRight" || e.key === "d") {
        setBasketX((x) => Math.min(GAME_WIDTH - BASKET_WIDTH, x + 20));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameState]);

  const heartDisplay = "❤️".repeat(Math.max(0, lives)) + "🖤".repeat(Math.max(0, 3 - lives));

  return (
    <>
      <Head>
        <title>Emoji Catcher | Arcade | Nguyen Chau Linh</title>
        <meta name="description" content="Catch falling emojis in your basket — a fun React game" />
      </Head>

      <div className="arcade-page">
        <div className="arcade-page__bg" />

        <nav className="arcade-topbar">
          <Link href="/#ArcadeSection" className="arcade-topbar__back">
            ← Back to Portfolio
          </Link>
          <div className="arcade-topbar__title">
            <span className="arcade-topbar__emoji">🧺</span>
            {" "}Emoji Catcher
          </div>
        </nav>

        <div className="arcade-stats">
          <div className="arcade-stat arcade-stat--gold">
            <span className="arcade-stat__label">⏱️ Time</span>
            <span className="arcade-stat__value">{timeLeft}s</span>
          </div>
          <div className="arcade-stat arcade-stat--cyan">
            <span className="arcade-stat__label">⭐ Score</span>
            <span className="arcade-stat__value">{score}</span>
          </div>
          <div className="arcade-stat arcade-stat--pink">
            <span className="arcade-stat__label">Lives</span>
            <span className="arcade-stat__value">{heartDisplay}</span>
          </div>
        </div>

        {gameState === "idle" && (
          <div className="arcade-start-prompt">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="arcade-start-prompt__emoji"
            >
              🧺
            </motion.div>
            <h2 className="arcade-start-prompt__title">Catch the Emojis!</h2>
            <p className="arcade-start-prompt__text">
              Move your basket with mouse/touch or arrow keys. Catch fruits for points, dodge bombs!
            </p>
            <button onClick={start} className="arcade-btn arcade-btn--primary arcade-btn--large">
              🎮 Start Game
            </button>
          </div>
        )}

        {gameState !== "idle" && (
          <div
            ref={gameAreaRef}
            className="catcher-area"
            onPointerMove={handlePointerMove}
            style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
          >
            {/* Falling items */}
            {items.map((item) => (
              <div
                key={item.id}
                className="catcher-item"
                style={{
                  left: item.x,
                  top: item.y,
                }}
              >
                {item.emoji}
              </div>
            ))}

            {/* Basket */}
            <div
              className="catcher-basket"
              style={{ left: basketX, width: BASKET_WIDTH }}
            >
              🧺
              {catchEffect && (
                <motion.span
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="catcher-basket__effect"
                >
                  {catchEffect}
                </motion.span>
              )}
            </div>
          </div>
        )}

        {gameState === "done" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="arcade-overlay"
            >
              <motion.div
                initial={{ scale: 0.7, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", damping: 14 }}
                className="arcade-result"
              >
                <div className="arcade-result__emoji">
                  {lives <= 0 ? "💥" : "🎉"}
                </div>
                <h2 className="arcade-result__title">
                  {lives <= 0 ? "Game Over!" : "Time's Up!"}
                </h2>
                <p className="arcade-result__subtitle">
                  You caught {score} emojis{lives > 0 ? ` with ${lives} lives remaining!` : "!"}
                </p>
                <div className="arcade-result__actions">
                  <button onClick={start} className="arcade-btn arcade-btn--primary">
                    🔄 Play Again
                  </button>
                  <Link href="/#ArcadeSection" className="arcade-btn arcade-btn--secondary">
                    🏠 Back to Arcade
                  </Link>
                </div>
              </motion.div>
            </motion.div>
        )}

        {gameState === "playing" && (
          <div className="arcade-actions">
            <button
              onClick={() => {
                setGameState("done");
                clearTimers();
              }}
              className="arcade-btn arcade-btn--secondary"
            >
              ⏹️ End Game
            </button>
          </div>
        )}
      </div>
    </>
  );
}
