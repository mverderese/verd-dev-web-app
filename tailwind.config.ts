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
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
export default config;
