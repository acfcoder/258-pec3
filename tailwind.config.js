/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': "#ffffff",
      'blancas': "#eace9f",
      'negras': "#3a302a",
    },
    extend: {
      fontFamily: {
        'display': ['"Akshar"', 'ui-sans-serif'],
        'body': ['ui-sans-serif', '"Arial"', '"Roboto"'],
      }
    },
  },
  plugins: [],
}

