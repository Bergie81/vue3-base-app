module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      serif: "'Lora', serif",
    },
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
