module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blues: {
          100: "#2A2663",
          200: "#175CD3",
        },
        greens: {
          100: "#1F864E",
        },

        greys: {
          100: "#545962",
        },
        red: "#ED1212",
      },
      fontFamily: {
        sans: ["Roboto"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
