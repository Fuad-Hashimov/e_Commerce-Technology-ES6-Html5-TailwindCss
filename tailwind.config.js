module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "850px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        lato: ["lato", "sans-serif"],
      },
      colors: {
        bgHeader: "#1C1C1C",
        bgRed: "#ED1D24",
        grayText: "#8f8f8f",
        bgGray: "#F5F5F5",
      },
      spacing: {
        33: "8.438rem",
 
      },
    },
  },
  plugins: [],
};
