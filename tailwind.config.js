/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sstroman: ["sst-roman", "sstroman"],
      sstmedium: ["sst-medium", "sstmedium"],
      sstbold: ["sst-bold", "sstbold"],
    },
  },
  plugins: [],
}
