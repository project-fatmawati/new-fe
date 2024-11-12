/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#F5F5F5',
      'cyan': '#48CFCB',
      'teal': '#229799',
      'slate-blue': '#427898',
      'mustard': '#F5BD41',
      'black': '#000000',
      'red' : '#FF0707',
    },
  },
  plugins: [],
}

