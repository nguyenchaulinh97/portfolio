import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const games = [
  {
    title: "Memory Flip",
    emoji: "🃏",
    description: "Flip cards and match emoji pairs before time runs out!",
    href: "/arcade/memory",
    color: "#ffcf6e",
  },
  {
    title: "Whack-a-Mole",
    emoji: "🐹",
    description: "Whack critters as they pop up — dodge the bombs!",
    href: "/arcade/whack",
    color: "#85e7dc",
  },
  {
    title: "Emoji Catcher",
    emoji: "🧺",
    description: "Catch falling emojis with your basket before they hit the ground!",
    href: "/arcade/catcher",
    color: "#ff8b92",
  },
];

export default function ArcadeIndex() {
  return (
    <>
      <Head>
        <title>Arcade Corner | Nguyen Chau Linh</title>
        <meta name="description" content="Mini arcade games — Memory Flip, Whack-a-Mole, Emoji Catcher" />
      </Head>

      <div className="arcade-page">
        <div className="arcade-page__bg" />

        <nav className="arcade-topbar">
          <Link href="/#ArcadeSection" className="arcade-topbar__back">
            ← Back to Portfolio
          </Link>
          <div className="arcade-topbar__title">
            <span className="arcade-topbar__emoji">🕹️</span>
            {" "}Arcade Corner
          </div>
        </nav>

        <div style={{ textAlign: "center", maxWidth: 480, margin: "24px auto 0" }}>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ fontSize: 64, marginBottom: 12 }}
          >
            🎮
          </motion.div>
          <h1 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: 40,
            color: "#fff8e7",
            marginBottom: 8,
          }}>
            Pick a Game
          </h1>
          <p style={{ fontSize: 15, color: "#d0d8ee", lineHeight: 1.6, marginBottom: 36 }}>
            Each mini game is built with React, zero game libraries, and a cartoon UI style.
          </p>
        </div>

        <div style={{
          display: "grid",
          gap: 16,
          maxWidth: 480,
          width: "100%",
          margin: "0 auto",
        }}>
          {games.map((game, index) => (
            <Link key={game.href} href={game.href} style={{ textDecoration: "none" }}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.35 }}
                whileHover={{ y: -4, scale: 1.02 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  padding: "20px 24px",
                  borderRadius: 24,
                  border: `1px solid ${game.color}33`,
                  background: `linear-gradient(135deg, ${game.color}12, ${game.color}06)`,
                  cursor: "pointer",
                  transition: "box-shadow 200ms",
                }}
              >
                <span style={{ fontSize: 44, flexShrink: 0 }}>{game.emoji}</span>
                <div>
                  <div style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    color: "#fff8e7",
                  }}>
                    {game.title}
                  </div>
                  <div style={{ fontSize: 14, color: "#d0d8ee", marginTop: 4, lineHeight: 1.5 }}>
                    {game.description}
                  </div>
                </div>
                <span style={{ marginLeft: "auto", fontSize: 22, color: game.color }}>→</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
