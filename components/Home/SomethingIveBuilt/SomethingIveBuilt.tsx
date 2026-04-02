import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

const caseStudies = [
  {
    eyebrow: "SSI Securities Corporation",
    title: "Real-Time Trading Platform",
    summary:
      "Built and maintained interfaces for price boards, order flows, and broker management tools used in financial trading operations.",
    highlights: [
      "Focused on real-time updates, state-heavy UI, and reliable delivery for production fintech workflows.",
      "Worked across engineering and business teams to keep release cycles fast without losing product quality.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Zustand", "React Query", "WebSocket"],
  },
  {
    eyebrow: "SSI Securities Corporation",
    title: "Investor Operations CRM & AI Assistant",
    summary:
      "Delivered internal CRM tooling and an AI chatbot to support investor services and day-to-day operational teams.",
    highlights: [
      "Designed for internal users who needed speed, clarity, and dependable workflows.",
      "Supported cross-functional delivery as both an engineer and Scrum Master within a 16-person team.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Internal Tools", "AI Workflows", "CI/CD"],
  },
  {
    eyebrow: "NAL Viet Nam",
    title: "Digital Transformation for Japanese Clients",
    summary:
      "Built frontend products for enterprise clients, including Softbank-related work, with an emphasis on secure delivery, maintainability, and product quality.",
    highlights: [
      "Combined React, Redux, testing, and cloud delivery workflows to keep projects reliable at scale.",
      "Contributed to both business-facing tools and a Metaverse experience for a virtual university in Japan.",
    ],
    stack: ["React", "Redux", "TypeScript", "PhaserJS", "Jest", "AWS", "Docker"],
  },
  {
    eyebrow: "Maritime Bank Vietnam",
    title: "Payments & Merchant Management",
    summary:
      "Designed banking and payments-facing experiences, including merchant management, web payment flows, and chatbot support tools.",
    highlights: [
      "Worked in security-sensitive environments where frontend decisions directly supported business operations.",
      "Built interfaces that balanced internal complexity with straightforward user journeys.",
    ],
    stack: ["Angular", "Node.js", "GitLab", "Security Authentication", "Agile/Scrum"],
  },
];

export default function SomethingIveBuilt() {
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-20 space-y-12 bg-AAprimary w-full
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 04.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            Case Studies
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {caseStudies.map(study => (
          <div
            key={study.title}
            data-aos="fade-up"
            className="rounded border border-gray-800 bg-AAtertiary/60 p-8 shadow-lg shadow-black/10"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="text-sm font-mono text-AAsecondary">{study.eyebrow}</span>
                <h3 className="mt-2 text-xl font-bold text-gray-200">{study.title}</h3>
              </div>
              <span className="rounded border border-AAsecondary/40 px-3 py-1 text-[11px] font-mono text-gray-400">
                Confidential Work
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-400">{study.summary}</p>

            <div className="mt-6 flex flex-col space-y-3">
              {study.highlights.map(highlight => (
                <div key={highlight} className="flex items-start space-x-2">
                  <ArrowIcon className={"mt-1 h-4 w-4 text-AAsecondary flex-none"} />
                  <span className="text-sm text-gray-400">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {study.stack.map(item => (
                <span
                  key={item}
                  className="rounded border border-AAsecondary/30 px-3 py-1 text-[11px] font-mono text-gray-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mx-auto max-w-2xl text-center text-sm leading-7 text-gray-400">
        The work above represents selected product experience from recent roles. Detailed walkthroughs, architecture
        decisions, and delivery context are available during interviews.
      </p>
    </div>
  );
}
