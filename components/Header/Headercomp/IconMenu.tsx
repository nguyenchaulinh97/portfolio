import React from "react";
import { motion } from "framer-motion";

const IconMenu = (props: { rotate; setRotate; setShowElement; ShowElement; finishedLoading }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        opacity: { delay: props.finishedLoading ? 0 : 9.5, duration: props.finishedLoading ? 0 : 0.2 },
        scale: { delay: props.finishedLoading ? 0 : 9.5, duration: props.finishedLoading ? 0 : 0.2 },
      }}
      type="button"
      className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-white/[0.12] bg-white/[0.08] text-white shadow-[0_12px_24px_rgba(11,18,40,0.18)] lg:hidden"
      onClick={() => {
        props.setRotate(!props.rotate);
        props.setShowElement(!props.ShowElement);
      }}
    >
      <div className="relative flex h-5 w-6 flex-col items-end justify-between">
        <motion.span
          animate={props.rotate ? { y: 8, rotate: 45, width: "100%" } : { y: 0, rotate: 0, width: "100%" }}
          transition={props.rotate ? { duration: 0.2 } : { duration: 0.2 }}
          className="block h-[3px] rounded-full bg-AAsecondary"
        />
        <motion.span
          animate={props.rotate ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="block h-[3px] w-4 rounded-full bg-[#fff8e7]"
        />
        <motion.span
          animate={props.rotate ? { y: -8, rotate: -45, width: "100%" } : { y: 0, rotate: 0, width: "75%" }}
          transition={props.rotate ? { duration: 0.2 } : { duration: 0.2 }}
          className="block h-[3px] rounded-full bg-[#85e7dc]"
        />
      </div>
    </motion.button>
  );
};

export default IconMenu;
