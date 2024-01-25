/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
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
        secondary: {
          DEFAULT: "#030E2B",
          50: "#91AEF7",
          100: "#7EA0F6",
          200: "#5884F3",
          300: "#3268F1",
          400: "#104EEA",
          500: "#0E41C4",
          600: "#0B349D",
          700: "#082877",
          800: "#061B51",
          900: "#030E2B",
          950: "#010611",
        },
      },
    },
  },
  plugins: [],
};
