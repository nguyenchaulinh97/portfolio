import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import FeaturedProducts from "../components/Home/FeaturedProducts/FeaturedProducts";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";
import Maintenance from "../components/Home/Maintenance/Maintenance";
export default function Home() {
  const context = useContext(AppContext);
  const [userData, setUserData] = useState(null);
  const [isBlackListed, setIsBlackListed] = useState(false);
  const [IsBlackListEmpty, setIsBlackListEmpty] = useState(
    !process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES || process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES === ""
  );

  useEffect(() => {
    if (!IsBlackListEmpty) {
      const fetchData = async () => {
        try {
          const IP_Address = async () => {
            return fetch("https://api.ipify.org/?format=json")
              .then(res => res.json())
              .then(data => data.ip);
          };

          const response = await fetch("/api/userInfoByIP/" + (await IP_Address())); // Replace with your actual API endpoint
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error("Error fetching data location and ip address:", error);
          // Handle errors as needed
        }
      };

      fetchData();
    }
  }, [IsBlackListEmpty]);

  useEffect(() => {
    if (!IsBlackListEmpty) {
      if (userData) {
        const blacklistCountries = process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES;
        if (blacklistCountries && blacklistCountries.includes(userData.country)) {
          setIsBlackListed(true);
        }
      }
    }
  }, [IsBlackListEmpty, userData]);

  useEffect(() => {
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
      window.removeEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);
      window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
      document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
    }
    context.sharedState.finishedLoading = true;
    context.setSharedState(context.sharedState);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  const meta = {
    title: "Nguyen Chau Linh | Frontend Engineer",
    description:
      "Frontend engineer in Hanoi building clean UI, scalable code, and digital products across fintech and enterprise systems. Currently at SSI Securities Corporation.",
    image: "/img/portrait.jpeg",
    type: "website",
  };
  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta property="og:url" content={`https://nguyenchaulinh.vercel.app`} />
        <link rel="canonical" href={`https://nguyenchaulinh.vercel.app`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Nguyen Chau Linh" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      {!isBlackListed ? (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-AAprimary">
          <Header finishedLoading={true} sectionsRef={null} />
          <MyName finishedLoading={true} />
          <SocialMediaArround finishedLoading={true} />
          <AboutMe />
          <WhereIHaveWorked />
          <FeaturedProducts />
          <SomethingIveBuilt />
          <GetInTouch />
          <Footer githubUrl={"https://github.com/nguyenchaulinh97/portfolio"} hideSocialsInDesktop={true} />
          {!isProd && <ScreenSizeDetector />}
        </div>
      ) : (
        <Maintenance />
      )}
    </>
  );
}
