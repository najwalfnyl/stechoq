/* eslint-disable import/no-extraneous-dependencies */
const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: '#006',
        secondary: '#f00',
      }
    },
  },
  plugins: [
    forms,
    typography,
  ],
};
