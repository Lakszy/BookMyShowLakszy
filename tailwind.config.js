/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
  colors:{
    lakshay :{
  50: '#d7fcff',
  100: '#abeeff',
  200: '#7ae3ff',
  300: '#48d6ff',
  400: '#1acaff',
  500: '#00b0e6',
  600: '#0089b4',
  700: '#006282',
  800: '#003c51',
  900: '#404043',
        },
        
navCol:{
  50: '#2B3148',
  100: '#f7bbf8',
  200: '#f08ff0',
  300: '#e963e9',
  400: '#e338e3',
  500: '#c920c9',
  600: '#9c179c',
  700: '#700f70',
  800: '#333545',
  900: '#190119',
},
bGCol:
  
{
  50: '#F2F3F4',
  100: '#ded7d9',
  200: '#c2bebf',
  300: '#a7a5a6',
  400: '#8c8c8c',
  500: '#737373',
  600: '#5a5959',
  700: '#423f40',
  800: '#2a2526',
  900: '#333338',
}


}
    },
  },
  variants:{
extend:{},
  },
  plugins: [],
}

