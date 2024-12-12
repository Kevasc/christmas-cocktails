// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        yesevaOne: ["Yeseva One", "sans-serif"],
        germaniaOne: ["Germania One", "courier-prime"],
        monsieurLaDouliseRegular: ["Monsieur La Doulaise", "cursive"],
      },
    },
  },
  plugins: [],
};
