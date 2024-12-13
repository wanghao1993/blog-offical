/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  shortcuts: {
    "flex-center": "flex justify-center items-center",
    "flex-between": "flex justify-between items-center",
    "flex-left": "flex justify-left items-center",
    "flex-right": "flex justify-right items-center",
  },
  debugger: true,
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
};
