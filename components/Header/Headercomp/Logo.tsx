import React from "react";
import { motion } from "framer-motion";

export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <motion.div
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        y: { delay: props.finishedLoading ? 0 : 8, duration: props.finishedLoading ? 0 : 0.2 },
        opacity: { delay: props.finishedLoading ? 0 : 8, duration: props.finishedLoading ? 0 : 0.2 },
      }}
      className="relative h-14 w-14 flex-none"
    >
      <div className="absolute inset-0 rotate-[-10deg] rounded-[20px] bg-[#ff8b92] opacity-80 blur-[1px]" />
      <div className="absolute inset-1 rotate-[8deg] rounded-[18px] bg-[#85e7dc] opacity-[0.85]" />
      <div className="absolute inset-[6px] rounded-[18px] border-2 border-[#17223f] bg-[#fff6df] shadow-[6px_6px_0_rgba(23,34,63,0.22)]" />

      <div className="absolute inset-[6px] flex items-center justify-center rounded-[18px]">
        <span className="font-Header text-lg font-extrabold tracking-[0.08em] text-[#17223f]">CL</span>
      </div>

      <div className="absolute -right-1 top-1 h-3 w-3 rounded-full border border-[#17223f] bg-[#ffcf6e]" />
      <div className="absolute -left-1 bottom-2 h-2.5 w-2.5 rounded-full border border-[#17223f] bg-[#fff8e7]" />
    </motion.div>
  );
}
