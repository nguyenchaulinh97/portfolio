import React from "react";
import { motion } from "framer-motion";
import { createFloatLoop, createSparkleLoop } from "./motionPresets";

type ScribbleDividerProps = {
  label?: string;
  className?: string;
};

export default function ScribbleDivider({ label, className }: ScribbleDividerProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <motion.span
        {...createSparkleLoop({ duration: 2.6 })}
        className="sparkle-twinkle h-3 w-3 rounded-full border border-[#24335b] bg-[#85e7dc]"
      />
      <div className="flex h-[8px] flex-1 items-center overflow-hidden rounded-full bg-white/[0.05] px-1">
        <div className="marching-gradient h-[2px] w-full rounded-full bg-[repeating-linear-gradient(90deg,#ffcf6e_0_22px,#ff8b92_22px_40px,#85e7dc_40px_62px,#9eb5ff_62px_80px)] opacity-85" />
      </div>
      {label ? (
        <motion.span
          {...createFloatLoop({ distance: 2, duration: 3.4, rotate: [-4, -2, -4] })}
          className="rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 font-Hand text-xl text-[#fff8e7]"
        >
          {label}
        </motion.span>
      ) : null}
    </div>
  );
}
