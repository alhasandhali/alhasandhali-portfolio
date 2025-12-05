import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Blue for primary actions
        dark: "#0f172a",    // Deep slate for dark mode
        light: "#f8fafc",   // Clean white/gray for light mode
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-space)'],
      },
    },
  },
  plugins: [],
};
export default config;