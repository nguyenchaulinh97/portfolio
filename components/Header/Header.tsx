import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Headercomp/Logo";
import DesktopMenu from "./Headercomp/DesktopMenu";
import IconMenu from "./Headercomp/IconMenu";
import MobileMenu from "./Headercomp/MobileMenu";

export default function Header() {
  const navBarRef = useRef<HTMLDivElement>(null);
  const previousScrollY = useRef(0);
  const [showElement, setShowElement] = useState(true);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleScroll = () => {
      if (previousScrollY.current === 0) {
        previousScrollY.current = window.scrollY;
        return;
      }

      if (window.scrollY <= 50) {
        navBarRef.current?.classList.add("translate-y-0");
        navBarRef.current?.classList.remove("-translate-y-full");
        previousScrollY.current = window.scrollY;
        return;
      }

      if (window.scrollY > previousScrollY.current) {
        navBarRef.current?.classList.remove("translate-y-0");
        navBarRef.current?.classList.add("-translate-y-full");
      } else {
        navBarRef.current?.classList.add("translate-y-0");
        navBarRef.current?.classList.remove("-translate-y-full");
      }

      previousScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = rotate ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [rotate]);

  return (
    <>
      <MobileMenu
        rotate={rotate}
        setRotate={setRotate}
        setShowElement={setShowElement}
        showElement={showElement}
      />

      <motion.div
        ref={navBarRef}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="fixed inset-x-0 top-0 z-30 px-4 pt-4 transition duration-500 sm:px-6 lg:px-8"
      >
        <div
          className={`mx-auto flex max-w-[1280px] items-center justify-between rounded-[28px] border border-white/[0.12] px-4 py-3 sm:px-6 ${
            showElement ? "comic-panel" : "border-white/0 bg-transparent shadow-none"
          }`}
        >
          <div className="flex items-center gap-4">
            <Logo />
            <div className="hidden xl:block">
              <div className="font-Hand text-2xl leading-none text-[#fff8e7]">Nguyen Chau Linh</div>
              <div className="font-Mono text-[11px] uppercase tracking-[0.22em] text-[#ffe3a8]">
                frontend engineer
              </div>
            </div>
          </div>

          <IconMenu rotate={rotate} setRotate={setRotate} setShowElement={setShowElement} showElement={showElement} />

          <DesktopMenu />
        </div>
      </motion.div>
    </>
  );
}
