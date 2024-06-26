import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    colors: {
      // https://color.adobe.com/trends/Wilderness
      // https://color.adobe.com/astral-shades-color-theme-54738f1b-396f-43b3-b6d2-1f5927c860e0
      calypso: "#2F6282",
      dianne: "#204359",
      astral: "#3C7DA6",
      malibu: "#5BBFFC",
      shakespeare: "#4CA0D4",
      aqua: "#96D2D9",
      wheatfield: "#F2E8C9",
      copper: "#735B2F",
      chocolate: "#401201",
      gray: colors.gray,
      white: colors.white,
      slate: colors.slate,
    },
    extend: {
      fontFamily: {
        akira: ["var(--font-akira-expanded)"],
        archivo: ["var(--font-archivo-black)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: colors.white,
        black: colors.black,
        gray: colors.gray,
        slate: colors.slate,
        "blue-stone": "#025159",
        "robins-egg-blue": "#04BFBF",
        pampas: "#F4F1ED",
        "river-bed": "#4B5563",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin"), require("@designbycode/tailwindcss-text-stroke")],
};
export default config;
