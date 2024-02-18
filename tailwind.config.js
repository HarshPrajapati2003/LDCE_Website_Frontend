/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a2463",
        secondary: "#d8315b",
        background: "#fffaff",
        textColor: "#1e1b18",
        linkColor: "#3e92cc",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "spin-slow": "spin 5s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      // fontFamily: {
      //   customFont: ['"Rubik"', "sans-serif"],
      // },
    },
  },
  plugins: [],
};

