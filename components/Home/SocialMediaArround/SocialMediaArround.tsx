import React from "react";
import { motion } from "framer-motion";
import FacebookIcon from "../../Icons/FacebookIcon";
import GithubIcon from "../../Icons/GithubIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";

const socialLinks = [
  { href: "https://github.com/nguyenchaulinh97", Icon: GithubIcon, label: "GitHub", rotate: "rotate-[-4deg]" },
  {
    href: "https://www.linkedin.com/in/nguyenchaulinh/",
    Icon: LinkedinIcon,
    label: "LinkedIn",
    rotate: "rotate-[3deg]",
  },
  {
    href: "https://www.instagram.com/smthabtcl/",
    Icon: InstagramIcon,
    label: "Instagram",
    rotate: "rotate-[-2deg]",
  },
  {
    href: "https://fb.com/smthabtcl",
    Icon: FacebookIcon,
    label: "Facebook",
    rotate: "rotate-[2deg]",
  },
];

export default function SocialMediaEmail(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: {
            delay: props.finishedLoading ? 0 : 11,
            duration: props.finishedLoading ? 0 : 0.4,
          },
          opacity: {
            delay: props.finishedLoading ? 0 : 11,
            duration: props.finishedLoading ? 0 : 0.3,
          },
        }}
        className="fixed bottom-8 left-5 z-20 hidden lg:flex xl:left-8"
      >
        <div className="flex flex-col items-center gap-4">
          <motion.div
            animate={{ y: [0, -3, 0], rotate: [-6, -4, -6] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 font-Hand text-xl text-[#fff8e7]"
          >
            find me
          </motion.div>

          <div className="relative flex flex-col items-center gap-3 rounded-[28px] border border-white/[0.12] bg-white/[0.06] px-3 py-4 shadow-[0_12px_24px_rgba(11,18,40,0.18)]">
            <span className="sparkle-twinkle absolute -right-2 top-5 h-3 w-3 rounded-full border border-white/30 bg-[#ffcf6e]" />
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.href}
                animate={{ y: [0, index % 2 === 0 ? -4 : -6, 0] }}
                transition={{ duration: 3.1 + index * 0.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.14 }}
              >
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4, rotate: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`group flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/[0.12] bg-[#fff8ea] text-[#17223f] shadow-[8px_8px_0_rgba(23,34,63,0.12)] ${link.rotate}`}
                  aria-label={link.label}
                >
                  <link.Icon className="h-6 w-6 fill-current text-[#17223f] transition duration-300 group-hover:text-[#31446f]" />
                </motion.a>
              </motion.div>
            ))}
          </div>

          <div className="dotted-connector h-24 w-[4px]" />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: {
            delay: props.finishedLoading ? 0 : 11,
            duration: props.finishedLoading ? 0 : 0.4,
          },
          opacity: {
            delay: props.finishedLoading ? 0 : 11,
            duration: props.finishedLoading ? 0 : 0.3,
          },
        }}
        className="fixed bottom-24 right-[-30px] z-20 hidden lg:flex xl:right-[-18px]"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="dotted-connector h-20 w-[4px]" />

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.a
              href="mailto:nguyenchaulinh97@gmail.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, rotate: 88 }}
              transition={{ duration: 0.15 }}
              className="origin-bottom-right rotate-90 rounded-[20px] border-2 border-[#24335b]/10 bg-[#fff8ea] px-5 py-4 text-[#17223f] shadow-[10px_10px_0_rgba(23,34,63,0.12)]"
            >
              <div className="font-Hand text-xl leading-none">say hi</div>
              <div className="mt-2 font-Mono text-[10px] uppercase tracking-[0.22em] text-[#5a6f99]">
                nguyenchaulinh97@gmail.com
              </div>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
