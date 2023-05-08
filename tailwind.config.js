/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        string: '#b4db81',
        keyword: '#91dae6',
        exta: '#62656c',
        algori: '#00deaa',
        atokaita: '#4a9dbc',
        '30smtnakwrd': '#676767',
        linkedin: '#3375b0',
        github: '#343434',
        twitter: '#4D9FEB',
      },
    },
  },
  plugins: [],
}
