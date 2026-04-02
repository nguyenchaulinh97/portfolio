import React from "react";

type ScribbleDividerProps = {
  label?: string;
  className?: string;
};

export default function ScribbleDivider({ label, className }: ScribbleDividerProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <span className="h-3 w-3 rounded-full border border-[#24335b] bg-[#85e7dc]" />
      <div className="flex h-[8px] flex-1 items-center overflow-hidden rounded-full bg-white/[0.05] px-1">
        <div className="h-[2px] w-full rounded-full bg-[repeating-linear-gradient(90deg,#ffcf6e_0_22px,#ff8b92_22px_40px,#85e7dc_40px_62px,#9eb5ff_62px_80px)] opacity-85" />
      </div>
      {label ? (
        <span className="rotate-[-4deg] rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 font-Hand text-xl text-[#fff8e7]">
          {label}
        </span>
      ) : null}
    </div>
  );
}
