module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'cricket': "url('/src/assets/cricket-bg.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};



