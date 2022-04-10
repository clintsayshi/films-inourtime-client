module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["poppins"],
      body: ["poppins", "sans-serif"],
    },
    extend: {
      fontFamily: {
        poppins: ["poppins"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
