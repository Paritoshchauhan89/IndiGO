module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-blue': '#000099', // Add your custom color
      },
      lineHeight: {
        'custom': '1.75em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
