import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";

type Experience = {
  buttonLabel: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  stack: string[];
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
  },
];

export default function WhereIHaveWorked() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"} />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 02.</span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>

      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        <CompaniesBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <ExperienceDetails experience={experiences[activeIndex]} />
      </section>
    </div>
  );
}

const CompaniesBar = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div
      id="WhereIhaveWorkedSection"
      className=" flex flex-col md:flex-row  w-screen lg:w-auto
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center"
    >
      <div
        className=" hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[260px] translate-y-1 md:w-0.5
        rounded md:order-1 order-2  "
      >
        <motion.div
          animate={{ y: activeIndex * 48 - 10 }}
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary `}
        />
      </div>

      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0 ">
        <div className="flex flex-row md:flex-col">
          {experiences.map((experience, index) => (
            <button
              key={experience.company}
              onClick={() => setActiveIndex(index)}
              className={`flex-none sm:text-sm text-xs text-center md:text-left hover:text-AAsecondary
              hover:bg-ResumeButtonHover rounded font-mono py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500 ${
                activeIndex === index ? "bg-ResumeButtonHover text-AAsecondary" : "text-gray-500"
              }`}
            >
              {experience.buttonLabel}
            </button>
          ))}
        </div>
        <div className="block md:hidden h-0.5 rounded bg-gray-500">
          <motion.div animate={{ x: activeIndex * 128 }} className="w-[128px] h-0.5 rounded bg-AAsecondary" />
        </div>
      </div>
    </div>
  );
};

const ExperienceDetails = ({ experience }: { experience: Experience }) => {
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          {experience.role} <span className="text-AAsecondary">@ {experience.company}</span>
        </span>
        <span className="font-mono text-xs text-gray-500">{experience.period}</span>
        {experience.location ? <span className="font-mono text-xs text-gray-500">{experience.location}</span> : null}
      </div>

      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
        {experience.bullets.map((bullet, index) => (
          <div key={index} className="flex flex-row space-x-2">
            <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
            <span className="text-gray-500 sm:text-sm text-xs">{bullet}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        {experience.stack.map(item => (
          <span
            key={item}
            className="rounded border border-AAsecondary/30 px-3 py-1 text-[11px] font-mono text-gray-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
