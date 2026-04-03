import type { Dispatch, MutableRefObject, RefObject, SetStateAction } from "react";
import { detect } from "detect-browser";
import { getGPUTier } from "detect-gpu";
import type { AppContextValue } from "../../AppContextFolder/AppContext";
import type { UserInfoResponse } from "../../../lib/userInfo";

type SpanRef = RefObject<HTMLSpanElement>;
type CookieApi = {
  get: (key: string) => string | undefined;
  set: (key: string, value: string) => void;
};

export type ExtendedUserInfo = UserInfoResponse & {
  browser?: string;
  browserVersion?: string;
  browserOS?: string;
  screenWidth?: number;
  screenHeight?: number;
  screenOrientationType?: string;
  screenColorDepth?: string;
  NavigatorLanguages?: readonly string[];
  NavigatorLogicalCores?: string;
  batteryLevel?: string;
};

export type GpuTierPreview = {
  gpu?: string;
  fps?: number;
} | null;

type CookieTimeCounterProps = {
  context: AppContextValue;
  secUnits: SpanRef;
  secTens: SpanRef;
  minUnits: SpanRef;
  minTens: SpanRef;
  cookieCutter: CookieApi;
};

type MouseWindowEventListenersProps = {
  context: AppContextValue;
  windowWidth: SpanRef;
  windowHeight: SpanRef;
  mouseX: SpanRef;
  mouseY: SpanRef;
};

type UserInfoProps = {
  setLocation: Dispatch<SetStateAction<number[]>>;
  setZipCode: Dispatch<SetStateAction<string | undefined>>;
  setGpuTier: Dispatch<SetStateAction<GpuTierPreview>>;
  userData: MutableRefObject<ExtendedUserInfo | null>;
  cookieCutter: CookieApi;
  lastVisitRef: SpanRef;
  firstVisitRef: SpanRef;
};

export const CookieTimeCounter = ({
  context,
  secUnits,
  secTens,
  minUnits,
  minTens,
  cookieCutter,
}: CookieTimeCounterProps) => {
  if (typeof window === "undefined") {
    return;
  }

  if (!cookieCutter.get("timer-sec-units")) {
    cookieCutter.set("timer-sec-units", "0");
    cookieCutter.set("timer-sec-tens", "0");
    cookieCutter.set("timer-min-units", "0");
    cookieCutter.set("timer-min-tens", "0");
  }

  context.sharedState.userdata.timerCookieRef.current = setInterval(() => {
    const countSec = Number(cookieCutter.get("timer-sec-units")) + 1;
    cookieCutter.set("timer-sec-units", String(countSec));

    if (countSec > 9) {
      cookieCutter.set("timer-sec-units", "0");
      cookieCutter.set("timer-sec-tens", String(Number(cookieCutter.get("timer-sec-tens")) + 1));
      const countSecTens = Number(cookieCutter.get("timer-sec-tens"));

      if (countSecTens > 5) {
        cookieCutter.set("timer-sec-tens", "0");
        cookieCutter.set("timer-min-units", String(Number(cookieCutter.get("timer-min-units")) + 1));
        const countMinUnits = Number(cookieCutter.get("timer-min-units"));

        if (countMinUnits > 9) {
          cookieCutter.set("timer-min-units", "0");
          cookieCutter.set("timer-min-tens", String(Number(cookieCutter.get("timer-min-tens")) + 1));
        }
      }
    }

    if (secUnits.current && secTens.current && minUnits.current && minTens.current) {
      secUnits.current.innerText = cookieCutter.get("timer-sec-units") ?? "0";
      secTens.current.innerText = cookieCutter.get("timer-sec-tens") ?? "0";
      minUnits.current.innerText = cookieCutter.get("timer-min-units") ?? "0";
      minTens.current.innerText = cookieCutter.get("timer-min-tens") ?? "0";
    }
  }, 1000);
};

export const MouseWindowEventListners = ({
  context,
  windowWidth,
  windowHeight,
  mouseX,
  mouseY,
}: MouseWindowEventListenersProps) => {
  context.sharedState.userdata.windowSizeTracker.current = () => {
    if (windowWidth.current && windowHeight.current) {
      windowWidth.current.innerText = String(window.innerWidth);
      windowHeight.current.innerText = String(window.innerHeight);
    }
  };

  context.sharedState.userdata.mousePositionTracker.current = event => {
    if (mouseX.current && mouseY.current) {
      mouseX.current.innerText = String(event.pageX);
      mouseY.current.innerText = String(event.pageY);
    }
  };

  if (typeof window !== "undefined") {
    if (context.sharedState.userdata.windowSizeTracker.current) {
      window.addEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
    }

    if (context.sharedState.userdata.mousePositionTracker.current) {
      window.addEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);
    }
  }
};

