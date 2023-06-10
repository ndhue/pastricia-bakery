/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        primary: "#D6AFCD",
        secondary: "rgba(214, 175, 205, 0.6)",
        dark :"#A1849B",
        tertiary: "#525050",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      maxWidth: {
        '3xl': '51rem',
      }
    },
  },
  plugins: [],
};