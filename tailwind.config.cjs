/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
    extend: {
      fontFamily: {
        Header: ["Bricolage Grotesque", "sans-serif"],
        Text2: ["Nunito", "sans-serif"],
        About: ["Fraunces", "serif"],
        Arimo: ["DM Sans", "sans-serif"],
        Mono: ["Space Mono", "monospace"],
        Hand: ["Patrick Hand", "cursive"],
      },
      colors: {
        AAprimary: "#192646",
        AAsecondary: "#ffcf6e",
        AAError: "#ff7a70",
        AAtertiary: "#28385f",
        ResumeButtonHover: "#32436f",
        MobileNavBarColor: "#213259",
        StartupBackground: "#121c34",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
  variants: {
    scrollbar: ["rounded"],
  },
};
