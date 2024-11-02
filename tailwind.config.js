/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    extend: {},
    daisyui: {
      themes: ["light", "dark", "cupcake","forest"],
    },
  },
  plugins: [require('daisyui'),],
}