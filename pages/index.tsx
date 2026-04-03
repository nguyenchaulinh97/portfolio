import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import FeaturedProducts from "../components/Home/FeaturedProducts/FeaturedProducts";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";
import Maintenance from "../components/Home/Maintenance/Maintenance";
import PlayfulLoader from "../components/Home/PlayfulLoader/PlayfulLoader";
import PortfolioStickerHunt from "../components/Home/PortfolioStickerHunt/PortfolioStickerHunt";

type UserInfoPreview = {
  country?: string;
};

export default function Home() {
  const [userData, setUserData] = useState<UserInfoPreview | null>(null);
  const [isBlackListed, setIsBlackListed] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [isStickerHuntOpen, setIsStickerHuntOpen] = useState(false);

  const blacklistCountries = process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES ?? "";
  const isBlackListEmpty = blacklistCountries === "";

  useEffect(() => {
    if (isBlackListEmpty) {
      return;
    }

    const fetchData = async () => {
      try {
        const ipAddress = await fetch("https://api.ipify.org/?format=json")
          .then(res => res.json())
          .then(data => data.ip as string);

        const response = await fetch(`/api/userInfoByIP/${ipAddress}`);
        const data = (await response.json()) as UserInfoPreview;
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data location and ip address:", error);
      }
    };

    fetchData();
  }, [isBlackListEmpty]);

  useEffect(() => {
    if (!isBlackListEmpty && userData?.country && blacklistCountries.includes(userData.country)) {
      setIsBlackListed(true);
    }
  }, [blacklistCountries, isBlackListEmpty, userData]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(() => setShowLoader(false), prefersReducedMotion ? 450 : 1650);

    return () => window.clearTimeout(timeout);
  }, []);

  const meta = {
    title: "Nguyen Chau Linh | Frontend Engineer",
    description:
      "Frontend engineer in Hanoi building clean UI, scalable code, and digital products across fintech and enterprise systems. Currently at SSI Securities Corporation.",
    image: "/img/portrait.jpeg",
    type: "website",
  };

  const isProd = process.env.NODE_ENV === "production";

  const handleExploreProducts = () => {
    if (typeof document === "undefined") {
      return;
    }

    document.getElementById("ProductsSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
        <>
          {showLoader ? <PlayfulLoader /> : null}

          {!showLoader ? (
            <>
              <PortfolioStickerHunt
                isOpen={isStickerHuntOpen}
                onClose={() => setIsStickerHuntOpen(false)}
                onExploreProducts={handleExploreProducts}
              />

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative min-h-screen w-full overflow-x-hidden bg-AAprimary"
              >
                <Header />
                <MyName onOpenStickerHunt={() => setIsStickerHuntOpen(true)} />
                <SocialMediaArround />
                <AboutMe />
                <WhereIHaveWorked />
                <FeaturedProducts />
                <SomethingIveBuilt />
                <GetInTouch />
                <Footer
                  githubUrl={"https://github.com/nguyenchaulinh97/portfolio"}
                  hideSocialsInDesktop={true}
                  onOpenStickerHunt={() => setIsStickerHuntOpen(true)}
                />
                {!isProd && <ScreenSizeDetector />}
              </motion.div>
            </>
          ) : null}
        </>
      ) : (
        <Maintenance />
      )}
    </>
  );
}
