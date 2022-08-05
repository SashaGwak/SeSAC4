/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/*.ejs", 
    "./src/*.{html,js,css}",
],
  theme: {
    extend: {},
  },
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
  }],
}
