import React from "react";
import { motion } from "framer-motion";
import { Link as ReactScrollLink } from "react-scroll";
import Img from "../../smallComp/image/Img";

interface MyNameProps {
  finishedLoading: boolean;
}

const badges = [
  "Frontend Engineer",
  "SSI Securities",
  "Fintech UI",
  "Design Systems",
  "React + TypeScript",
];

const workNotes = [
  {
    title: "Live products",
    text: "Built for people who need fast decisions, reliable data, and less friction.",
    className: "rotate-[-3deg] bg-[#fff8ea] text-[#17223f]",
  },
  {
    title: "How I work",
    text: "Clear UI, scalable code, good team rhythm, and delivery that feels calm.",
    className: "rotate-[2deg] bg-[#c7fbf4] text-[#17223f]",
  },
  {
    title: "Recent focus",
    text: "Trading platforms, CRM tools, onboarding journeys, and product-facing frontend systems.",
    className: "rotate-[-2deg] bg-[#ffd7cf] text-[#17223f]",
  },
];

const quickFacts = [
  { label: "Experience", value: "7+ years" },
  { label: "Current", value: "SSI Securities" },
  { label: "Specialty", value: "UI x Product Systems" },
];

const transitionFor = (finishedLoading: boolean, delay: number) => ({
  opacity: {
    delay: finishedLoading ? 0 : delay,
    duration: finishedLoading ? 0 : 0.2,
  },
  y: {
    delay: finishedLoading ? 0 : delay,
    duration: finishedLoading ? 0 : 0.2,
  },
});

