import type { Config } from "tailwindcss";
import colors from "./src/styles/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
    },
    fontFamily: {
      tenada: ["Tenada"],
    },
  },
  plugins: [],
};
export default config;