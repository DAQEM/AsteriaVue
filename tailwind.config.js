/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
      borderWidth: {
        3: "3px",
      },
      gridTemplateColumns: {
        "3-mid": "max-content 1fr max-content",
      },
      fontFamily: {
        primary: "var(--font-family)",
      },
      colors: {
        primary: {
          DEFAULT: "#1BB3E5",
          50: "#C0EAF8",
          100: "#ADE4F6",
          200: "#89D8F2",
          300: "#64CBED",
          400: "#40BFE9",
          500: "#1BB3E5",
          600: "#148CB3",
          700: "#0F6581",
          800: "#093D4F",
          900: "#03161C",
          950: "#000203",
        },
        background: {
          DEFAULT: "#121212",
          50: "#BFBFBF",
          100: "#B5B5B5",
          200: "#A1A1A1",
          300: "#8C8C8C",
          400: "#787878",
          500: "#646464",
          600: "#4F4F4F",
          700: "#3B3B3B",
          800: "#282828",
          900: "#121212",
          950: "#040404",
        },
      },
    },
  },
};
