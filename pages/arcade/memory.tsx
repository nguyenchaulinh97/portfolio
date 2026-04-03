import React, { useCallback, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const ALL_EMOJIS = [
  "🐶", "🐱", "🐸", "🦊", "🐻", "🐼", "🐨", "🐯",
  "🦁", "🐮", "🐷", "🐵", "🐙", "🦄", "🐝", "🦋",
];
const BOARD_SIZE = 16;
const PAIR_COUNT = BOARD_SIZE / 2;
const GAME_TIME = 60;

type Card = { id: number; emoji: string; flipped: boolean; matched: boolean };

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildDeck(): Card[] {
  const picked = shuffleArray(ALL_EMOJIS).slice(0, PAIR_COUNT);
  const doubled = [...picked, ...picked];
  return shuffleArray(doubled).map((emoji, index) => ({
    id: index,
    emoji,
    flipped: false,
    matched: false,
  }));
}

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>(() => buildDeck());
  const [selected, setSelected] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME);
  const [gameState, setGameState] = useState<"idle" | "playing" | "won" | "lost">("idle");
  const [combo, setCombo] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const matchedCount = useMemo(() => cards.filter((c) => c.matched).length, [cards]);

  const restart = useCallback(() => {
    setCards(buildDeck());
    setSelected([]);
    setMoves(0);
    setTimeLeft(GAME_TIME);
    setGameState("idle");
    setCombo(0);
    setShowConfetti(false);
  }, []);

  // Timer
  useEffect(() => {
    if (gameState !== "playing") return;
    if (timeLeft <= 0) {
      setGameState("lost");
      return;
    }
    const interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [gameState, timeLeft]);

  // Win check
  useEffect(() => {
    if (matchedCount === BOARD_SIZE && gameState === "playing") {
      setGameState("won");
      setShowConfetti(true);
    }
  }, [matchedCount, gameState]);

  // Card match check
  useEffect(() => {
    if (selected.length !== 2) return;
    const [a, b] = selected;
    setMoves((m) => m + 1);

    if (cards[a].emoji === cards[b].emoji) {
      setCombo((c) => c + 1);
      setTimeout(() => {
        setCards((prev) =>
          prev.map((card, i) => (i === a || i === b ? { ...card, matched: true } : card))
        );
        setSelected([]);
      }, 400);
    } else {
      setCombo(0);
      setTimeout(() => {
        setCards((prev) =>
          prev.map((card, i) => (i === a || i === b ? { ...card, flipped: false } : card))
        );
        setSelected([]);
      }, 700);
    }
  }, [selected, cards]);

  const handleCardClick = (index: number) => {
    if (gameState === "idle") setGameState("playing");
    if (gameState === "won" || gameState === "lost") return;
    if (selected.length >= 2) return;
    if (cards[index].flipped || cards[index].matched) return;

    setCards((prev) => prev.map((card, i) => (i === index ? { ...card, flipped: true } : card)));
    setSelected((prev) => [...prev, index]);
  };

  return (
    <>
      <Head>
        <title>Memory Flip | Arcade | Nguyen Chau Linh</title>
        <meta name="description" content="A fun emoji memory card game built with React" />
      </Head>

      <div className="arcade-page">
        <div className="arcade-page__bg" />

        {/* Top bar */}
        <nav className="arcade-topbar">
          <Link href="/#ArcadeSection" className="arcade-topbar__back">
            ← Back to Portfolio
          </Link>
          <div className="arcade-topbar__title">
            <span className="arcade-topbar__emoji">🃏</span>
            Memory Flip
          </div>
        </nav>

        {/* Stats */}
        <div className="arcade-stats">
          <div className="arcade-stat arcade-stat--gold">
            <span className="arcade-stat__label">⏱️ Time</span>
            <span className="arcade-stat__value">{timeLeft}s</span>
          </div>
          <div className="arcade-stat arcade-stat--cyan">
            <span className="arcade-stat__label">🎯 Moves</span>
            <span className="arcade-stat__value">{moves}</span>
          </div>
          <div className="arcade-stat arcade-stat--pink">
            <span className="arcade-stat__label">✨ Pairs</span>
            <span className="arcade-stat__value">
              {matchedCount / 2}/{PAIR_COUNT}
            </span>
          </div>
          {combo >= 2 && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="arcade-stat arcade-stat--fire"
            >
              <span className="arcade-stat__label">🔥 Combo</span>
              <span className="arcade-stat__value">x{combo}</span>
            </motion.div>
          )}
        </div>

        {/* Board */}
        <div className="memory-board">
          {cards.map((card, index) => (
            <motion.button
              key={card.id}
              whileTap={{ scale: 0.92 }}
              onClick={() => handleCardClick(index)}
              className={`memory-card ${card.flipped || card.matched ? "memory-card--flipped" : ""} ${card.matched ? "memory-card--matched" : ""}`}
            >
              <div className="memory-card__inner">
                <div className="memory-card__front">❓</div>
                <div className="memory-card__back">{card.emoji}</div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Overlay */}
        {(gameState === "won" || gameState === "lost") && (
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
                {showConfetti && (
                  <div className="arcade-confetti">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <span
                        key={`confetti-${i}`}
                        className="arcade-confetti__piece"
                        style={{
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 0.5}s`,
                          backgroundColor: ["#ffcf6e", "#85e7dc", "#ff8b92", "#9eb5ff"][i % 4],
                        }}
                      />
                    ))}
                  </div>
                )}
                <div className="arcade-result__emoji">
                  {gameState === "won" ? "🎉" : "⏰"}
                </div>
                <h2 className="arcade-result__title">
                  {gameState === "won" ? "You Won!" : "Time's Up!"}
                </h2>
                <p className="arcade-result__subtitle">
                  {gameState === "won"
                    ? `Matched all pairs in ${moves} moves with ${timeLeft}s left!`
                    : `You matched ${matchedCount / 2}/${PAIR_COUNT} pairs. Try again!`}
                </p>
                <div className="arcade-result__actions">
                  <button onClick={restart} className="arcade-btn arcade-btn--primary">
                    🔄 Play Again
                  </button>
                  <Link href="/#ArcadeSection" className="arcade-btn arcade-btn--secondary">
                    🏠 Back to Arcade
                  </Link>
                </div>
              </motion.div>
            </motion.div>
        )}

        {/* Restart button */}
        <div className="arcade-actions">
          <button onClick={restart} className="arcade-btn arcade-btn--secondary">
            🔄 Restart
          </button>
        </div>
      </div>
    </>
  );
}
