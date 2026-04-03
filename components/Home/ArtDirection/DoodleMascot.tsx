import React from "react";
import { motion } from "framer-motion";
import { createFloatLoop } from "./motionPresets";

type DoodleMascotProps = {
  speech?: string;
  label?: string;
  className?: string;
};

export default function DoodleMascot({
  speech = "ready to ship",
  label = "helper bot",
  className,
}: DoodleMascotProps) {
  return (
    <motion.div
      animate={{ y: [0, -7, 0], rotate: [-2, 1, -2] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className={`relative h-56 w-44 ${className ?? ""}`}
    >
      <motion.div
        {...createFloatLoop({ distance: 3, duration: 3.8, rotate: [5, 3, 5] })}
        className="absolute right-0 top-0 max-w-[160px] rounded-[22px] border-2 border-[#24335b]/10 bg-[#fff8ea] px-4 py-3 text-[#17223f] shadow-[10px_10px_0_rgba(23,34,63,0.12)]"
      >
        <div className="font-Hand text-xl leading-tight">{speech}</div>
        <div className="absolute -bottom-2 left-6 h-4 w-4 rotate-45 border-b-2 border-r-2 border-[#24335b]/10 bg-[#fff8ea]" />
      </motion.div>

      <div className="absolute bottom-[18px] left-4 h-[118px] w-[118px] rounded-[34px] border-2 border-[#24335b] bg-[#fff6df] shadow-[12px_12px_0_rgba(23,34,63,0.16)]" />
      <div className="absolute bottom-[128px] left-[64px] h-8 w-[3px] rounded-full bg-[#24335b]" />
      <div className="absolute bottom-[148px] left-[56px] h-7 w-7 rounded-full border-2 border-[#24335b] bg-[#85e7dc]" />
      <div className="absolute bottom-[110px] left-0 h-10 w-10 rounded-full border-2 border-[#24335b] bg-[#ffcf6e]" />
      <div className="absolute bottom-[110px] left-[106px] h-10 w-10 rounded-full border-2 border-[#24335b] bg-[#ff8b92]" />

      <div className="absolute bottom-[38px] left-[30px] flex h-[74px] w-[74px] items-center justify-center rounded-[24px] border-2 border-[#24335b] bg-[#213259]">
        <motion.div
          animate={{ scaleY: [1, 1, 0.25, 1, 1] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.44, 0.48, 0.52, 1] }}
          style={{ transformOrigin: "center" }}
          className="absolute left-4 top-[24px] h-3 w-3 rounded-full bg-[#fff8e7]"
        />
        <motion.div
          animate={{ scaleY: [1, 1, 0.25, 1, 1] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.44, 0.48, 0.52, 1] }}
          style={{ transformOrigin: "center" }}
          className="absolute right-4 top-[24px] h-3 w-3 rounded-full bg-[#fff8e7]"
        />
        <motion.div
          animate={{ scaleX: [1, 1.12, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[18px] h-[10px] w-10 rounded-b-full border-b-[3px] border-[#85e7dc]"
        />
      </div>

      <div className="absolute bottom-0 left-7 rotate-[-6deg] rounded-full border border-white/[0.12] bg-[#24335b] px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.18em] text-[#ffe3a8]">
        {label}
      </div>
    </motion.div>
  );
}
