export type HeroNote = {
  title: string;
  text: string;
  className: string;
};

export type HeroFact = {
  label: string;
  value: string;
};

export type AboutCard = {
  title: string;
  text: string;
  className: string;
};

export type SkillCluster = {
  title: string;
  items: string[];
  className: string;
};

export type ExperienceEntry = {
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

export type ProductLink = {
  label: string;
  url: string;
};

export type ProductImage = {
  src: string;
  alt: string;
  caption: string;
};

export type LiveProductCard = {
  name: string;
  company: string;
  summary: string;
  highlights: string[];
  tags: string[];
  links: ProductLink[];
  images: ProductImage[];
  badgeLabel: string;
  noteLabel: string;
  accentClass: string;
  auraClass: string;
  tapeClass: string;
  paperClass: string;
  rotationClass?: string;
};

export type CaseStudy = {
  eyebrow: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  note: string;
  paperClass: string;
  tapeClass: string;
  rotationClass: string;
};

export type MiniGameSticker = {
  id: string;
  label: string;
  fact: string;
  paperClass: string;
  tapeClass: string;
  accentClass: string;
  top: string;
  left: string;
  rotation: number;
  driftX: number;
  driftY: number;
  duration: number;
  delay: number;
};

export const heroBadges = [
  "Frontend Engineer",
  "SSI Securities",
  "Fintech UI",
  "Design Systems",
  "React + TypeScript",
];

export const heroWorkNotes: HeroNote[] = [
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

export const heroQuickFacts: HeroFact[] = [
  { label: "Experience", value: "7+ years" },
  { label: "Current", value: "SSI Securities" },
  { label: "Specialty", value: "UI x Product Systems" },
];

export const aboutPrincipleCards: AboutCard[] = [
  {
    title: "Clarity first",
    text: "I like interfaces that feel approachable even when the workflow underneath is dense.",
    className: "rotate-[-2deg] bg-[#fff6df]",
  },
  {
    title: "Built to last",
    text: "Maintainable structure, testing discipline, and clean state management matter just as much as visual polish.",
    className: "rotate-[1.5deg] bg-[#c7fbf4]",
  },
  {
    title: "Team rhythm",
    text: "The best product work happens when engineering, business, and design stay aligned without unnecessary friction.",
    className: "rotate-[2deg] bg-[#ffd7cf]",
  },
];

export const aboutSkillClusters: SkillCluster[] = [
  {
    title: "Frontend Core",
    items: ["React", "Next.js", "TypeScript", "Zustand"],
    className: "rotate-[-1.5deg] bg-[#fff6df]",
  },
  {
    title: "Product Delivery",
    items: ["Redux", "React Query", "Testing", "CI/CD"],
    className: "rotate-[1.2deg] bg-[#eef7ff]",
  },
  {
    title: "UI Craft",
    items: ["SCSS/SASS", "Design Systems", "Accessibility", "Responsive UI"],
    className: "rotate-[-1deg] bg-[#fff0ec]",
  },
  {
    title: "Ops Context",
    items: ["AWS", "Docker", "Security/Auth", "Cross-team Delivery"],
    className: "rotate-[1.8deg] bg-[#e6fbf4]",
  },
];

export const experienceEntries: ExperienceEntry[] = [
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

export const featuredProductGroup: LiveProductCard = {
  name: "iBoard - iBroker",
  company: "SSI Securities",
  summary:
    "Two SSI products I contributed to: iBoard for live market monitoring and iBroker for the trading access experience around SSI's investor journey.",
  highlights: [
    "iBoard handles dense market information and real-time updates, so the interface had to stay fast, readable, and easy to scan under pressure.",
    "iBroker focuses more on a streamlined entry experience, helping investors move through account access with less friction.",
    "Together they reflect my product work across both information-heavy fintech UI and tighter onboarding or access journeys.",
  ],
  tags: ["Fintech", "Market Data", "Trading UI", "Investor Journey", "Real-Time Product"],
  links: [
    { label: "Visit iBoard", url: "http://iboard.ssi.com.vn/" },
    { label: "Visit iBroker", url: "https://ibroker.ssi.com.vn/" },
  ],
  images: [
    {
      src: "/img/products/iboard-home-annotated.png",
      alt: "iBoard screenshot",
      caption: "iBoard live market board",
    },
    {
      src: "/img/products/ibroker-home-annotated.png",
      alt: "iBroker screenshot",
      caption: "iBroker login experience",
    },
  ],
  badgeLabel: "Featured Product Group",
  noteLabel: "fintech board",
  accentClass: "text-[#ffe08f]",
  auraClass: "bg-[#85e7dc]/20",
  tapeClass: "bg-[#ffd58f]",
  paperClass: "bg-[#fff6df]",
};

export const liveProducts: LiveProductCard[] = [
  {
    name: "Brighton College Vietnam",
    company: "Brighton College Vietnam",
    summary:
      "A public-facing school website designed to present campus life, admissions content, and a premium educational brand with warmth and clarity.",
    highlights: [
      "Balances information architecture with storytelling for families who need trust, atmosphere, and next-step clarity.",
      "Supports a content-rich experience with brand-heavy visuals and a polished admissions journey.",
      "Shows product thinking in a very different context from fintech: emotional tone matters as much as structure.",
    ],
    tags: ["Education", "Brand Website", "Admissions Journey", "Content Experience"],
    links: [{ label: "Visit Brighton", url: "https://brightoncollege.edu.vn/" }],
    images: [
      {
        src: "/img/products/brighton-home-annotated.png",
        alt: "Brighton College Vietnam screenshot",
        caption: "Brighton College Vietnam homepage",
      },
    ],
    badgeLabel: "Live Product",
    noteLabel: "brand site",
    accentClass: "text-[#a9d6ff]",
    auraClass: "bg-[#9eb5ff]/20",
    tapeClass: "bg-[#cce5ff]",
    paperClass: "bg-[#eef7ff]",
    rotationClass: "rotate-[-1.2deg]",
  },
  {
    name: "MSB Merchant Portal",
    company: "MSB",
    summary:
      "A merchant onboarding portal centered on registration and verification, built to reduce friction for business users joining the MSB merchant ecosystem.",
    highlights: [
      "Uses a compact, form-led layout to guide merchants through verification and account activation with less confusion.",
      "Prioritizes a direct onboarding flow rather than a marketing-heavy experience, so hierarchy and guidance need to be immediately obvious.",
      "Represents another side of fintech work: operational journeys where completion rate and clarity matter more than visual flourish.",
    ],
    tags: ["Fintech", "Merchant Onboarding", "Portal UX", "Verification Flow"],
    links: [{ label: "Visit MSB Merchant Portal", url: "https://msbpay.msb.com.vn/onboarding" }],
    images: [
      {
        src: "/img/products/msb-merchant-annotated.png",
        alt: "MSB Merchant Portal screenshot",
        caption: "MSB Merchant onboarding portal",
      },
    ],
    badgeLabel: "Live Product",
    noteLabel: "ops flow",
    accentClass: "text-[#ffb5a6]",
    auraClass: "bg-[#ff8b92]/20",
    tapeClass: "bg-[#ffd1c7]",
    paperClass: "bg-[#fff0ec]",
    rotationClass: "rotate-[1.1deg]",
  },
];

export const caseStudies: CaseStudy[] = [
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
    note: "market flow",
    paperClass: "bg-[#fff6df]",
    tapeClass: "bg-[#ffd58f]",
    rotationClass: "rotate-[-1.5deg]",
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
    note: "internal system",
    paperClass: "bg-[#eef7ff]",
    tapeClass: "bg-[#cce5ff]",
    rotationClass: "rotate-[1.2deg]",
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
    note: "client delivery",
    paperClass: "bg-[#fff0ec]",
    tapeClass: "bg-[#ffd1c7]",
    rotationClass: "rotate-[-1deg]",
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
    note: "payments ops",
    paperClass: "bg-[#e6fbf4]",
    tapeClass: "bg-[#b7efe4]",
    rotationClass: "rotate-[1.6deg]",
  },
];

export const stickerHuntStickers: MiniGameSticker[] = [
  {
    id: "iboard",
    label: "iBoard",
    fact: "Real-time market data UI where speed and scanability matter under pressure.",
    paperClass: "bg-[#fff6df]",
    tapeClass: "bg-[#ffd58f]",
    accentClass: "text-[#17223f]",
    top: "10%",
    left: "9%",
    rotation: -7,
    driftX: 8,
    driftY: 10,
    duration: 5,
    delay: 0,
  },
  {
    id: "ibroker",
    label: "iBroker",
    fact: "A tighter investor access flow that reduces friction around login and account entry.",
    paperClass: "bg-[#eef7ff]",
    tapeClass: "bg-[#cce5ff]",
    accentClass: "text-[#17223f]",
    top: "17%",
    left: "54%",
    rotation: 6,
    driftX: -10,
    driftY: 8,
    duration: 4.6,
    delay: 0.2,
  },
  {
    id: "brighton",
    label: "Brighton",
    fact: "A premium education website where storytelling and trust are just as important as structure.",
    paperClass: "bg-[#fff0ec]",
    tapeClass: "bg-[#ffd1c7]",
    accentClass: "text-[#17223f]",
    top: "33%",
    left: "18%",
    rotation: -5,
    driftX: 7,
    driftY: -10,
    duration: 5.4,
    delay: 0.35,
  },
  {
    id: "msb",
    label: "MSB",
    fact: "Merchant onboarding work focused on clarity, verification flow, and completion rate.",
    paperClass: "bg-[#e6fbf4]",
    tapeClass: "bg-[#b7efe4]",
    accentClass: "text-[#17223f]",
    top: "48%",
    left: "60%",
    rotation: 8,
    driftX: -9,
    driftY: 11,
    duration: 4.8,
    delay: 0.5,
  },
  {
    id: "ssi",
    label: "SSI",
    fact: "Current work covers trading tools, internal CRM systems, and cross-functional delivery.",
    paperClass: "bg-[#fff6df]",
    tapeClass: "bg-[#ffd58f]",
    accentClass: "text-[#17223f]",
    top: "60%",
    left: "10%",
    rotation: -8,
    driftX: 10,
    driftY: -7,
    duration: 5.2,
    delay: 0.1,
  },
  {
    id: "nal",
    label: "NAL",
    fact: "Japanese client delivery across enterprise products, testing workflows, and cloud deployment.",
    paperClass: "bg-[#eef7ff]",
    tapeClass: "bg-[#cce5ff]",
    accentClass: "text-[#17223f]",
    top: "68%",
    left: "44%",
    rotation: 5,
    driftX: -7,
    driftY: 9,
    duration: 4.4,
    delay: 0.45,
  },
  {
    id: "crm",
    label: "CRM",
    fact: "Internal operational tools for teams who need dependable, calm, task-heavy interfaces.",
    paperClass: "bg-[#fff0ec]",
    tapeClass: "bg-[#ffd1c7]",
    accentClass: "text-[#17223f]",
    top: "22%",
    left: "33%",
    rotation: -3,
    driftX: 9,
    driftY: -8,
    duration: 4.9,
    delay: 0.28,
  },
  {
    id: "ui-systems",
    label: "UI Systems",
    fact: "The through-line in the portfolio is making dense systems feel friendly, fast, and trustworthy.",
    paperClass: "bg-[#e6fbf4]",
    tapeClass: "bg-[#b7efe4]",
    accentClass: "text-[#17223f]",
    top: "74%",
    left: "70%",
    rotation: 7,
    driftX: -8,
    driftY: -9,
    duration: 5.1,
    delay: 0.6,
  },
];
