/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#1c1c1c",
        "surface-2": "#262626",
        ink: "#ffffff",
        muted: "#9a9a9a",
        accent: "#ffffff",
      },
      fontFamily: {
        script: ["Caveat", "cursive"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
