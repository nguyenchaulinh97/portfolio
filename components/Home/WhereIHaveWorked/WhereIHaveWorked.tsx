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
      className="relative overflow-hidden bg-AAprimary px-4 py-28 sm:px-16 md:px-16 lg:px-24 2xl:px-72"
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

        <div className="comic-panel relative mt-10 overflow-hidden rounded-[38px] p-6 sm:p-8 xl:p-10">
          <div className="absolute left-10 top-0 h-7 w-24 -translate-y-1/2 rotate-[4deg] rounded-[10px] bg-[#cce5ff]" />
          <div className="relative grid gap-6 xl:grid-cols-[260px_1fr]">
            <ExperienceTabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`paper-grid rounded-[34px] border-2 border-[#24335b]/10 p-6 text-[#17223f] shadow-[14px_14px_0_rgba(23,34,63,0.14)] sm:p-8 ${experience.paperClass}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="font-Mono text-[11px] uppercase tracking-[0.22em] text-[#5a6f99]">{experience.company}</div>
                  <h3 className="mt-3 font-Header text-3xl leading-tight">{experience.role}</h3>
                </div>

                <div className="rotate-[4deg] rounded-full border border-[#24335b]/10 bg-white/60 px-4 py-2 font-Hand text-xl">
                  {experience.note}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#24335b]/10 bg-white/60 px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.16em] text-[#31446f]">
                  {experience.period}
                </span>
                {experience.location ? (
                  <span className="rounded-full border border-[#24335b]/10 bg-white/60 px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.16em] text-[#31446f]">
                    {experience.location}
                  </span>
                ) : null}
                {activeIndex === 0 ? (
                  <span className="rounded-full border border-[#24335b]/10 bg-[#85e7dc]/50 px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.16em] text-[#17223f]">
                    Current Role
                  </span>
                ) : null}
              </div>

              <ScribbleDivider label="what shipped" className="mt-8" />

              <div className="mt-7 grid gap-4">
                {experience.bullets.map(bullet => (
                  <div key={bullet} className="flex items-start gap-3">
                    <ArrowIcon className={"mt-1 h-4 w-4 flex-none text-[#17223f]"} />
                    <span className="text-sm leading-7 text-[#31446f] sm:text-base">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {experience.stack.map(item => (
                  <span
                    key={item}
                    className="rounded-full border border-[#24335b]/10 bg-white/60 px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.14em] text-[#31446f]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          </div>

          <div className="mt-8 flex justify-end">
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
    <div className="space-y-4">
      <div className="paper-panel rounded-[30px] p-4">
        <div className="font-Mono text-[10px] uppercase tracking-[0.24em] text-[#ffe3a8]">Select a chapter</div>
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2 xl:flex-col xl:overflow-visible">
          {experienceEntries.map((experience, index) => (
            <motion.button
              key={experience.company}
              {...stickerHover}
              onClick={() => setActiveIndex(index)}
              className={`min-w-[150px] rounded-[22px] border px-4 py-4 text-left transition duration-300 xl:min-w-0 ${
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
