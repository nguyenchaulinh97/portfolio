import React, { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { createFloatLoop } from "../ArtDirection/motionPresets";
import { MiniGameSticker, stickerHuntStickers } from "../portfolioContent";

const ROUND_DURATION = 20;

type PortfolioStickerHuntProps = {
  isOpen: boolean;
  onClose: () => void;
  onExploreProducts: () => void;
};

export default function PortfolioStickerHunt({
  isOpen,
  onClose,
  onExploreProducts,
}: PortfolioStickerHuntProps) {
  const prefersReducedMotion = useReducedMotion();
  const [capturedIds, setCapturedIds] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(ROUND_DURATION);
  const [round, setRound] = useState(0);

  const capturedStickers = useMemo(
    () => capturedIds.map(id => stickerHuntStickers.find(sticker => sticker.id === id)).filter(Boolean) as MiniGameSticker[],
    [capturedIds]
  );

  const isRoundFinished = timeLeft === 0 || capturedIds.length === stickerHuntStickers.length;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setCapturedIds([]);
    setTimeLeft(ROUND_DURATION);
  }, [isOpen, round]);

  useEffect(() => {
    if (!isOpen || isRoundFinished) {
      return;
    }

    const interval = window.setInterval(() => {
      setTimeLeft(previous => (previous > 0 ? previous - 1 : 0));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isOpen, isRoundFinished]);

  useEffect(() => {
    if (!isOpen || typeof document === "undefined") {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleCaptureSticker = (stickerId: string) => {
    if (isRoundFinished) {
      return;
    }

    setCapturedIds(current => (current.includes(stickerId) ? current : [...current, stickerId]));
  };

  const handlePlayAgain = () => {
    setRound(current => current + 1);
  };

  const handleExploreProducts = () => {
    onClose();
    window.setTimeout(() => onExploreProducts(), 120);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0d1428]/80 px-4 py-6 backdrop-blur-sm">
      <div className="hero-grid absolute inset-0 opacity-[0.08]" />
      <div className="absolute left-0 top-14 h-56 w-56 rounded-full bg-[#ffcf6e]/20 blur-3xl" />
      <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-[#85e7dc]/15 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.28 }}
        className="comic-panel relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[38px] p-5 sm:p-8"
      >
        <div className="absolute left-12 top-0 h-8 w-24 -translate-y-1/2 rotate-[-4deg] rounded-[10px] bg-[#ffd58f]" />
        <div className="absolute right-12 top-8 h-28 w-28 rounded-full bg-white/[0.06] blur-3xl" />

        <div className="relative flex max-h-[calc(92vh-2.5rem)] flex-col overflow-hidden">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <motion.div
                {...createFloatLoop({ distance: 3, duration: 3.4, rotate: [-3, -1, -3] })}
                className="inline-flex rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 font-Hand text-xl text-[#fff8e7]"
              >
                Portfolio Sticker Hunt
              </motion.div>

              <h3 className="mt-4 font-Header text-3xl leading-tight text-[#fff8e7] sm:text-4xl">
                Catch drifting stickers and pin the portfolio story together.
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-8 text-[#d5ddf2]">
                Tap or click the floating stickers before time runs out. Each sticker unlocks a real fact from the
                products and systems behind this portfolio.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-3 font-Mono text-[11px] uppercase tracking-[0.18em] text-[#fff8e7] transition duration-300 hover:-translate-y-1 hover:border-[#85e7dc]"
            >
              close
            </button>
          </div>

          <div className="mt-6 grid gap-6 overflow-hidden xl:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.18em] text-[#ffe3a8]">
                  time left: {timeLeft}s
                </div>
                <div className="rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.18em] text-[#ffe3a8]">
                  score: {capturedIds.length}/{stickerHuntStickers.length}
                </div>
                <div className="rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 font-Hand text-xl text-[#fff8e7]">
                  optional fun layer
                </div>
              </div>

              <div className="paper-grid relative min-h-[360px] overflow-hidden rounded-[32px] border-2 border-[#24335b]/10 bg-[#fff6df] shadow-[14px_14px_0_rgba(23,34,63,0.14)] sm:min-h-[420px]">
                <div className="absolute inset-x-0 top-0 flex justify-between px-6 pt-5 text-[#17223f]">
                  <div>
                    <div className="font-Mono text-[10px] uppercase tracking-[0.22em] text-[#5a6f99]">Play Area</div>
                    <div className="mt-2 font-Header text-2xl">Catch the drifting notes</div>
                  </div>
                  <div className="hidden rounded-full border border-[#24335b]/10 bg-white/70 px-4 py-2 font-Hand text-xl sm:block">
                    sticker board
                  </div>
                </div>

                {stickerHuntStickers.map(sticker => {
                  const isCaptured = capturedIds.includes(sticker.id);

                  return (
                    <motion.button
                      key={`${round}-${sticker.id}`}
                      type="button"
                      onClick={() => handleCaptureSticker(sticker.id)}
                      disabled={isCaptured || isRoundFinished}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={
                        isCaptured
                          ? { opacity: 0, scale: 0.5 }
                          : prefersReducedMotion
                            ? { opacity: 1, scale: 1, rotate: sticker.rotation }
                            : {
                                opacity: 1,
                                scale: 1,
                                x: [0, sticker.driftX, 0, sticker.driftX * -0.5, 0],
                                y: [0, sticker.driftY * -1, 0, sticker.driftY * 0.35, 0],
                                rotate: [sticker.rotation, sticker.rotation + 3, sticker.rotation - 2, sticker.rotation],
                              }
                      }
                      transition={
                        isCaptured
                          ? { duration: 0.18 }
                          : prefersReducedMotion
                            ? { duration: 0.2 }
                            : {
                                duration: sticker.duration,
                                delay: sticker.delay,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }
                      }
                      whileHover={prefersReducedMotion ? undefined : { scale: 1.04, y: -4, rotate: sticker.rotation }}
                      className={`absolute min-w-[110px] rounded-[22px] border-2 border-[#24335b]/10 px-4 py-4 text-left shadow-[10px_10px_0_rgba(23,34,63,0.12)] transition duration-150 ${sticker.paperClass} ${sticker.accentClass} ${
                        isCaptured ? "pointer-events-none" : ""
                      }`}
                      style={{ top: sticker.top, left: sticker.left }}
                    >
                      <div className={`absolute left-4 top-0 h-6 w-16 -translate-y-1/2 rounded-[10px] ${sticker.tapeClass}`} />
                      <div className="font-Header text-lg font-bold">{sticker.label}</div>
                      <div className="mt-1 font-Mono text-[10px] uppercase tracking-[0.18em] text-[#5a6f99]">
                        tap to pin
                      </div>
                    </motion.button>
                  );
                })}

                {isRoundFinished ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#17223f]/25 px-6">
                    <div className="max-w-md rounded-[28px] border border-white/[0.2] bg-[#fff8ea]/95 px-6 py-6 text-center text-[#17223f] shadow-[0_22px_44px_rgba(11,18,40,0.18)]">
                      <div className="font-Mono text-[10px] uppercase tracking-[0.22em] text-[#5a6f99]">round complete</div>
                      <div className="mt-3 font-Header text-3xl">You pinned {capturedIds.length} story stickers.</div>
                      <p className="mt-4 text-sm leading-7 text-[#31446f]">
                        This is meant to be a small delight layer, so every capture simply reveals more context about
                        the real work behind the portfolio.
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex max-h-[60vh] flex-col overflow-hidden rounded-[32px] border border-white/[0.12] bg-white/[0.06] p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="font-Mono text-[10px] uppercase tracking-[0.22em] text-[#ffe3a8]">Pinned Notes</div>
                  <div className="mt-2 font-Header text-2xl text-[#fff8e7]">Portfolio facts you caught</div>
                </div>
                <div className="rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 font-Hand text-xl text-[#fff8e7]">
                  {capturedIds.length === 0 ? "start catching" : `${capturedIds.length} pinned`}
                </div>
              </div>

              <div className="mt-5 flex-1 overflow-y-auto pr-1">
                {capturedStickers.length === 0 ? (
                  <div className="rounded-[26px] border border-white/[0.12] bg-white/[0.05] px-5 py-5 text-sm leading-7 text-[#d5ddf2]">
                    Catch a sticker to pin a real product or experience note here. You can use this as a playful tour
                    of the work without leaving the homepage.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {capturedStickers.map((sticker, index) => (
                      <motion.div
                        key={`${round}-${sticker.id}-pinned`}
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.22, delay: index * 0.04 }}
                        className={`rounded-[24px] border-2 border-[#24335b]/10 px-5 py-5 text-[#17223f] shadow-[10px_10px_0_rgba(23,34,63,0.1)] ${sticker.paperClass}`}
                      >
                        <div className={`mb-3 inline-flex rounded-full px-3 py-1 font-Mono text-[10px] uppercase tracking-[0.18em] text-[#17223f] ${sticker.tapeClass}`}>
                          {sticker.label}
                        </div>
                        <p className="text-sm leading-7 text-[#31446f]">{sticker.fact}</p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handlePlayAgain}
              className="resume-button-hover rounded-full border border-AAsecondary/60 bg-AAsecondary px-6 py-3 font-Header text-sm font-bold uppercase tracking-[0.14em] text-[#17223f] transition duration-300"
            >
              Play Again
            </button>

            <button
              type="button"
              onClick={handleExploreProducts}
              className="rounded-full border border-white/[0.12] bg-white/[0.08] px-6 py-3 font-Mono text-sm uppercase tracking-[0.14em] text-[#fff8e7] transition duration-300 hover:-translate-y-1 hover:border-[#85e7dc]"
            >
              Explore Products
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/[0.12] bg-white/[0.08] px-6 py-3 font-Mono text-sm uppercase tracking-[0.14em] text-[#fff8e7] transition duration-300 hover:-translate-y-1 hover:border-[#85e7dc]"
            >
              View Resume
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
