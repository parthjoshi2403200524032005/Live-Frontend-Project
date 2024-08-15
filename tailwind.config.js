/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        "dm-sans": ['DM Sans', 'sans-serif'],
      },
      letterSpacing: {
        custom: "0.6px",
      },
    },
  },
  plugins: [],
};
