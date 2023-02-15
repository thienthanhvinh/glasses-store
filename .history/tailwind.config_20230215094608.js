/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'color-1': "#808191",
        'color-2': "#2d3436",
        'primary' : '#025162',
        'secondary': '#EADFD8',
        'secondary-3': '#414141',
        'tertiary' : '#E75313',
        'lens': '#D4E1F4',
        'gray-white': '#D9DBE1',
        'dark-text-primary': '#dfe6e9',
        'dark-color' : '#4e4f50',
        'dark-secon-color': '#2d3436',
        'dark-third-color': '#3a3a3a',
        'dark-four-color' : '#242526',
        'dark-five-color' : '#3A3A3A',
        
      }
    },
  },
  plugins: [],
}
