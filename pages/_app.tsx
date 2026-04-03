import "../styles/globals.css";
import "../styles/arcade.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { AppProps } from "next/app";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import AppContext from "../components/AppContextFolder/AppContext";
import type { AppContextValue, SharedState } from "../components/AppContextFolder/AppContext";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (!GA_TRACKING_ID || typeof window === "undefined") {
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_TRACKING_ID, {
      page_path: window.location.pathname,
    });

    const handleRouteChange = (url: string) => {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      document.head.removeChild(script);
    };
  }, [router.events]);

  const timerCookie = useRef<ReturnType<typeof setInterval> | null>(null);
  const windowSizeTrackerRef = useRef<(() => void) | null>(null);
  const mousePositionRef = useRef<((event: MouseEvent) => void) | null>(null);

  const [sharedState, setSharedState] = useState<SharedState>({
    userdata: {
      timerCookieRef: timerCookie,
      windowSizeTracker: windowSizeTrackerRef,
      mousePositionTracker: mousePositionRef,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
  });

  const contextValue: AppContextValue = { sharedState, setSharedState };

  return (
    <AppContext.Provider value={contextValue}>
      <SpeedInsights />
      <Component {...pageProps} />
      <Analytics />
    </AppContext.Provider>
  );
}

export default MyApp;
