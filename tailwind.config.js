module.exports = {
  theme: {
    fontFamily: {
      heading: ["heading"],
      letter: ["letter"],
    },
    extend: {
      colors: {
        primary: "#000",
        secondary: "rgb(15, 15, 15)",
        "text-secondary": "rgba(250, 250, 250, 0.5)",
        inherit: "rgba(250, 250, 250, 0.8)",
      },
      keyframes: {
        move: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        move: "move 20000ms linear infinite",
      },
    },
  },
};
