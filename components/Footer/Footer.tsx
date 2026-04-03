import React from "react";
import { motion } from "framer-motion";
import FacebookIcon from "../Icons/FacebookIcon";
import GithubIcon from "../Icons/GithubIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import ScribbleDivider from "../Home/ArtDirection/ScribbleDivider";
import { createFloatLoop } from "../Home/ArtDirection/motionPresets";

const iconsData = [
  { href: "https://github.com/nguyenchaulinh97", Icon: GithubIcon, label: "GitHub" },
  { href: "https://www.linkedin.com/in/nguyenchaulinh/", Icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://www.instagram.com/smthabtcl/", Icon: InstagramIcon, label: "Instagram" },
  { href: "https://fb.com/smthabtcl", Icon: FacebookIcon, label: "Facebook" },
];

export default function Footer(props: { githubUrl: string; hideSocialsInDesktop: boolean; onOpenStickerHunt?: () => void }) {
  return (
    <footer className="bg-AAprimary px-4 pb-10 pt-2 sm:px-16 lg:px-24 2xl:px-72">
      <div className="mx-auto max-w-[1200px]">
        <ScribbleDivider label="end credits" className="mx-auto max-w-4xl" />

        <div className="comic-panel mt-6 overflow-hidden rounded-[32px] p-6 sm:p-8">
          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <div>
              <motion.div {...createFloatLoop({ distance: 3, duration: 3.6, rotate: [-3, -1, -3] })} className="inline-flex rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 font-Hand text-xl text-[#fff8e7]">
                thanks for visiting
              </motion.div>

              <h3 className="mt-5 max-w-xl font-Header text-3xl leading-tight text-[#fff8e7] sm:text-4xl">
                Designed as a living portfolio, not a frozen template.
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-8 text-[#d5ddf2]">
                This site keeps evolving with my work, products, and visual direction. The current version leans into
                a more illustrated, sticker-board style while staying useful for recruiters and collaborators.
              </p>

              {props.onOpenStickerHunt ? (
                <motion.button
                  type="button"
                  onClick={props.onOpenStickerHunt}
                  {...createFloatLoop({ distance: 3, duration: 3.4 })}
                  whileHover={{ y: -4, rotate: 0 }}
                  className="mt-6 inline-flex rounded-full border border-white/[0.12] bg-white/[0.08] px-5 py-3 font-Hand text-xl text-[#fff8e7]"
                >
                  play sticker hunt
                </motion.button>
              ) : null}
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22 }}
              className="rounded-[28px] border-2 border-[#24335b]/10 bg-[#fff6df] p-6 text-[#17223f] shadow-[12px_12px_0_rgba(23,34,63,0.14)]"
            >
              <div className="font-Mono text-[11px] uppercase tracking-[0.22em] text-[#5a6f99]">Built by Nguyen Chau Linh</div>
              <p className="mt-4 text-base leading-8 text-[#31446f]">
                Curious about how this portfolio is put together? The source is public and updated alongside the site.
              </p>

              <a href={props.githubUrl} target={"_blank"} rel="noreferrer" className="mt-6 inline-flex">
                <span className="resume-button-hover rounded-full border border-AAsecondary/60 bg-AAsecondary px-6 py-3 font-Header text-sm font-bold uppercase tracking-[0.14em] text-[#17223f] transition duration-300">
                  View Source
                </span>
              </a>

              <div className={`mt-6 flex gap-3 ${props.hideSocialsInDesktop ? "lg:hidden" : ""}`}>
                {iconsData.map((iconData, index) => (
                  <motion.div
                    key={iconData.href}
                    animate={{ y: [0, index % 2 === 0 ? -3 : -5, 0] }}
                    transition={{ duration: 3.2 + index * 0.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
                  >
                    <a
                      href={iconData.href}
                      target={"_blank"}
                      rel="noreferrer"
                      aria-label={iconData.label}
                      className="group flex h-12 w-12 items-center justify-center rounded-[16px] border border-[#24335b]/10 bg-white/70 text-[#17223f] shadow-[6px_6px_0_rgba(23,34,63,0.08)] transition duration-300 hover:-translate-y-1"
                    >
                      <iconData.Icon className="h-5 w-5 fill-current text-[#17223f] transition duration-300 group-hover:text-[#31446f]" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
