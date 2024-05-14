/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "*",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        blue: "#37FFF4",
        l_blue: "#00E5D8",
        grey: "#979797",
        l_grey: "#D2D2D2",
        offWhite: "#F3F3F3",
        l_black: "#191A23",
        d_blue: "#28465F",
        greyblack: "#292A32",
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "1px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
    theme: {
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
