module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
