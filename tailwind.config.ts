/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "rgb(232 52 183)",
          200: "rgb(232 52 183)",
          300: "rgb(232 52 183)",
          400: "rgb(232 52 183)",
          500: "rgb(232 52 183)",
          600: "rgb(232 52 183)",
          700: "rgb(232 52 183)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
