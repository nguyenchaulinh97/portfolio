import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";

type ProductLink = {
  label: string;
  url: string;
};

type ProductImage = {
  src: string;
  alt: string;
  caption: string;
};

type LiveProductCard = {
  name: string;
  company: string;
  summary: string;
  highlights: string[];
  tags: string[];
  links: ProductLink[];
  images: ProductImage[];
  badgeLabel: string;
  badgeClass: string;
  glowClass: string;
  gradientClass: string;
};

const primaryProduct: LiveProductCard = {
  name: "iBoard - iBroker",
  company: "SSI Securities",
  summary:
    "Two public-facing SSI products I worked on: iBoard for live market data and stock board monitoring, and iBroker for the trading access flow around the SSI investing experience.",
  highlights: [
    "iBoard is a data-dense product built for speed, scanability, and real-time market context.",
    "iBroker supports the trading entry experience with a cleaner, more focused interface around login and account access.",
    "Together they represent product work across both information-heavy fintech UI and a more streamlined user journey.",
  ],
  tags: ["Fintech", "Market Data", "Trading UI", "Real-Time Product", "Investor Experience"],
  links: [
    { label: "Visit iBoard", url: "http://iboard.ssi.com.vn/" },
    { label: "Visit iBroker", url: "https://ibroker.ssi.com.vn/" },
  ],
  images: [
    {
      src: "/img/products/iboard-home.png",
      alt: "iBoard screenshot",
      caption: "iBoard live market board",
    },
    {
      src: "/img/products/ibroker-home.png",
      alt: "iBroker screenshot",
      caption: "iBroker login experience",
    },
  ],
  badgeLabel: "Featured Product Group",
  badgeClass: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
  glowClass: "bg-emerald-300/20",
  gradientClass: "from-emerald-300/14 via-cyan-300/8 to-transparent",
};

const secondaryProducts: LiveProductCard[] = [
  {
    name: "Brighton College Vietnam",
    company: "Brighton College Vietnam",
    summary:
      "A public-facing school website presenting academic life, admissions content, campus story, and a polished brand experience for families and prospective pupils.",
    highlights: [
      "Content-rich website with multilingual navigation, school journey messaging, and brand storytelling.",
      "Built to balance information architecture, trust, and warmth for a premium education audience.",
      "Strong visual emphasis on campus atmosphere and the broader Brighton College identity.",
    ],
    tags: ["Education", "Brand Website", "Content Experience", "Admissions Journey"],
    links: [{ label: "Visit Brighton", url: "https://brightoncollege.edu.vn/" }],
    images: [
      {
        src: "/img/products/brighton-home.jpg",
        alt: "Brighton College Vietnam screenshot",
        caption: "Brighton College Vietnam homepage",
      },
    ],
    badgeLabel: "Live Site",
    badgeClass: "border-sky-300/30 bg-sky-300/10 text-sky-100",
    glowClass: "bg-sky-300/20",
    gradientClass: "from-sky-300/14 via-blue-300/8 to-transparent",
  },
  {
    name: "MSB Merchant Portal",
    company: "MSB",
    summary:
      "A merchant onboarding portal for partner registration and verification, centered on a clean activation flow for businesses joining the MSB merchant ecosystem.",
    highlights: [
      "Focused on onboarding clarity with a compact, form-led experience that reduces friction for new merchants.",
      "Uses a straightforward visual hierarchy to guide verification and registration steps.",
      "Represents product work around payments-adjacent business onboarding rather than public marketing content.",
    ],
    tags: ["Fintech", "Merchant Onboarding", "Portal UX", "Verification Flow"],
    links: [{ label: "Visit MSB Merchant Portal", url: "https://msbpay.msb.com.vn/onboarding" }],
    images: [
      {
        src: "/img/products/msb-merchant.jpg",
        alt: "MSB Merchant Portal screenshot",
        caption: "MSB Merchant onboarding portal",
      },
    ],
    badgeLabel: "Live Site",
    badgeClass: "border-rose-300/30 bg-rose-300/10 text-rose-100",
    glowClass: "bg-rose-300/20",
    gradientClass: "from-rose-300/14 via-orange-300/8 to-transparent",
  },
];

