import React from "react";
import { motion } from "framer-motion";

const loaderCards = [
  {
    title: "Sticker board",
    text: "pinning playful details",
    className: "bg-[#fff6df] text-[#17223f]",
  },
  {
    title: "Live products",
    text: "lining up real work",
    className: "bg-[#c7fbf4] text-[#17223f]",
  },
  {
    title: "Case notes",
    text: "tidying the story",
    className: "bg-[#ffd7cf] text-[#17223f]",
  },
  {
    title: "Finishing touch",
    text: "adding tiny sparkles",
    className: "bg-[#eef7ff] text-[#17223f]",
  },
];

const loaderDots = ["bg-[#ffcf6e]", "bg-[#85e7dc]", "bg-[#ff8b92]", "bg-[#9eb5ff]"];

export default function PlayfulLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.45, ease: "easeOut" } }}
      className="fixed inset-0 z-[70] flex items-center justify-center overflow-hidden bg-AAprimary px-4"
    >
      <div className="hero-grid absolute inset-0 opacity-[0.08]" />
      <div className="absolute -left-8 top-10 h-56 w-56 rounded-full bg-[#ffcf6e]/20 blur-3xl" />
      <div className="absolute right-0 top-16 h-64 w-64 rounded-full bg-[#85e7dc]/15 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-[#ff8b92]/15 blur-3xl" />

      <div className="relative w-full max-w-3xl">
        <div className="comic-panel relative overflow-hidden rounded-[40px] px-6 py-8 sm:px-10 sm:py-10">
          <div className="absolute left-12 top-0 h-8 w-24 -translate-y-1/2 rotate-[-4deg] rounded-[10px] bg-[#ffd58f]" />
          <div className="absolute right-10 top-8 h-28 w-28 rounded-full bg-white/[0.06] blur-3xl" />

          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [-2, 1, -2] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 font-Hand text-xl text-[#fff8e7]"
              >
                loading doodles
              </motion.div>

              <h2 className="mt-6 max-w-2xl font-Header text-4xl leading-tight text-[#fff8e7] sm:text-5xl">
                Warming up the sticker board...
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#d5ddf2] sm:text-lg">
                Pinning notes, aligning screenshots, and getting the playful bits ready before the portfolio opens.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {loaderCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{
                    opacity: 1,
                    y: [0, index % 2 === 0 ? -8 : -6, 0],
                    rotate: [index % 2 === 0 ? -2 : 2, index % 2 === 0 ? 1 : -1, index % 2 === 0 ? -2 : 2],
                  }}
                  transition={{
                    opacity: { delay: index * 0.08, duration: 0.28 },
                    y: {
                      delay: index * 0.1,
                      duration: 2.2 + index * 0.18,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: {
                      delay: index * 0.1,
                      duration: 3 + index * 0.25,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className={`rounded-[24px] border-2 border-[#24335b]/10 px-4 py-5 shadow-[10px_10px_0_rgba(23,34,63,0.1)] ${card.className}`}
                >
                  <div className="font-Header text-lg font-bold">{card.title}</div>
                  <div className="mt-2 font-Mono text-[10px] uppercase tracking-[0.22em] text-[#5a6f99]">
                    {card.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-full border border-white/[0.12] bg-white/[0.08] p-1">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "115%" }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="loader-sweep h-3 w-[55%] rounded-full"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="rounded-[22px] border border-white/[0.12] bg-white/[0.06] px-4 py-3 text-left text-[#d5ddf2]">
                <div className="font-Mono text-[10px] uppercase tracking-[0.22em] text-[#ffe3a8]">
                  playful pre-flight
                </div>
                <div className="mt-2 font-Hand text-2xl text-[#fff8e7]">hero, stickers, live products</div>
              </div>

              <div className="flex items-center gap-3">
                {loaderDots.map((dotClassName, index) => (
                  <span
                    key={dotClassName}
                    className={`loader-orb ${dotClassName}`}
                    style={{ animationDelay: `${index * 0.18}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
