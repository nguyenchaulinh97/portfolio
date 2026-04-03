import React, { useEffect, useState } from "react";
import DoodleMascot from "../ArtDirection/DoodleMascot";
import ScribbleDivider from "../ArtDirection/ScribbleDivider";
import SectionHeader from "../ArtDirection/SectionHeader";

export default function GetInTouch() {
  const [isAndroidWebView, setIsAndroidWebView] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent) && /wv/.test(userAgent)) {
      setIsAndroidWebView(true);
    }
  }, []);

  return (
    <section
      id="GetInTouchSection"
      data-aos="fade-up"
      className="relative overflow-hidden bg-AAprimary px-4 py-16 sm:px-16 sm:py-20 md:px-16 lg:px-24 2xl:px-72"
    >
      <div className="absolute left-0 top-16 h-48 w-48 rounded-full bg-[#85e7dc]/[0.08] blur-3xl" />
      <div className="absolute right-0 bottom-10 h-56 w-56 rounded-full bg-[#ffcf6e]/[0.08] blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeader
          number="05"
          title="Get In Touch"
          sticker="open inbox"
          note="I am always happy to talk about frontend roles, product teams, and thoughtful digital experiences."
          lineClassName="max-w-[220px]"
        />

        <ScribbleDivider label="let's talk" className="mt-8 max-w-3xl" />

        <div className="comic-panel relative mt-10 overflow-hidden rounded-[20px] p-3 sm:rounded-[34px] sm:p-6 xl:p-10">
          <div className="absolute left-12 top-0 h-7 w-24 -translate-y-1/2 rotate-[-5deg] rounded-[10px] bg-[#ffd58f]" />

          <div className="relative grid gap-8 xl:grid-cols-[1.04fr_0.96fr]">
            <div className="space-y-6">
              <div className="paper-grid rounded-[18px] border-2 border-[#24335b]/10 bg-[#fff6df] p-4 text-[#17223f] shadow-[10px_10px_0_rgba(23,34,63,0.12)] sm:rounded-[30px] sm:p-8 sm:shadow-[14px_14px_0_rgba(23,34,63,0.14)]">
                <div className="inline-flex rotate-[-4deg] rounded-full border border-[#24335b]/10 bg-[#fff8ea] px-4 py-2 font-Hand text-xl shadow-[8px_8px_0_rgba(23,34,63,0.08)]">
                  collaboration welcome
                </div>

                <h3 className="mt-4 font-Header text-2xl leading-tight sm:mt-6 sm:text-3xl lg:text-4xl">
                  If you think we should build something together, my inbox is open.
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-[#31446f]">
                  I am especially interested in product-facing frontend work, fintech systems, and teams that care
                  about thoughtful engineering as much as user clarity.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="rounded-full border border-[#24335b]/10 bg-white/60 px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.14em] text-[#31446f]">
                    Hanoi
                  </span>
                  <span className="rounded-full border border-[#24335b]/10 bg-white/60 px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.14em] text-[#31446f]">
                    Frontend Engineering
                  </span>
                  <span className="rounded-full border border-[#24335b]/10 bg-white/60 px-4 py-2 font-Mono text-[11px] uppercase tracking-[0.14em] text-[#31446f]">
                    Product Systems
                  </span>
                </div>
              </div>

              <div className="rounded-[20px] border border-white/[0.12] bg-white/[0.06] px-4 py-4 text-sm leading-7 text-[#d5ddf2] sm:rounded-[28px] sm:px-5 sm:py-5">
                Recruiters, product teams, and collaborators are all welcome. If the work involves clear interfaces,
                complex systems, or meaningful product delivery, I am interested.
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-[18px] border-2 border-[#24335b]/10 bg-[#fff6df] p-4 text-[#17223f] shadow-[10px_10px_0_rgba(23,34,63,0.12)] sm:rounded-[32px] sm:p-8 sm:shadow-[14px_14px_0_rgba(23,34,63,0.14)]">
                <div className="font-Mono text-[10px] uppercase tracking-[0.22em] text-[#5a6f99] sm:text-[11px]">Best way to reach me</div>

                <div className="mt-4 break-all font-Header text-2xl leading-tight sm:break-normal sm:text-3xl">nguyenchaulinh97@gmail.com</div>

                <p className="mt-4 text-base leading-8 text-[#31446f]">
                  I usually reply for product conversations, role discussions, and opportunities that fit frontend
                  engineering with real business context.
                </p>

                <div className="mt-7">
                  {isAndroidWebView ? (
                    <button className="rounded-full border border-[#24335b]/10 bg-[#24335b] px-6 py-4 font-Header text-xs font-bold uppercase tracking-[0.16em] text-[#ffe3a8] shadow-[0_12px_24px_rgba(23,34,63,0.14)] sm:px-8 sm:text-sm">
                      nguyenchaulinh97@gmail.com
                    </button>
                  ) : (
                    <a href="mailto:nguyenchaulinh97@gmail.com" target={"_blank"} rel="noreferrer">
                      <button className="resume-button-hover rounded-full border border-AAsecondary/60 bg-AAsecondary px-6 py-4 font-Header text-sm font-bold uppercase tracking-[0.16em] text-[#17223f] transition duration-300 sm:px-8">
                        Email Me
                      </button>
                    </a>
                  )}
                </div>
              </div>

              <div className="hidden justify-end sm:flex">
                <DoodleMascot speech="inbox = open" label="mail buddy" className="scale-[0.92]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
