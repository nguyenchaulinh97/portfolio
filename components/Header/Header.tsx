import React, { useRef, useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import AppContext from "../AppContextFolder/AppContext";
import Logo from "./Headercomp/Logo";
import DesktopMenu from "./Headercomp/DesktopMenu";
import IconMenu from "./Headercomp/IconMenu";
import MobileMenu from "./Headercomp/MobileMenu";

const Header = (props: { finishedLoading: boolean; sectionsRef }) => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  const [ShowElement, setShowElement] = useState(true);
  const [rotate, setRotate] = useState<boolean>(false);
  const context = useContext(AppContext);
  const scrollSizeY = useRef<number>(0);

  useEffect(() => {
    if (context.sharedState.portfolio.NavBar.IntervalEvent == null) {
      context.sharedState.portfolio.NavBar.IntervalEvent = () => {
        if (scrollSizeY.current === 0) {
          scrollSizeY.current = window.scrollY;
        } else if (window.scrollY > 50) {
          if (window.scrollY > scrollSizeY.current) {
            RefNavBar.current?.classList.remove("translate-y-0");
            RefNavBar.current?.classList.add("-translate-y-full");
          } else {
            RefNavBar.current?.classList.add("translate-y-0");
            RefNavBar.current?.classList.remove("-translate-y-full");
          }

          scrollSizeY.current = window.scrollY;
        }
      };
    }
  }, [context.sharedState.portfolio.NavBar, context.sharedState.portfolio.NavBar.IntervalEvent]);

  useEffect(() => {
    if (context.sharedState.portfolio.NavBar.scrolling == null) {
      context.sharedState.portfolio.NavBar.scrolling = true;
      scrollSizeY.current = 0;

      if (typeof window !== "undefined") {
        window.addEventListener("scroll", context.sharedState.portfolio.NavBar.IntervalEvent);
      }
    }
  }, [context.sharedState.portfolio.NavBar, context.sharedState.portfolio.NavBar.scrolling]);

  if (typeof document !== "undefined") {
    document.body.style.overflow = rotate ? "hidden" : "auto";
  }

  return (
    <>
      <MobileMenu
        rotate={rotate}
        setRotate={setRotate}
        setShowElement={setShowElement}
        ShowElement={ShowElement}
      />

      <motion.div
        ref={RefNavBar}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 9.4, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 9.4, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="fixed inset-x-0 top-0 z-30 px-4 pt-4 transition duration-500 sm:px-6 lg:px-8"
      >
        <div
          className={`mx-auto flex max-w-[1280px] items-center justify-between rounded-[28px] border border-white/[0.12] px-4 py-3 sm:px-6 ${
            ShowElement ? "comic-panel" : "border-white/0 bg-transparent shadow-none"
          }`}
        >
          <div className="flex items-center gap-4">
            <Logo finishedLoading={props.finishedLoading} />
            <div className="hidden xl:block">
              <div className="font-Hand text-2xl leading-none text-[#fff8e7]">Nguyen Chau Linh</div>
              <div className="font-Mono text-[11px] uppercase tracking-[0.22em] text-[#ffe3a8]">
                frontend engineer
              </div>
            </div>
          </div>

          <IconMenu
            rotate={rotate}
            setRotate={setRotate}
            setShowElement={setShowElement}
            ShowElement={ShowElement}
            finishedLoading={props.finishedLoading}
          />

          <DesktopMenu finishedLoading={props.finishedLoading} />
        </div>
      </motion.div>
    </>
  );
};

export default Header;
