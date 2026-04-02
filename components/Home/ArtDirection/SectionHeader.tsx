import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

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
          <ArrowIcon className={"h-5 w-5 flex-none translate-y-[2px] text-AAsecondary md:h-6 md:w-5"} />
          <span className="font-Mono text-sm text-AAsecondary sm:text-xl">{number}.</span>
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-4">
          <span className="section-doodle whitespace-nowrap font-Header text-2xl font-bold text-[#fff8e7] sm:text-3xl">
            {title}
          </span>
          <div className={`hidden h-[1px] flex-1 rounded-full bg-[#dbe3ff]/20 sm:block ${lineClassName ?? ""}`} />
        </div>
      </div>

      {sticker || note ? (
        <div className="ml-10 mt-5 space-y-3 sm:ml-12">
          {sticker ? (
            <div className="inline-flex rotate-[-2deg] rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 font-Hand text-xl text-[#fff8e7]">
              {sticker}
            </div>
          ) : null}

          {note ? <p className="max-w-2xl text-base leading-8 text-[#d0d8ee] sm:text-lg">{note}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
