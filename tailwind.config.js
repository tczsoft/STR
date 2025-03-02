/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
      'mygreen': '#225a2b',
      'secondary':'#00008B'
    },},
  },
  plugins: [
    // require('tailwindcss-animated')
  ],
  
}

