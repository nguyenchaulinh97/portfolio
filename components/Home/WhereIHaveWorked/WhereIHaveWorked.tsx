import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import DoodleMascot from "../ArtDirection/DoodleMascot";
import { stickerHover } from "../ArtDirection/motionPresets";
import ScribbleDivider from "../ArtDirection/ScribbleDivider";
import SectionHeader from "../ArtDirection/SectionHeader";
import { experienceEntries } from "../portfolioContent";

export default function WhereIHaveWorked() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const experience = experienceEntries[activeIndex];

  return (
    <section
      id="WhereIhaveWorkedSection"
      data-aos="fade-up"
      className="relative overflow-hidden bg-AAprimary px-4 py-16 sm:px-16 sm:py-20 md:px-16 lg:px-24 2xl:px-72"
    >
      <div className="absolute left-0 top-24 h-48 w-48 rounded-full bg-[#85e7dc]/[0.08] blur-3xl" />
      <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-[#ffcf6e]/[0.1] blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeader
          number="02"
          title="Experience"
          sticker="timeline wall"
          note="The recent stops in my career, from early foundations to fintech product work happening now."
          lineClassName="max-w-[260px]"
        />

        <ScribbleDivider label="tap around" className="mt-8 max-w-3xl" />

        <div className="comic-panel relative mt-10 overflow-hidden rounded-[20px] p-3 sm:rounded-[34px] sm:p-6 xl:p-10">
          <div className="absolute left-10 top-0 h-7 w-24 -translate-y-1/2 rotate-[4deg] rounded-[10px] bg-[#cce5ff]" />

          {/* Mobile: compact horizontal tab strip */}
          <div className="relative mb-4 xl:hidden">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {experienceEntries.map((entry, index) => (
                <button
                  key={entry.company}
                  onClick={() => setActiveIndex(index)}
                  className={`shrink-0 rounded-full border px-4 py-2 font-Header text-sm transition duration-200 ${
                    activeIndex === index
                      ? "border-AAsecondary/40 bg-AAsecondary text-[#17223f] shadow-[6px_6px_0_rgba(23,34,63,0.12)]"
                      : "border-white/[0.12] bg-white/[0.06] text-[#d5ddf2]"
                  }`}
                >
                  {entry.buttonLabel}
                </button>
              ))}
            </div>
          </div>

          <div className="relative grid gap-6 xl:grid-cols-[260px_1fr]">
            {/* Desktop sidebar tabs - hidden on mobile */}
            <ExperienceTabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`paper-grid rounded-[18px] border-2 border-[#24335b]/10 p-4 text-[#17223f] shadow-[10px_10px_0_rgba(23,34,63,0.12)] sm:rounded-[30px] sm:p-6 xl:p-8 ${experience.paperClass}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="font-Mono text-[10px] uppercase tracking-[0.22em] text-[#5a6f99] sm:text-[11px]">{experience.company}</div>
                  <h3 className="mt-2 font-Header text-xl leading-tight sm:mt-3 sm:text-2xl lg:text-3xl">{experience.role}</h3>
                </div>

                <div className="shrink-0 rotate-[4deg] rounded-full border border-[#24335b]/10 bg-white/60 px-3 py-1.5 font-Hand text-base sm:px-4 sm:py-2 sm:text-xl">
                  {experience.note}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
                <span className="rounded-full border border-[#24335b]/10 bg-white/60 px-3 py-1.5 font-Mono text-[10px] uppercase tracking-[0.16em] text-[#31446f] sm:px-4 sm:py-2 sm:text-[11px]">
                  {experience.period}
                </span>
                {experience.location ? (
                  <span className="rounded-full border border-[#24335b]/10 bg-white/60 px-3 py-1.5 font-Mono text-[10px] uppercase tracking-[0.16em] text-[#31446f] sm:px-4 sm:py-2 sm:text-[11px]">
                    {experience.location}
                  </span>
                ) : null}
                {activeIndex === 0 ? (
                  <span className="rounded-full border border-[#24335b]/10 bg-[#85e7dc]/50 px-3 py-1.5 font-Mono text-[10px] uppercase tracking-[0.16em] text-[#17223f] sm:px-4 sm:py-2 sm:text-[11px]">
                    Current Role
                  </span>
                ) : null}
              </div>

              <ScribbleDivider label="what shipped" className="mt-5 sm:mt-8" />

              <div className="mt-4 grid gap-3 sm:mt-7 sm:gap-4">
                {experience.bullets.map(bullet => (
                  <div key={bullet} className="flex items-start gap-2 sm:gap-3">
                    <ArrowIcon className={"mt-1 h-3.5 w-3.5 flex-none text-[#17223f] sm:h-4 sm:w-4"} />
                    <span className="text-sm leading-6 text-[#31446f] sm:leading-7">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-8 sm:gap-2">
                {experience.stack.map(item => (
                  <span
                    key={item}
                    className="rounded-full border border-[#24335b]/10 bg-white/60 px-3 py-1 font-Mono text-[10px] uppercase tracking-[0.14em] text-[#31446f] sm:px-4 sm:py-2 sm:text-[11px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          </div>

          <div className="mt-8 hidden justify-end sm:flex">
            <DoodleMascot speech="career notes, but fun" label="timeline buddy" className="scale-[0.9]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceTabs({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="hidden space-y-4 xl:block">
      <div className="paper-panel rounded-[30px] p-4">
        <div className="font-Mono text-[10px] uppercase tracking-[0.24em] text-[#ffe3a8]">Select a chapter</div>
        <div className="mt-4 flex flex-col gap-3">
          {experienceEntries.map((experience, index) => (
            <motion.button
              key={experience.company}
              {...stickerHover}
              onClick={() => setActiveIndex(index)}
              className={`rounded-[22px] border px-4 py-4 text-left transition duration-300 ${
                activeIndex === index
                  ? "rotate-[-1deg] border-AAsecondary/[0.4] bg-AAsecondary text-[#17223f] shadow-[10px_10px_0_rgba(23,34,63,0.14)]"
                  : "border-white/[0.12] bg-white/[0.06] text-[#d5ddf2]"
              }`}
            >
              <div className="font-Header text-lg">{experience.buttonLabel}</div>
              <div
                className={`mt-1 font-Mono text-[10px] uppercase tracking-[0.18em] ${
                  activeIndex === index ? "text-[#24335b]" : "text-[#ffe3a8]"
                }`}
              >
                {experience.period}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-white/[0.12] bg-white/[0.06] p-5 text-sm leading-7 text-[#d5ddf2]">
        <div className="font-Hand text-2xl text-[#fff8e7]">What matters most</div>
        <p className="mt-3">
          The common thread across these roles is product-facing frontend work where clarity, delivery quality, and
          business context all matter together.
        </p>
      </div>
    </div>
  );
}
