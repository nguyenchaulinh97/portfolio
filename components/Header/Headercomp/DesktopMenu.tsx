import React from "react";
import { motion } from "framer-motion";
import { Link as ReactScrollLink } from "react-scroll";

const navItems = [
  { id: "aboutSection", label: "About", number: "01", offset: -100 },
  { id: "WhereIhaveWorkedSection", label: "Experience", number: "02", offset: -260 },
  { id: "ProductsSection", label: "Products", number: "03", offset: -90 },
  { id: "ArcadeSection", label: "Arcade", number: "🕹️", offset: -90 },
  { id: "SomethingIveBuiltSection", label: "Case Studies", number: "04", offset: -90 },
  { id: "GetInTouchSection", label: "Contact", number: "05", offset: -90 },
];

export default function DesktopMenu() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] p-1">
        {navItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.4, delay: index * 0.05 }}
          >
            <ReactScrollLink
              to={item.id}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={220}
              className="group flex cursor-pointer items-center gap-2 rounded-full px-4 py-3 transition duration-300 hover:bg-white/[0.08]"
            >
              <span className="rounded-full border border-AAsecondary/[0.35] bg-AAsecondary/[0.12] px-2 py-1 font-Mono text-[10px] uppercase tracking-[0.2em] text-AAsecondary transition duration-300 group-hover:rotate-[-4deg]">
                {item.number}
              </span>
              <span className="font-Text2 text-sm font-bold text-[#f5f8ff] transition duration-300 group-hover:text-AAsecondary">
                {item.label}
              </span>
            </ReactScrollLink>
          </motion.div>
        ))}
      </div>

      <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
        <motion.button
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.4, delay: 0.24 }}
          className="resume-button-hover rounded-full border border-AAsecondary/60 bg-AAsecondary px-5 py-3 font-Header text-sm font-bold uppercase tracking-[0.14em] text-[#17223f] transition duration-300"
        >
          Resume
        </motion.button>
      </a>
    </div>
  );
}
