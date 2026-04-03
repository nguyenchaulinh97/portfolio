import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import Img from "../../../components/smallComp/image/Img";
import DoodleMascot from "../ArtDirection/DoodleMascot";
import ScribbleDivider from "../ArtDirection/ScribbleDivider";
import { stickerHover } from "../ArtDirection/motionPresets";
import SectionHeader from "../ArtDirection/SectionHeader";
import { aboutPrincipleCards, aboutSkillClusters } from "../portfolioContent";

interface AboutMeProps {}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((_props, ref) => {
  return (
    <section
      ref={ref}
      id="aboutSection"
      data-aos="fade-up"
      className="relative overflow-hidden bg-AAprimary px-4 py-28 sm:px-16 md:px-16 lg:px-24 2xl:px-72"
    >
      <div className="absolute -left-10 top-24 h-40 w-40 rounded-full bg-[#ffcf6e]/[0.12] blur-3xl" />
      <div className="absolute right-0 top-16 h-56 w-56 rounded-full bg-[#85e7dc]/[0.12] blur-3xl" />
      <div className="absolute bottom-10 left-1/2 h-48 w-48 rounded-full bg-[#ff8b92]/[0.1] blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeader
          number="01"
          title="About Me"
          sticker="story board"
          note="A quick look at how I think about frontend work, collaboration, and the kind of product problems I enjoy solving."
          lineClassName="max-w-[220px]"
        />

        <ScribbleDivider label="mindset + toolbox" className="mt-8 max-w-3xl" />

        <div className="comic-panel relative mt-10 overflow-hidden rounded-[38px] p-6 sm:p-8 xl:p-10">
          <div className="absolute left-10 top-0 h-7 w-24 -translate-y-1/2 rotate-[-4deg] rounded-[10px] bg-[#ffd58f]" />
          <div className="absolute right-10 top-6 h-32 w-32 rounded-full bg-white/[0.05] blur-3xl" />

          <div className="relative grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="paper-grid rounded-[30px] border-2 border-[#24335b]/10 bg-[#fff6df] p-6 text-[#17223f] shadow-[14px_14px_0_rgba(23,34,63,0.14)] sm:p-8">
                <div className="inline-flex rotate-[-3deg] rounded-full border border-[#24335b]/10 bg-[#fff8ea] px-4 py-2 font-Hand text-xl shadow-[8px_8px_0_rgba(23,34,63,0.08)]">
                  how I work
                </div>

                <h3 className="mt-6 max-w-xl font-Header text-3xl leading-tight text-[#17223f] sm:text-4xl">
                  I like making complicated systems feel calm and understandable.
                </h3>

                <div className="mt-6 space-y-5 text-base leading-8 text-[#31446f]">
                  <p>
                    Hi, I&apos;m Chau Linh. Over the last <span className="text-[#17223f] font-bold">7+ years</span>,
                    I&apos;ve worked across fintech and digital product teams, building trading platforms, internal
                    tools, onboarding journeys, and business-facing interfaces that have to stay clear under pressure.
                  </p>
                  <p>
                    My recent work includes{" "}
                    <span className="font-bold text-[#17223f]">real-time stock trading products</span> at{" "}
                    <span className="font-bold text-[#17223f]">SSI Securities Corporation</span> and{" "}
                    <span className="font-bold text-[#17223f]">digital transformation delivery</span> for Japanese
                    clients at <span className="font-bold text-[#17223f]">NAL Viet Nam</span>.
                  </p>
                  <p>
                    What keeps me motivated is the mix of thoughtful engineering, fast product feedback, and the
                    challenge of turning dense workflows into UI that feels simple on the surface.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                {aboutPrincipleCards.map(card => (
                  <motion.div
                    key={card.title}
                    {...stickerHover}
                    className={`rounded-[26px] border-2 border-[#24335b]/10 px-5 py-5 text-[#17223f] shadow-[10px_10px_0_rgba(23,34,63,0.1)] ${card.className}`}
                  >
                    <div className="font-Header text-lg font-bold">{card.title}</div>
                    <p className="mt-3 text-sm leading-7 text-[#31446f]">{card.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <motion.figure
                whileHover={{ y: -6, rotate: -1 }}
                transition={{ duration: 0.25 }}
                className="relative mx-auto max-w-[420px] rounded-[34px] bg-[#fff6df] p-4 text-[#17223f] shadow-[14px_14px_0_rgba(23,34,63,0.14)]"
              >
                <div className="absolute left-7 top-0 h-7 w-24 -translate-y-1/2 rotate-[-5deg] rounded-[10px] bg-[#ffd58f]" />
                <div className="overflow-hidden rounded-[26px] border border-[#24335b]/10 bg-[#203058]">
                  <Img
                    src={"/img/portrait.jpeg"}
                    className={"h-[360px] w-full object-cover object-top"}
                    alt="Portrait of Nguyen Chau Linh"
                  />
                </div>

                <figcaption className="px-2 pb-2 pt-5">
                  <div className="font-Mono text-[10px] uppercase tracking-[0.22em] text-[#5a6f99]">Profile Card</div>
                  <div className="mt-2 font-Header text-2xl leading-tight">Frontend engineer with a product mindset</div>
                  <p className="mt-3 text-sm leading-7 text-[#31446f]">
                    I care about the moment when a dense business tool starts feeling easy to use for the people who
                    depend on it every day.
                  </p>
                </figcaption>
              </motion.figure>

              <div className="grid gap-4 sm:grid-cols-2">
                {aboutSkillClusters.map(cluster => (
                  <motion.div
                    key={cluster.title}
                    {...stickerHover}
                    className={`rounded-[26px] border-2 border-[#24335b]/10 p-5 text-[#17223f] shadow-[10px_10px_0_rgba(23,34,63,0.1)] ${cluster.className}`}
                  >
                    <div className="font-Header text-lg font-bold">{cluster.title}</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cluster.items.map(item => (
                        <span
                          key={item}
                          className="rounded-full border border-[#24335b]/10 bg-white/60 px-3 py-1 font-Mono text-[11px] uppercase tracking-[0.14em] text-[#31446f]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="rounded-[26px] border border-white/[0.12] bg-white/[0.08] px-5 py-5 text-sm leading-7 text-[#d5ddf2]">
                  <div className="font-Mono text-[10px] uppercase tracking-[0.22em] text-[#ffe3a8]">Good fit</div>
                  <p className="mt-3 max-w-sm">
                    Teams building thoughtful digital products, especially when UI clarity, delivery quality, and
                    cross-functional collaboration all matter at once.
                  </p>
                </div>

                <DoodleMascot speech="let's build calm UI" label="tiny teammate" className="shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
