import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
import colors from "./src/styles/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
    },
    fontFamily: {
      tenada: ["Tenada"],
      pretendard400: ["Pretendard-Regular"],
      pretendard500: ["Pretendard-Medium"],
      pretendard600: ["Pretendard-SemiBold"],
      pretendard700: ["Pretendard-Bold"],
      pretendard800: ["Pretendard-ExtraBold"],
    },
  },
  plugins: [nextui()],
};
export default config;
