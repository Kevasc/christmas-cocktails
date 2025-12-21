// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        yesevaOne: ["Yeseva One", "sans-serif"],
        germaniaOne: ["Germania One", "courier-prime"],
        parisienne: ["Parisienne", "cursive"],
        monsieurLaDoulise: ["Monsieur La Doulaise", "cursive"],
        display: ["Cormorant Garamond", "serif"],
        body: ["IBM Plex Sans", "sans-serif"],
        clash: ["Clash Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
