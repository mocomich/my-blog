/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        asset: {
          black: "#2b2b2b",
          blue: "#4353ff",
          deepBlack: "#000",
          deepBlue: "#3545ee",
          deepRed: "#FF4B4B",
          red: "#FF0C0C",
        },
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "3.5rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
    },
  },
};
