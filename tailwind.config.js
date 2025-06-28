module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",

      "2xl": "1700px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      backgroundImage: {
        "standard-gradient":
          "linear-gradient(to right, rgba(0, 26, 8, 0.853) 0%, rgba(8, 11, 8, 1) 100%)",
        "white-fade-right":
          "linear-gradient(to right, rgba(225,225,225,0.1) 0%, rgba(225,225,225,0.02) 100%)",
        "level-bar-gradient":
          "linear-gradient(to right, rgba(92, 197, 125, 1) 0%, rgba(142,227,168,1) 100%)",
      },
    },
  },
  plugins: [],
};
