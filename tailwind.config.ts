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
    extend: {
      fontFamily: {
        akira: ["var(--font-akira-expanded)"],
        archivo: ["var(--font-archivo-black)"],
        "dm-sans-semibold": ["var(--font-dm-sans-semibold)"],
        "roboto-medium": ["var(--font-roboto-medium)"],
      },
      colors: {
        // https://color.adobe.com/astral-shades-color-theme-54738f1b-396f-43b3-b6d2-1f5927c860e0
        calypso: "#2F6282",
        astral: "#3C7DA6",
        wheatfield: "#F2E8C9",
        gray: colors.gray,
        white: colors.white,
        slate: colors.slate,
        red: colors.red,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin"), require("@designbycode/tailwindcss-text-stroke")],
};
export default config;
