/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        todays: ["Todays", "sans-serif"],
        consolas: ["Consolas", "sans-serif"],
      },
    },
  },
  plugins: [],
};
