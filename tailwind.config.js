/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          100: "#fbab3b",
          200: "#e69434",
        },
        darkBlue: {
          100: "#041424",
        },
      },
    },
  },
  plugins: [],
};
