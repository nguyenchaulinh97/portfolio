import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import { createFloatLoop } from "../ArtDirection/motionPresets";
import Link from "next/link";

type ArcadeGame = {
  title: string;
  emoji: string;
  description: string;
  href: string;
  colorClass: string;
  auraClass: string;
  tapeClass: string;
  rotation: string;
};

const arcadeGames: ArcadeGame[] = [
  {
    title: "Memory Flip",
    emoji: "🃏",
    description:
      "Flip cards and match emoji pairs before time runs out. Train your memory with cartoon flair!",
    href: "/arcade/memory",
    colorClass: "bg-[#fff6df]",
    auraClass: "bg-[#ffcf6e]/20",
    tapeClass: "bg-[#ffcf6e]/80",
    rotation: "rotate-[-2deg]",
  },
  {
    title: "Whack-a-Mole",
    emoji: "🐹",
    description:
      "Furry critters pop up from their holes — whack as many as you can in 30 seconds!",
    href: "/arcade/whack",
    colorClass: "bg-[#c7fbf4]",
    auraClass: "bg-[#85e7dc]/20",
    tapeClass: "bg-[#85e7dc]/80",
    rotation: "rotate-[1.5deg]",
  },
  {
    title: "Emoji Catcher",
    emoji: "🧺",
    description:
      "Emojis rain from the sky — move your basket to catch the good ones and dodge the bombs!",
    href: "/arcade/catcher",
    colorClass: "bg-[#ffd7cf]",
    auraClass: "bg-[#ff8b92]/20",
    tapeClass: "bg-[#ff8b92]/80",
    rotation: "rotate-[-1deg]",
  },
];

export default function ArcadeSection() {
  return (
    <section
      id="ArcadeSection"
      data-aos="fade-up"
      className="relative overflow-hidden bg-AAprimary px-4 py-16 sm:px-16 sm:py-20 md:px-16 lg:px-24 2xl:px-72"
    >
      <div className="hero-grid absolute inset-0 opacity-10" />
      <div className="absolute -right-16 top-20 h-60 w-60 rounded-full bg-[#ffcf6e]/[0.12] blur-3xl" />
      <div className="absolute left-0 top-32 h-52 w-52 rounded-full bg-[#ff8b92]/10 blur-3xl" />
      <div className="absolute bottom-16 right-1/4 h-48 w-48 rounded-full bg-[#85e7dc]/10 blur-3xl" />

      <div className="relative">
        {/* Section header */}
        <div className="flex flex-row items-center">
          <ArrowIcon className="h-5 w-5 flex-none translate-y-[2px] text-AAsecondary md:h-6 md:w-5" />
          <div className="flex-none items-center pr-2">
            <span className="font-Mono text-sm text-AAsecondary sm:text-xl"> 🕹️</span>
            <span className="section-doodle pl-3 font-Header text-lg font-bold tracking-wide text-[#fff8e7] md:text-2xl">
              Arcade Corner
            </span>
          </div>
          <div className="h-[0.2px] w-full bg-[#cfd6e9]/30 md:w-1/2 xl:w-1/3" />
        </div>

        {/* Intro */}
        <div className="mt-10 max-w-3xl">
          <motion.div
            animate={{ y: [0, -3, 0], rotate: [-2, 0, -2] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 font-Hand text-xl text-[#fff8e7]"
          >
            🎮 play time
          </motion.div>
          <h3 className="mt-6 max-w-2xl font-Header text-2xl leading-tight text-[#fff8e7] sm:text-4xl lg:text-5xl">
            Take a break — try a mini game!
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#d0d8ee] sm:text-lg">
            These bite-sized arcade games are built with React, pure CSS animations, and zero
            dependencies. They showcase interactive UI, game-loop patterns, and playful cartoon
            aesthetics — all inside this Next.js portfolio.
          </p>
        </div>

        {/* Game cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {arcadeGames.map((game, index) => (
            <ArcadeCard key={game.title} game={game} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArcadeCard({ game, index }: { game: ArcadeGame; index: number }) {
  return (
    <motion.div
      {...createFloatLoop({
        distance: index % 2 === 0 ? 5 : 4,
        duration: 3.6 + index * 0.3,
        delay: index * 0.15,
      })}
    >
      <Link href={game.href}>
        <article
          className={`comic-panel group relative cursor-pointer overflow-hidden rounded-[20px] p-4 transition-transform duration-300 hover:-translate-y-2 sm:rounded-[34px] sm:p-7 ${game.rotation}`}
        >
          {/* Decorative tape */}
          <div
            className={`absolute left-10 top-0 h-7 w-20 -translate-y-1/2 rotate-[-4deg] rounded-[10px] ${game.tapeClass}`}
          />
          <div
            className={`absolute right-6 top-6 h-32 w-32 rounded-full blur-3xl ${game.auraClass}`}
          />

          {/* Emoji hero */}
          <div className="flex items-center justify-between gap-3">
            <span
              className={`flex h-20 w-20 items-center justify-center rounded-[24px] border-2 border-[#24335b]/[0.12] text-5xl shadow-[8px_8px_0_rgba(16,25,47,0.14)] ${game.colorClass}`}
            >
              {game.emoji}
            </span>
            <motion.span
              animate={{ rotate: [0, 12, -12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
              className="text-4xl"
            >
              🎯
            </motion.span>
          </div>

          <h4 className="mt-6 font-Header text-2xl leading-tight text-[#fff8e7]">{game.title}</h4>
          <p className="mt-3 text-sm leading-7 text-[#d0d8ee]">{game.description}</p>

          {/* Play button */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-AAsecondary/60 bg-AAsecondary px-5 py-3 font-Header text-sm font-bold uppercase tracking-[0.14em] text-[#17223f] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_14px_28px_rgba(11,18,40,0.22)]">
            <span>Play Now</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </div>

          {/* Sparkles */}
          <span className="sparkle-twinkle absolute bottom-5 right-5 h-3 w-3 rounded-full border border-[#24335b]/20 bg-white/70" />
          <span className="sparkle-twinkle-delayed absolute right-16 top-20 h-2 w-2 rounded-full border border-white/30 bg-[#ffcf6e]/80" />
        </article>
      </Link>
    </motion.div>
  );
}
