import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import { createFloatLoop, stickerHover } from "../ArtDirection/motionPresets";
import { featuredProductGroup, liveProducts, LiveProductCard } from "../portfolioContent";

export default function FeaturedProducts() {
  return (
    <section
      id="ProductsSection"
      data-aos="fade-up"
      className="relative overflow-hidden bg-AAprimary px-4 py-28 sm:px-16 md:px-16 lg:px-24 2xl:px-72"
    >
      <div className="hero-grid absolute inset-0 opacity-10" />
      <div className="absolute -left-16 top-28 h-52 w-52 rounded-full bg-[#ffcf6e]/[0.14] blur-3xl" />
      <div className="absolute right-0 top-16 h-64 w-64 rounded-full bg-[#85e7dc]/10 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-[#ff8b92]/10 blur-3xl" />

      <div className="relative">
        <div className="flex flex-row items-center">
          <ArrowIcon className={"flex-none h-5 w-5 translate-y-[2px] text-AAsecondary md:h-6 md:w-5"} />
          <div className="flex-none items-center pr-2">
            <span className="font-Mono text-sm text-AAsecondary sm:text-xl"> 03.</span>
            <span className="section-doodle pl-3 font-Header text-lg font-bold tracking-wide text-[#fff8e7] md:text-2xl">
              Live Products
            </span>
          </div>
          <div className="h-[0.2px] w-full bg-[#cfd6e9]/30 xl:w-1/3 md:w-1/2" />
        </div>

        <div className="mt-10 max-w-3xl">
          <motion.div
            animate={{ y: [0, -3, 0], rotate: [-2, 0, -2] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 font-Hand text-xl text-[#fff8e7]"
          >
            sticker board
          </motion.div>
          <h3 className="mt-6 max-w-2xl font-Header text-4xl leading-tight text-[#fff8e7] sm:text-5xl">
            Real products on the internet, presented like a product scrapbook.
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#d0d8ee] sm:text-lg">
            This section highlights shipped work with a real public footprint. Instead of plain cards, each product is
            framed like a sticker or scrapbook note so the section feels more alive while still staying recruiter
            friendly.
          </p>
        </div>

        <FeaturedBoard product={featuredProductGroup} />

        <div className="mt-10 grid gap-8 xl:grid-cols-2">
          {liveProducts.map(product => (
            <StickerCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedBoard({ product }: { product: LiveProductCard }) {
  return (
    <motion.article {...stickerHover} className="comic-panel relative mt-14 overflow-hidden rounded-[36px] p-6 sm:p-8 xl:p-10">
      <div
        className={`absolute left-10 top-0 h-7 w-24 -translate-y-1/2 rotate-[-3deg] rounded-[10px] opacity-[0.85] ${product.tapeClass}`}
      />
      <div className={`absolute right-8 top-6 h-36 w-36 rounded-full blur-3xl ${product.auraClass}`} />
      <div className="absolute left-8 bottom-6 h-24 w-24 rounded-full bg-white/[0.06] blur-2xl" />

      <div className="relative grid gap-10 xl:grid-cols-[1.03fr_0.97fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-AAsecondary/30 bg-AAsecondary/[0.12] px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.22em] text-AAsecondary">
              {product.badgeLabel}
            </span>
            <motion.span {...createFloatLoop({ distance: 3, duration: 3.8, rotate: [-4, -2, -4] })} className="rounded-full border border-white/[0.12] bg-white/10 px-4 py-2 font-Hand text-xl text-[#fff8e7]">
              {product.noteLabel}
            </motion.span>
          </div>

          <h4 className="mt-6 font-Header text-4xl leading-tight text-[#fff8e7] sm:text-[2.8rem]">{product.name}</h4>
          <p className={`mt-3 font-Mono text-[12px] uppercase tracking-[0.24em] ${product.accentClass}`}>
            {product.company}
          </p>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#d0d8ee]">{product.summary}</p>

          <div className="mt-8 space-y-4">
            {product.highlights.map(highlight => (
              <div key={highlight} className="flex items-start gap-3">
                <ArrowIcon className={"mt-1 h-4 w-4 flex-none text-AAsecondary"} />
                <span className="text-sm leading-7 text-[#e6ebf8] sm:text-base">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {product.tags.map(tag => (
              <span
                key={tag}
                className="sticker-chip inline-flex rotate-[-1deg] rounded-full px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.15em] text-[#eef3ff]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {product.links.map(link => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="resume-button-hover rounded-full border border-AAsecondary/60 bg-AAsecondary px-5 py-3 font-Header text-sm font-bold uppercase tracking-[0.14em] text-[#17223f] transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
            {product.images.map((image, index) => (
              <figure
                key={image.src}
                className={`relative rounded-[30px] border-2 border-[#24335b]/[0.12] ${product.paperClass} p-3 shadow-[12px_12px_0_rgba(16,25,47,0.16)] ${
                  index === 0 ? "rotate-[-2deg]" : "sm:translate-x-8 sm:rotate-[2deg] xl:translate-x-10"
                }`}
              >
                <div className={`absolute left-6 top-0 h-7 w-20 -translate-y-1/2 rotate-[-4deg] rounded-[10px] ${product.tapeClass}`} />
                <span className="sparkle-twinkle absolute right-5 top-5 h-3 w-3 rounded-full border border-[#24335b]/20 bg-white/70" />
                <motion.div
                  animate={{ y: [0, index === 0 ? -5 : -4, 0] }}
                  transition={{ duration: 3.8 + index * 0.35, repeat: Infinity, ease: "easeInOut", delay: index * 0.16 }}
                >
                  <div className="overflow-hidden rounded-[22px] border border-[#24335b]/[0.12]">
                    <Img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full object-cover object-top ${index === 0 ? "h-[290px]" : "h-[220px] sm:h-[200px] xl:h-[220px]"}`}
                    />
                  </div>

                  <figcaption className="px-2 pb-1 pt-4 text-[#17223f]">
                    <div className="font-Mono text-[10px] uppercase tracking-[0.22em] text-[#5a6f99]">Feature View</div>
                    <div className="mt-2 font-Header text-lg leading-snug">{image.caption}</div>
                  </figcaption>
                </motion.div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function StickerCard({ product }: { product: LiveProductCard }) {
  const preview = product.images[0];

  return (
    <article className={`comic-panel relative overflow-hidden rounded-[34px] p-6 sm:p-7 ${product.rotationClass ?? ""}`}>
      <div className={`absolute right-6 top-6 h-32 w-32 rounded-full blur-3xl ${product.auraClass}`} />
      <div className={`absolute left-10 top-0 h-7 w-20 -translate-y-1/2 rotate-[4deg] rounded-[10px] ${product.tapeClass}`} />

      <motion.div {...createFloatLoop({ distance: 4, duration: 4.1 })} className="relative">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.22em] text-[#eef3ff]">
            {product.badgeLabel}
          </span>
          <motion.span {...createFloatLoop({ distance: 2, duration: 3.6, rotate: [4, 2, 4] })} className="rounded-full border border-white/[0.12] bg-white/10 px-4 py-2 font-Hand text-xl text-[#fff8e7]">
            {product.noteLabel}
          </motion.span>
        </div>

        <div className={`mt-6 rounded-[28px] border-2 border-[#24335b]/[0.12] p-3 shadow-[10px_10px_0_rgba(16,25,47,0.14)] ${product.paperClass}`}>
          <span className="sparkle-twinkle-delayed absolute right-5 top-[88px] h-3 w-3 rounded-full border border-[#24335b]/20 bg-white/70" />
          <div className="overflow-hidden rounded-[22px] border border-[#24335b]/[0.12]">
            <Img src={preview.src} alt={preview.alt} className="h-64 w-full object-cover object-top" />
          </div>
          <div className="px-2 pb-1 pt-4 text-[#17223f]">
            <div className="font-Mono text-[10px] uppercase tracking-[0.22em] text-[#5a6f99]">Feature View</div>
            <div className="mt-2 font-Header text-lg leading-snug">{preview.caption}</div>
          </div>
        </div>

        <div className="mt-7">
          <p className={`font-Mono text-[12px] uppercase tracking-[0.24em] ${product.accentClass}`}>{product.company}</p>
          <h4 className="mt-3 font-Header text-3xl leading-tight text-[#fff8e7]">{product.name}</h4>
          <p className="mt-5 text-base leading-8 text-[#d0d8ee]">{product.summary}</p>
        </div>

        <div className="mt-7 space-y-4">
          {product.highlights.map(highlight => (
            <div key={highlight} className="flex items-start gap-3">
              <ArrowIcon className={"mt-1 h-4 w-4 flex-none text-AAsecondary"} />
              <span className="text-sm leading-7 text-[#e6ebf8]">{highlight}</span>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {product.tags.map(tag => (
            <span
              key={tag}
              className="sticker-chip inline-flex rotate-[-1deg] rounded-full px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.15em] text-[#eef3ff]"
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
              className="resume-button-hover rounded-full border border-AAsecondary/60 bg-AAsecondary px-5 py-3 font-Header text-sm font-bold uppercase tracking-[0.14em] text-[#17223f] transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </article>
  );
}
