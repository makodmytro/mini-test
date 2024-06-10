/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8eace3',
          DEFAULT: '#3b82f6',
          dark: '#285ea8'
        },
        secondary: {
          light: '#ffb3b3',
          DEFAULT: '#ff4d4d',
          dark: '#b32424'
        },
      },
    },
  },
  plugins: [],
}