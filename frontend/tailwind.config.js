/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#FF7F50",
        tertiary: "#79cbb8",
      },
      screens: {
        lg: { max: "2023px" },

        sm: { max: "1000px" },
      },
    },
  },
  plugins: [],
};
