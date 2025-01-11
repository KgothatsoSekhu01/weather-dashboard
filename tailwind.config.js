/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  darkMode: 'class', // Enables dark mode
  theme: {
    extend: {
      colors: {
        darkBackground: '#121212',
        darkText: '#ffffff',
      },
    },
  },
  plugins: [],
};
