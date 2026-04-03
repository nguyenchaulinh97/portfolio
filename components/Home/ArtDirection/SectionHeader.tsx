import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import { createFloatLoop } from "./motionPresets";

type SectionHeaderProps = {
  number: string;
  title: string;
  sticker?: string;
  note?: string;
  className?: string;
  lineClassName?: string;
};

export default function SectionHeader({
  number,
  title,
  sticker,
  note,
  className,
  lineClassName,
}: SectionHeaderProps) {
  return (
    <div className={className ?? ""}>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ x: [0, 4, 0], y: [0, -1, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowIcon className={"h-5 w-5 flex-none translate-y-[2px] text-AAsecondary md:h-6 md:w-5"} />
          </motion.div>
          <span className="font-Mono text-sm text-AAsecondary sm:text-xl">{number}.</span>
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-4">
          <span className="section-doodle whitespace-nowrap font-Header text-xl font-bold text-[#fff8e7] sm:text-2xl lg:text-3xl">
            {title}
          </span>
          <div
            className={`marching-gradient hidden h-[2px] flex-1 rounded-full bg-[repeating-linear-gradient(90deg,rgba(255,207,110,0.55)_0_26px,rgba(255,139,146,0.5)_26px_44px,rgba(133,231,220,0.45)_44px_72px)] sm:block ${
              lineClassName ?? ""
            }`}
          />
        </div>
      </div>

      {sticker || note ? (
        <div className="ml-10 mt-5 space-y-3 sm:ml-12">
          {sticker ? (
            <motion.div
              {...createFloatLoop({ distance: 3, duration: 3.8, rotate: [-2, 0, -2] })}
              className="inline-flex rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 font-Hand text-xl text-[#fff8e7]"
            >
              {sticker}
            </motion.div>
          ) : null}

          {note ? <p className="max-w-2xl text-base leading-8 text-[#d0d8ee] sm:text-lg">{note}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
