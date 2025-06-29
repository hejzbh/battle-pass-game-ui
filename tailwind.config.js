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

      "1366px": "1368px",

      "1920px": "1920px",

      "2560px": "2560px",

      "3440px": "3440px",

      "3840px": "3840px",
    },
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      keyframes: {
        "spin-claim": {
          "0%": { transform: "rotateY(0deg) scale(1)", opacity: 1 },
          "50%": { transform: "rotateY(180deg) scale(1.2)", opacity: 0.7 },
          "100%": { transform: "rotateY(360deg) scale(1)", opacity: 1 },
        },
        "once-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-claim": "spin-claim 0.8s ease-in-out",
        "once-spin": "once-spin 0.8s ease-in-out",
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
