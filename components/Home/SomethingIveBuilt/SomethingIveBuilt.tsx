import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import { stickerHover } from "../ArtDirection/motionPresets";
import ScribbleDivider from "../ArtDirection/ScribbleDivider";
import SectionHeader from "../ArtDirection/SectionHeader";
import { caseStudies } from "../portfolioContent";

export default function SomethingIveBuilt() {
  return (
    <section
      id="SomethingIveBuiltSection"
      className="relative overflow-hidden bg-AAprimary px-4 py-16 sm:px-16 sm:py-20 md:px-16 lg:px-24 2xl:px-72"
    >
      <div className="absolute -left-12 top-20 h-52 w-52 rounded-full bg-[#9eb5ff]/[0.08] blur-3xl" />
      <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-[#ff8b92]/[0.08] blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeader
          number="04"
          title="Case Studies"
          sticker="confidential notebook"
          note="Selected product stories from recent roles. The work is mostly private, so these cards focus on responsibilities, systems, and outcomes."
          lineClassName="max-w-[260px]"
        />

        <ScribbleDivider label="selected work" className="mt-8 max-w-3xl" />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {caseStudies.map(study => (
            <motion.article
              key={study.title}
              data-aos="fade-up"
              {...stickerHover}
              className={`comic-panel relative overflow-hidden rounded-[20px] p-3 sm:rounded-[34px] sm:p-4 ${study.rotationClass}`}
            >
              <div className={`absolute left-10 top-0 h-7 w-20 -translate-y-1/2 rotate-[-5deg] rounded-[10px] ${study.tapeClass}`} />

              <div className={`paper-grid rounded-[16px] border-2 border-[#24335b]/10 p-4 text-[#17223f] shadow-[8px_8px_0_rgba(23,34,63,0.12)] sm:rounded-[28px] sm:p-6 sm:shadow-[12px_12px_0_rgba(23,34,63,0.14)] xl:p-8 ${study.paperClass}`}>
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div>
                    <div className="font-Mono text-[10px] uppercase tracking-[0.22em] text-[#5a6f99] sm:text-[11px]">{study.eyebrow}</div>
                    <h3 className="mt-2 font-Header text-xl leading-tight sm:mt-3 sm:text-2xl lg:text-3xl">{study.title}</h3>
                  </div>

                  <div className="hidden shrink-0 rotate-[4deg] rounded-full border border-[#24335b]/10 bg-white/60 px-3 py-1.5 font-Hand text-base sm:block sm:px-4 sm:py-2 sm:text-xl">
                    {study.note}
                  </div>
                </div>

                <div className="mt-5 inline-flex rounded-full border border-[#24335b]/10 bg-[#24335b] px-4 py-2 font-Mono text-[10px] uppercase tracking-[0.22em] text-[#ffe3a8]">
                  Confidential Work
                </div>

                <p className="mt-6 text-base leading-8 text-[#31446f]">{study.summary}</p>

                <ScribbleDivider label="impact notes" className="mt-7" />

                <div className="mt-6 space-y-4">
                  {study.highlights.map(highlight => (
                    <div key={highlight} className="flex items-start gap-3">
                      <ArrowIcon className={"mt-1 h-4 w-4 flex-none text-[#17223f]"} />
                      <span className="text-sm leading-7 text-[#31446f] sm:text-base">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-7 sm:gap-2">
                  {study.stack.map(item => (
                    <span
                      key={item}
                      className="rounded-full border border-[#24335b]/10 bg-white/60 px-3 py-1 font-Mono text-[10px] uppercase tracking-[0.14em] text-[#31446f] sm:px-4 sm:py-2 sm:text-[11px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 rounded-[18px] border border-white/[0.12] bg-white/[0.06] px-4 py-4 text-center text-sm leading-7 text-[#d5ddf2] sm:rounded-[28px] sm:px-6 sm:py-5">
          Detailed walkthroughs, technical decisions, and delivery context are available during interviews when there is
          room for deeper discussion.
        </div>
      </div>
    </section>
  );
}
