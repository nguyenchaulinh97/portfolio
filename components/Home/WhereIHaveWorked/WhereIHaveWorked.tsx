import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import DoodleMascot from "../ArtDirection/DoodleMascot";
import ScribbleDivider from "../ArtDirection/ScribbleDivider";
import SectionHeader from "../ArtDirection/SectionHeader";

type Experience = {
  buttonLabel: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  stack: string[];
  note: string;
  paperClass: string;
};

const experiences: Experience[] = [
  {
    buttonLabel: "SSI",
    company: "SSI Securities Corporation",
    role: "Software Engineer",
    period: "Aug 2024 - Present",
    location: "Hanoi",
    bullets: [
      "Built and maintained real-time trading experiences, including price boards, order flows, and broker management tools.",
      "Delivered internal CRM tools and an AI chatbot to support investor services and operations.",
      "Worked as Scrum Master for a 16-person cross-functional team, helping organize sprint planning and delivery cadence.",
      "Collaborated across business and engineering teams to ship financial technology features quickly and reliably.",
    ],
    stack: ["JavaScript", "TypeScript", "React", "Next.js", "Zustand", "React Query", "WebSocket", "SCSS/SASS", "CI/CD"],
    note: "current chapter",
    paperClass: "bg-[#fff6df]",
  },
  {
    buttonLabel: "NAL Viet Nam",
    company: "NAL Viet Nam",
    role: "Frontend Developer",
    period: "Dec 2022 - Jul 2024",
    location: "Hanoi, Vietnam",
    bullets: [
      "Built digital products and transformation initiatives for Japanese clients, including Softbank, with a strong focus on quality and security.",
      "Designed and implemented a Metaverse game for a virtual university in Japan.",
      "Used testing and delivery workflows to keep frontend code reliable, maintainable, and ready for production.",
      "Contributed to product teams working across business requirements, technical delivery, and user experience improvements.",
    ],
    stack: ["React", "Redux", "TypeScript", "PhaserJS", "React Testing Library", "Jest", "AWS", "Docker", "CI/CD"],
    note: "transformation work",
    paperClass: "bg-[#eef7ff]",
  },
  {
    buttonLabel: "Maritime",
    company: "Maritime Bank Vietnam",
    role: "Card Tech and Merchandising Consultant",
    period: "Feb 2020 - Jan 2022",
    location: "Vietnam",
    bullets: [
      "Worked on digital transformation and security-focused banking experiences.",
      "Designed the frontend for the Merchant Management System and Web Payment Portal.",
      "Built a chatbot solution for departments including Legal and Human Resources.",
      "Developed the FCCom card management frontend using Angular, Node.js, and GitLab in an Agile/Scrum environment.",
    ],
    stack: ["Angular", "Node.js", "GitLab", "Security Authentication", "Chatbot Workflows", "Agile/Scrum"],
    note: "payments + merchant tools",
    paperClass: "bg-[#fff0ec]",
  },
  {
    buttonLabel: "Appota",
    company: "Appota",
    role: "Frontend Developer",
    period: "Jun 2019 - Dec 2019",
    location: "Hanoi, Vietnam",
    bullets: [
      "Built web and mobile product experiences as part of the Appota team.",
      "Developed a CMS for Appwifi using React, Redux, TypeScript, and React Native.",
      "Designed and launched the landing page for the Wifi Coffee service.",
    ],
    stack: ["React", "Redux", "TypeScript", "React Native", "CMS"],
    note: "consumer product sprint",
    paperClass: "bg-[#e6fbf4]",
  },
  {
    buttonLabel: "Viettel",
    company: "Viettel Network",
    role: "Software Engineer Contributor",
    period: "Feb 2018 - May 2019",
    location: "Hanoi, Vietnam",
    bullets: [
      "Contributed to web applications at the Software Development Center.",
      "Applied Java, Spring, and microservices training while building product features.",
      "Worked with React, Node.js, HTML, CSS, JavaScript, and Python across internal projects.",
    ],
    stack: ["React", "Node.js", "Java", "Spring", "Microservices", "Python"],
    note: "foundation builder",
    paperClass: "bg-[#fff6df]",
  },
  {
    buttonLabel: "VCCorp",
    company: "VCCorp Corporation",
    role: "Engineer Intern",
    period: "Jun 2017 - Jan 2018",
    location: "Hanoi, Vietnam",
    bullets: [
      "Supported front-end web projects and source control workflows.",
      "Converted PSD designs into HTML and CSS layouts while building core web fundamentals.",
      "Gained early experience with JavaScript, ASP.NET, databases, GitHub, GitLab, and Bitbucket.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "ASP.NET", "Databases", "Git"],
    note: "first web chapter",
    paperClass: "bg-[#eef7ff]",
  },
];

export default function WhereIHaveWorked() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const experience = experiences[activeIndex];

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
          {experiences.map((experience, index) => (
            <motion.button
              key={experience.company}
              whileHover={{ y: -4, rotate: 0 }}
              transition={{ duration: 0.18 }}
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
