/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue-400": "#575FFC",
        "primary-blue-500": "#444DF8",
        "primary-blue-600": "#262ECB",
        "dark-blue-400": "#303060",
        "dark-blue-500": "#191938",
        "dark-blue-600": "#0A0A20",
        "primary-red-400": "#FF727B",
        "primary-red-500": "#FC434F",
        "primary-red-600": "#E42F3A",
        "neutral-gray-400": "#FDFDFD",
        "neutral-gray-500": "#F4F4F4",
        "neutral-gray-600": "#EAEAEA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {},
    },
  },
  plugins: [],
};
