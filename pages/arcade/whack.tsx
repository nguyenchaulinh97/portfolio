import React, { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const GRID_SIZE = 9;
const GAME_DURATION = 30;
const MOLE_SHOW_MS = 900;
const SPAWN_INTERVAL_MS = 700;

const CRITTERS = ["🐹", "🐿️", "🐰", "🦔"];
const BOMB = "💣";

type Hole = {
  active: boolean;
  emoji: string;
  isBomb: boolean;
  key: number;
};

const emptyHoles = (): Hole[] =>
  Array.from({ length: GRID_SIZE }, () => ({
    active: false,
    emoji: "",
    isBomb: false,
    key: 0,
  }));

export default function WhackAMole() {
  const [holes, setHoles] = useState<Hole[]>(emptyHoles);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [gameState, setGameState] = useState<"idle" | "playing" | "done">("idle");
  const [hitEffect, setHitEffect] = useState<{ index: number; type: "hit" | "bomb" } | null>(null);

  const spawnRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const keyRef = useRef(0);

  const clearSpawner = useCallback(() => {
    if (spawnRef.current) {
      clearInterval(spawnRef.current);
      spawnRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    setHoles(emptyHoles());
    setScore(0);
    setMisses(0);
    setTimeLeft(GAME_DURATION);
    setGameState("playing");
    setHitEffect(null);
  }, []);

  // Timer
  useEffect(() => {
    if (gameState !== "playing") return;
    if (timeLeft <= 0) {
      setGameState("done");
      clearSpawner();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [gameState, timeLeft, clearSpawner]);

  // Mole spawner
  useEffect(() => {
    if (gameState !== "playing") return;

    spawnRef.current = setInterval(() => {
      const index = Math.floor(Math.random() * GRID_SIZE);
      const isBomb = Math.random() < 0.2;
      const emoji = isBomb ? BOMB : CRITTERS[Math.floor(Math.random() * CRITTERS.length)];
      keyRef.current += 1;
      const currentKey = keyRef.current;

      setHoles((prev) => {
        const next = [...prev];
        next[index] = { active: true, emoji, isBomb, key: currentKey };
        return next;
      });

      // Auto-hide after timeout
      setTimeout(() => {
        setHoles((prev) => {
          const next = [...prev];
          if (next[index].key === currentKey) {
            next[index] = { ...next[index], active: false };
          }
          return next;
        });
      }, MOLE_SHOW_MS);
    }, SPAWN_INTERVAL_MS);

    return clearSpawner;
  }, [gameState, clearSpawner]);

  const handleWhack = (index: number) => {
    if (gameState !== "playing") return;
    const hole = holes[index];
    if (!hole.active) return;

    if (hole.isBomb) {
      setScore((s) => Math.max(0, s - 3));
      setHitEffect({ index, type: "bomb" });
    } else {
      setScore((s) => s + 1);
      setHitEffect({ index, type: "hit" });
    }

    setHoles((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], active: false };
      return next;
    });

    setTimeout(() => setHitEffect(null), 350);
  };

  return (
    <>
      <Head>
        <title>Whack-a-Mole | Arcade | Nguyen Chau Linh</title>
        <meta name="description" content="A playful whack-a-mole game built with React" />
      </Head>

      <div className="arcade-page">
        <div className="arcade-page__bg" />

        <nav className="arcade-topbar">
          <Link href="/#ArcadeSection" className="arcade-topbar__back">
            ← Back to Portfolio
          </Link>
          <div className="arcade-topbar__title">
            <span className="arcade-topbar__emoji">🐹</span>
            {" "}Whack-a-Mole
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
            <span className="arcade-stat__label">💥 Bombs</span>
            <span className="arcade-stat__value">-3 each</span>
          </div>
        </div>

        {gameState === "idle" && (
          <div className="arcade-start-prompt">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="arcade-start-prompt__emoji"
            >
              🐹
            </motion.div>
            <h2 className="arcade-start-prompt__title">Ready to Whack?</h2>
            <p className="arcade-start-prompt__text">
              Tap critters for +1 point. Avoid bombs (-3 points)!
            </p>
            <button onClick={start} className="arcade-btn arcade-btn--primary arcade-btn--large">
              🎯 Start Game
            </button>
          </div>
        )}

        {gameState !== "idle" && (
          <div className="whack-grid">
            {holes.map((hole, index) => (
              <button
                key={`hole-${index}`}
                className={`whack-hole ${hitEffect?.index === index ? `whack-hole--${hitEffect.type}` : ""}`}
                onClick={() => handleWhack(index)}
                type="button"
              >
                <div className="whack-hole__ground" />
                {hole.active && (
                    <motion.div
                      initial={{ y: 40, scale: 0.3, opacity: 0 }}
                      animate={{ y: 0, scale: 1, opacity: 1 }}
                      transition={{ type: "spring", damping: 12, stiffness: 300 }}
                      className="whack-hole__critter"
                    >
                      {hole.emoji}
                    </motion.div>
                  )}
              </button>
            ))}
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
                  {score >= 15 ? "🏆" : score >= 8 ? "⭐" : "🐹"}
                </div>
                <h2 className="arcade-result__title">
                  {score >= 15 ? "Amazing!" : score >= 8 ? "Nice!" : "Good Try!"}
                </h2>
                <p className="arcade-result__subtitle">
                  You scored {score} points in {GAME_DURATION} seconds!
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
                clearSpawner();
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
