import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        blue1: "var(--blue1)",
        yellowGold:"var(--yellowGold)",
        yellow:"var(--yellow1)",
        yellow1:"var(--yellow2)"
      },
    },
  },
  plugins: [],
};
export default config;
