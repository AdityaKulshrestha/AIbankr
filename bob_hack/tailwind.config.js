/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bob-pri": "#F26522",
        "bob-pri2": "#FE8538",
        "bob-blue": "#1D2C74",
      },
      lineHeight: {
        "extra-loose": "1.5",
        12: "3rem",
      },
    },
  },
  plugins: [],
};
