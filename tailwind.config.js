/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-blue': 'linear-gradient(229.89deg, rgba(32, 47, 89, 0) 32.18%, rgba(32, 47, 89, 0.8) 100%)',
        'gradient-blue--light': 'linear-gradient(329.11deg, #202F59 -0.01%, #213560 13.35%, #224673 32.63%, #256392 55.51%, #2989BE 80.92%, #2DABE3 100%)',
        'gradient-ecokhemia': 'linear-gradient(0deg, #2DABE3 0%, #48AE4D 100%)',
        'gradient-blue-green': 'linear-gradient(321.02deg, #202F59 3.74%, #245988 15.06%, #287DB0 26.28%, #2B96CC 36.55%, #2CA6DD 45.49%, #2DABE3 52.11%, #2FABD9 57.55%, #34ACBF 66.72%, #3BAD94 78.53%, #46AE59 92.35%, #48AE4D 94.93%)',
        'gradient-gray-white': 'linear-gradient(90deg, #D7D9DD -9.17%, #FFFFFF 113.83%)'
      },
      boxShadow: {
        'service-card': '4px 4px 4px 0px #00000040',
        'circle': '0px 4px 4px 0px #00000040',
        'circle-2': '4px 4px 4px 0px #00000040'
      },
      colors: {
        'eco-blue--dark': '#202F59',
        'eco-blue--light': '#2977E2',
        'eco-sky-blue': '#2DABE3',
        'eco-green': '#22B573',
        'eco-gray': '#717171'
      },
      container: {
        center: true,
        padding: '0px'
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
      screens: {
        '2xl': '1366px',
        '3xl': '1920px'
      }
    }
  },
  plugins: []
};
