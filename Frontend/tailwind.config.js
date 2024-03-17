/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        phone: { max: "430px" },
        xs: { max: "540px" },
        xxs: { max: "280px" },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        'playfair-display': ["Playfair Display", "serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
