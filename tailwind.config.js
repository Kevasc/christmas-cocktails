// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      phone: "640px",
      // => @media (min-width: 640px) { ... }

      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
