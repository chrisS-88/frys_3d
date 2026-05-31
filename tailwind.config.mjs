import base from "pennine-design-system/base/tailwind.base.js";
import minimal from "pennine-design-system/motion/minimal.js";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [base, minimal],
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: "#01f5ff",
        secondary: "#ff00fe",
      },
      fontFamily: {
        heading: ["Anton", "sans-serif"],
        body: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
};
