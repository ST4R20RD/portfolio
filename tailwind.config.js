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
      backgroundImage: {
        "code-texture": "url('/public/images/code-texture.png')",
        "code-texture2": "url('/public/images/code-texture2.png')",
        "block-texture": "url('/public/images/block-texture.png')",
        "block-texture2": "url('/public/images/block-texture2.png')",
      },
      colors: {
        "primary-white": "#F7F7F7",
        "secondary-white": "#EEEEEE",
        "primary-gray": "#929AAB",
        "dark-blue": "#0A050B",
      },
    },
  },
  plugins: [],
};
