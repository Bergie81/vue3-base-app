module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      serif: "'Lora', serif",
    },
    extend: {
      colors: {
        tone: "#91BED4",
        lighter: "#D9E8F5",
        darker: "#304269",
        accent: "#F24A00",
        black: "#333333",
        white: "#FFFFFF",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
