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
      className="relative overflow-hidden bg-AAprimary px-4 py-28 sm:px-16 md:px-16 lg:px-24 2xl:px-72"
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
              className={`comic-panel relative overflow-hidden rounded-[34px] p-4 ${study.rotationClass}`}
            >
              <div className={`absolute left-10 top-0 h-7 w-20 -translate-y-1/2 rotate-[-5deg] rounded-[10px] ${study.tapeClass}`} />

              <div className={`paper-grid rounded-[28px] border-2 border-[#24335b]/10 p-6 text-[#17223f] shadow-[12px_12px_0_rgba(23,34,63,0.14)] sm:p-8 ${study.paperClass}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-Mono text-[11px] uppercase tracking-[0.22em] text-[#5a6f99]">{study.eyebrow}</div>
                    <h3 className="mt-3 font-Header text-3xl leading-tight">{study.title}</h3>
                  </div>

                  <div className="rotate-[4deg] rounded-full border border-[#24335b]/10 bg-white/60 px-4 py-2 font-Hand text-xl">
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

                <div className="mt-7 flex flex-wrap gap-2">
                  {study.stack.map(item => (
                    <span
                      key={item}
                      className="rounded-full border border-[#24335b]/10 bg-white/60 px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.14em] text-[#31446f]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 rounded-[28px] border border-white/[0.12] bg-white/[0.06] px-6 py-5 text-center text-sm leading-7 text-[#d5ddf2]">
          Detailed walkthroughs, technical decisions, and delivery context are available during interviews when there is
          room for deeper discussion.
        </div>
      </div>
    </section>
  );
}