const MyName: React.FC<MyNameProps> = (props) => {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-44 md:px-16 lg:px-20 2xl:px-72">
      <div className="hero-grid absolute inset-0 opacity-[0.15]" />
      <div className="absolute -left-20 top-20 h-44 w-44 rounded-full bg-[#ffcf6e]/20 blur-3xl" />
      <div className="absolute right-0 top-28 h-56 w-56 rounded-full bg-[#85e7dc]/[0.15] blur-3xl" />
      <div className="absolute bottom-8 left-1/3 h-40 w-40 rounded-full bg-[#ff8b92]/[0.12] blur-3xl" />

      <div className="relative grid items-center gap-14 xl:grid-cols-[1.05fr_0.95fr] xl:gap-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={transitionFor(props.finishedLoading, 10.35)}
            className="sticker-chip inline-flex rotate-[-2deg] items-center gap-3 px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.24em] text-AAsecondary"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#85e7dc]" />
            Hanoi-based frontend engineer
          </motion.div>

          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={transitionFor(props.finishedLoading, 10.5)}
            className="mt-7 max-w-4xl font-Header text-5xl leading-[0.96] text-[#fff8e7] sm:text-6xl lg:text-7xl xl:text-[5.2rem]"
          >
            Building playful clarity for serious digital products.
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={transitionFor(props.finishedLoading, 10.58)}
            className="mt-4 max-w-2xl font-Hand text-2xl leading-tight text-[#ffe3a8] sm:text-[2rem]"
          >
            Nguyen Chau Linh, turning dense workflows into interfaces that feel
            friendly, fast, and trustworthy.
          </motion.p>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={transitionFor(props.finishedLoading, 10.68)}
            className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-[#d5ddf2] sm:text-lg"
          >
            <p>
              I&apos;m a{" "}
              <span className="text-AAsecondary keyword-hover">
                frontend engineer
              </span>{" "}
              focused on{" "}
              <span className="text-AAsecondary keyword-hover">clean UI</span>,{" "}
              <span className="text-AAsecondary keyword-hover">
                scalable code
              </span>
              , and product experiences that make complex systems easier to
              understand.
            </p>
            <p>
              My recent work spans{" "}
              <span className="text-AAsecondary keyword-hover">
                fintech platforms
              </span>{" "}
              at{" "}
              <span className="text-AAsecondary keyword-hover">
                SSI Securities Corporation
              </span>
              , digital transformation delivery at{" "}
              <span className="text-AAsecondary keyword-hover">
                NAL Viet Nam
              </span>
              , and product flows where speed, trust, and maintainability all
              matter at once.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={transitionFor(props.finishedLoading, 10.76)}
            className="mt-8 flex flex-wrap gap-3"
          >
            {badges.map((badge) => (
              <span
                key={badge}
                className="sticker-chip inline-flex rotate-[-1deg] items-center rounded-full px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.18em] text-[#eef3ff]"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={transitionFor(props.finishedLoading, 10.84)}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
              <button className="resume-button-hover comic-shadow rounded-full border border-AAsecondary/60 bg-AAsecondary px-6 py-3 font-Header text-sm font-bold uppercase tracking-[0.16em] text-[#17223f] transition duration-300 sm:px-8 sm:py-4">
                View Resume
              </button>
            </a>

            <ReactScrollLink
              to="ProductsSection"
              spy={true}
              smooth={true}
              offset={-90}
              duration={250}
              className="comic-shadow-soft inline-flex cursor-pointer items-center rounded-full border border-white/[0.15] bg-white/[0.06] px-6 py-3 font-Mono text-sm uppercase tracking-[0.16em] text-[#fff8e7] transition duration-300 hover:-translate-y-1 hover:border-[#85e7dc] hover:bg-white/10 sm:px-8 sm:py-4"
            >
              See Live Products
            </ReactScrollLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={transitionFor(props.finishedLoading, 10.92)}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="absolute -right-2 top-8 h-24 w-24 rounded-full border border-white/20 bg-[#ffcf6e]/25 blur-2xl" />
          <div className="absolute -left-8 bottom-10 h-28 w-28 rounded-full border border-white/20 bg-[#85e7dc]/20 blur-2xl" />

          <div className="comic-panel relative rotate-[-1.5deg] overflow-hidden rounded-[34px] p-4 sm:p-6">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />

            <div className="relative flex items-center justify-between gap-3">
              <div className="sticker-chip inline-flex rotate-[-4deg] rounded-full px-4 py-2 font-Hand text-lg text-[#fff8e7]">
                profile crop
              </div>
              <div className="rounded-full border border-white/[0.15] bg-[#22335a] px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.18em] text-[#cdd7f7]">
                UI x Systems x Delivery
              </div>
            </div>

            <div className="relative mt-5 overflow-hidden rounded-[28px] border border-white/10 bg-[#f4deb7] p-4 sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_30%),linear-gradient(180deg,#f9e8bf_0%,#f4d8a8_100%)]" />
              <div className="absolute -left-8 top-6 h-20 w-20 rounded-full bg-[#ff8b92]/40 blur-2xl" />
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#85e7dc]/[0.35] blur-2xl" />

              <div className="relative grid gap-4 lg:grid-cols-[0.94fr_1.06fr]">
                <div className="relative overflow-hidden rounded-[24px] border-2 border-[#24335b] bg-[#24335b] shadow-[10px_10px_0_rgba(23,34,63,0.18)]">
                  <div className="relative min-h-[280px] overflow-hidden rounded-[20px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_35%),linear-gradient(180deg,#f9e8bf_0%,#f4d8a8_100%)] p-4">
                    <div className="absolute left-4 top-4 h-4 w-4 rounded-full border-2 border-[#24335b] bg-[#ffcf6e]" />
                    <div className="absolute right-6 top-8 h-3 w-3 rounded-full border-2 border-[#24335b] bg-[#85e7dc]" />
                    <div className="absolute left-6 top-14 h-10 w-[6px] rotate-[-18deg] rounded-full bg-[#24335b]" />
                    <div className="absolute right-5 bottom-16 h-12 w-[6px] rotate-[18deg] rounded-full bg-[#24335b]" />

                    <div className="relative mx-auto mt-1 w-full max-w-[232px] rounded-[28px] border-[4px] border-[#24335b] bg-[#fff8ea] p-2 shadow-[10px_10px_0_rgba(23,34,63,0.12)]">
                      <div className="overflow-hidden rounded-[22px] border-[3px] border-[#24335b] bg-[#fff8ea]">
                        <Img
                          src={"/img/portrait-face-crop-wider.png"}
                          alt="Portrait crop of Nguyen Chau Linh"
                          className="h-[214px] w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 rounded-[20px] border border-[#fff8ea]/70 bg-[#fff8ea]/[0.92] px-4 py-3 text-[#17223f] comic-shadow-soft">
                    <div className="font-Hand text-2xl leading-none">
                      From concept to release
                    </div>
                    <div className="mt-2 font-Mono text-[11px] uppercase tracking-[0.2em] text-[#31446f]">
                      calm interfaces for complex work
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4 py-1">
                  {workNotes.map((note) => (
                    <div
                      key={note.title}
                      className={`rounded-[24px] border-2 border-[#24335b]/[0.15] px-5 py-4 shadow-[8px_8px_0_rgba(23,34,63,0.12)] ${note.className}`}
                    >
                      <div className="font-Header text-lg font-bold">
                        {note.title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#23345f]/90">
                        {note.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {quickFacts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={`rounded-[22px] border border-white/[0.12] bg-white/[0.08] px-4 py-4 ${
                    index === 1
                      ? "rotate-[-1deg]"
                      : index === 2
                        ? "rotate-[1deg]"
                        : ""
                  }`}
                >
                  <div className="font-Mono text-[11px] uppercase tracking-[0.18em] text-[#ffe3a8]">
                    {fact.label}
                  </div>
                  <div className="mt-2 font-Header text-lg text-[#fff8e7]">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyName;