export default function FeaturedProducts() {
  return (
    <section
      id="ProductsSection"
      data-aos="fade-up"
      className="relative overflow-hidden bg-AAprimary px-4 py-28 sm:px-16 md:px-16 lg:px-24 2xl:px-72"
    >
      <div className="absolute inset-x-0 top-10 flex justify-center">
        <div className="h-56 w-56 rounded-full bg-AAsecondary/5 blur-3xl" />
      </div>
      <div className="absolute -left-20 top-36 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -right-16 bottom-16 h-60 w-60 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative">
        <div className="flex flex-row items-center">
          <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
          <div className="flex-none flex-row space-x-2 items-center pr-2">
            <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 03.</span>
            <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl opacity-85">Live Products</span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
        </div>

        <div className="mt-8 max-w-2xl space-y-4">
          <h3 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            Products people can open, explore, and use right now.
          </h3>
          <p className="text-sm leading-7 text-gray-400 sm:text-base">
            This section is for shipped products with a real public footprint. I&apos;ve highlighted the SSI work first
            because it represents a stronger mix of live fintech surfaces and user-facing product experience.
          </p>
        </div>

        <ProductHeroCard product={primaryProduct} className="mt-14" />

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {secondaryProducts.map(product => (
            <ProductStandardCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductHeroCard({ product, className }: { product: LiveProductCard; className?: string }) {
  return (
    <article
      className={`relative overflow-hidden rounded-[32px] border border-white/10 bg-AAtertiary/75 p-6 shadow-2xl shadow-black/20 sm:p-8 xl:p-10 ${
        className ?? ""
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradientClass}`} />
      <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl ${product.glowClass}`} />
      <div className="relative grid gap-10 xl:grid-cols-[1.15fr_0.95fr]">
        <div className="order-2 xl:order-1">
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-mono uppercase tracking-[0.22em] ${product.badgeClass}`}
          >
            {product.badgeLabel}
          </span>
          <h4 className="mt-5 text-3xl font-bold tracking-tight text-gray-100">{product.name}</h4>
          <p className="mt-2 text-sm font-mono text-AAsecondary">{product.company}</p>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">{product.summary}</p>

          <div className="mt-7 space-y-4">
            {product.highlights.map(highlight => (
              <div key={highlight} className="flex items-start space-x-3">
                <ArrowIcon className={"mt-1 h-4 w-4 flex-none text-AAsecondary"} />
                <span className="text-sm text-gray-300">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {product.tags.map(tag => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {product.links.map(link => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-AAsecondary/35 bg-AAprimary/80 px-5 py-3 text-sm font-mono text-AAsecondary transition duration-300 hover:-translate-y-1 hover:border-AAsecondary hover:bg-AAprimary hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 xl:order-2">
          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr] xl:grid-cols-1 xl:gap-5">
            {product.images.map((image, index) => (
              <figure
                key={image.src}
                className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-black/20 shadow-xl shadow-black/20 ${
                  index === 0 ? "sm:col-span-2 xl:col-span-1" : ""
                }`}
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#081220]/90 via-transparent to-transparent" />
                <Img
                  src={image.src}
                  alt={image.alt}
                  className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] ${
                    index === 0 ? "max-h-[320px]" : "max-h-[260px]"
                  }`}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between gap-4 px-5 py-4">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.24em] text-AAsecondary">
                      Feature View
                    </div>
                    <div className="mt-1 text-sm font-medium text-gray-100">{image.caption}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductStandardCard({ product }: { product: LiveProductCard }) {
  const preview = product.images[0];

  return (
    <article className="relative overflow-hidden rounded-[32px] border border-white/10 bg-AAtertiary/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradientClass}`} />
      <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl ${product.glowClass}`} />

      <div className="relative">
        <figure className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-black/20 shadow-xl shadow-black/20">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#081220]/90 via-transparent to-transparent" />
          <Img
            src={preview.src}
            alt={preview.alt}
            className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
          <figcaption className="absolute bottom-0 left-0 right-0 z-20 px-5 py-4">
            <div className="text-[11px] font-mono uppercase tracking-[0.24em] text-AAsecondary">Feature View</div>
            <div className="mt-1 text-sm font-medium text-gray-100">{preview.caption}</div>
          </figcaption>
        </figure>

        <div className="mt-7">
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-mono uppercase tracking-[0.22em] ${product.badgeClass}`}
          >
            {product.badgeLabel}
          </span>
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-gray-100">{product.name}</h4>
          <p className="mt-2 text-sm font-mono text-AAsecondary">{product.company}</p>
        </div>

        <p className="mt-6 text-sm leading-7 text-gray-300">{product.summary}</p>

        <div className="mt-7 space-y-4">
          {product.highlights.map(highlight => (
            <div key={highlight} className="flex items-start space-x-3">
              <ArrowIcon className={"mt-1 h-4 w-4 flex-none text-AAsecondary"} />
              <span className="text-sm text-gray-300">{highlight}</span>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {product.tags.map(tag => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {product.links.map(link => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-AAsecondary/35 bg-AAprimary/80 px-5 py-3 text-sm font-mono text-AAsecondary transition duration-300 hover:-translate-y-1 hover:border-AAsecondary hover:bg-AAprimary hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
