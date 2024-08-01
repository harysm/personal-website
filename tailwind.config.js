/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container : {
      center :true,
      padding :'16px',
    },
    extend: {
      colors: {
        primary :'#06b6d4',
        dark: '#030712',
        second :'#171717',
        darkmode:'#18181b',
        darktext:'#cbd5e1',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

