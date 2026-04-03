import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

type IconMenuProps = {
  rotate: boolean;
  setRotate: Dispatch<SetStateAction<boolean>>;
  setShowElement: Dispatch<SetStateAction<boolean>>;
  showElement: boolean;
};

export default function IconMenu({ rotate, setRotate, setShowElement, showElement }: IconMenuProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      type="button"
      className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-white/[0.12] bg-white/[0.08] text-white shadow-[0_12px_24px_rgba(11,18,40,0.18)] lg:hidden"
      onClick={() => {
        setRotate(!rotate);
        setShowElement(!showElement);
      }}
    >
      <div className="relative flex h-5 w-6 flex-col items-end justify-between">
        <motion.span
          animate={rotate ? { y: 8, rotate: 45, width: "100%" } : { y: 0, rotate: 0, width: "100%" }}
          transition={{ duration: 0.2 }}
          className="block h-[3px] rounded-full bg-AAsecondary"
        />
        <motion.span
          animate={rotate ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="block h-[3px] w-4 rounded-full bg-[#fff8e7]"
        />
        <motion.span
          animate={rotate ? { y: -8, rotate: -45, width: "100%" } : { y: 0, rotate: 0, width: "75%" }}
          transition={{ duration: 0.2 }}
          className="block h-[3px] rounded-full bg-[#85e7dc]"
        />
      </div>
    </motion.button>
  );
}
