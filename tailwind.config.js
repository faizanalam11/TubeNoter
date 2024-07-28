/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-thin-rounded': {
          'scrollbar-width': 'thin',
          'scrollbar-color': 'rgba(255, 255, 255, 0.5) rgba(0, 0, 0, 0.1)',
        },
        '.scrollbar-thin-rounded::-webkit-scrollbar': {
          'width': '8px',
        },
        '.scrollbar-thin-rounded::-webkit-scrollbar-track': {
          'background': 'rgba(0, 0, 0, 0.1)',
          'border-radius': '10px',
        },
        '.scrollbar-thin-rounded::-webkit-scrollbar-thumb': {
          'background-color': 'rgba(255, 255, 255, 0.5)',
          'border-radius': '10px',
          'border': '2px solid rgba(0, 0, 0, 0.1)',
        },
      });
    }
  ],
}