export const userInfo = async ({
  setLocation,
  setZipCode,
  setGpuTier,
  userData,
  cookieCutter,
  lastVisitRef,
  firstVisitRef,
}: UserInfoProps) => {
  const ipAddress = await fetch("https://api.ipify.org/?format=json")
    .then(res => res.json())
    .then(data => data.ip as string);

  const result = (await fetch(`/api/userInfoByIP/${ipAddress}`).then(res => res.json())) as ExtendedUserInfo;
  const browser = detect();

  if (browser) {
    result.browser = browser.name;
    result.browserVersion = browser.version;
    result.browserOS = browser.os;
  }

  if (typeof screen !== "undefined") {
    result.screenWidth = screen.width;
    result.screenHeight = screen.height;
    result.screenOrientationType = screen.orientation?.type ?? "";
    result.screenColorDepth = `${screen.colorDepth} bits`;
  }

  if (typeof navigator !== "undefined") {
    result.NavigatorLanguages = navigator.languages;
    result.NavigatorLogicalCores = `${navigator.hardwareConcurrency} cores`;

    if ("getBattery" in navigator) {
      const batteryManager = await (navigator as Navigator & {
        getBattery: () => Promise<{ level: number }>;
      }).getBattery();
      result.batteryLevel = `${batteryManager.level} %`;
    } else {
      result.batteryLevel = "Not supported";
    }
  }

  setLocation([result.lat, result.lon]);
  setZipCode(result.zip);
  userData.current = result;

  if (cookieCutter.get("first-visit")) {
    if (lastVisitRef.current) {
      lastVisitRef.current.innerText = cookieCutter.get("last-visit") ?? "Now";
    }
    cookieCutter.set("last-visit", result.datetime);
  } else {
    if (lastVisitRef.current) {
      lastVisitRef.current.innerText = "Now";
    }
    cookieCutter.set("first-visit", result.datetime);
    cookieCutter.set("last-visit", result.datetime);
  }

  if (firstVisitRef.current) {
    firstVisitRef.current.innerText = cookieCutter.get("first-visit") ?? "Now";
  }

  const gpuTierData = await getGPUTier();
  setGpuTier({
    gpu: gpuTierData.gpu,
    fps: gpuTierData.fps,
  });
};

export const onClickUpdateLocation = async (
  setUpdatingLocatinResult: Dispatch<SetStateAction<boolean>>,
  setUpdatingLocation: Dispatch<SetStateAction<boolean>>,
  setLocation: Dispatch<SetStateAction<number[]>>,
  setZipCode: Dispatch<SetStateAction<string | undefined>>
) => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
    return;
  }

  function success(position: GeolocationPosition) {
    setLocation([position.coords.latitude, position.coords.longitude]);
    setUpdatingLocation(false);
    setUpdatingLocatinResult(false);

    const apiGetZip = async (lat: number, lon: number) => {
      return fetch(`/api/userInfoByLatLon/${lat}/${lon}`)
        .then(res => res.json())
        .then(data => data.zipcode as string);
    };

    apiGetZip(position.coords.latitude, position.coords.longitude).then(zipCode => setZipCode(zipCode));
  }

  function error() {
    setUpdatingLocatinResult(true);
    setUpdatingLocation(false);
  }

  navigator.geolocation.getCurrentPosition(success, error);
};

export const Additional_data = (userData: MutableRefObject<ExtendedUserInfo | null>, gpuTier: GpuTierPreview) => {
  return [
    { title: "Browser :", value: userData.current?.browser || "Checking..." },
    {
      title: "Browser Version :",
      value: userData.current?.browserVersion || "Checking...",
    },
    {
      title: "Languages :",
      value: userData.current?.NavigatorLanguages?.join(", ") || "Checking...",
    },
    { title: "OS :", value: userData.current?.browserOS || "Checking..." },
    {
      title: "CPU cores :",
      value: userData.current?.NavigatorLogicalCores || "Checking...",
    },
    {
      title: "GPU :",
      value: gpuTier?.gpu || "Checking...",
    },
  ];
};

export const tableData = (userData: MutableRefObject<ExtendedUserInfo | null>, zipCode: string | undefined) => {
  return [
    {
      title: "IP Address :",
      value: userData.current?.query || "Checking...",
    },
    { title: "City :", value: userData.current?.city || "Checking..." },
    { title: "Zip Code :", value: zipCode || "Checking..." },
    {
      title: "Region :",
      value: userData.current?.regionName || "Checking...",
    },
    {
      title: "Region Code :",
      value: userData.current?.region || "Checking...",
    },
    { title: "Country :", value: userData.current?.country || "Checking..." },
    {
      title: "Current Date/time :",
      value: userData.current?.datetime || "Checking...",
    },
    {
      title: "Battery :",
      value: userData.current?.batteryLevel || "Checking...",
    },
    { title: "As :", value: userData.current?.as || "Checking..." },
  ];
};
