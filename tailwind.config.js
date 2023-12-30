/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Primary': '#E09600',
        'Primary2': '#FA2409',
        'Grayscale': '#0D0D0D',
        'Secondary': '#949494',
        'RedPantone': '#fb1351',
        'Coral': '#FF4242',
        'Lavender': '#9459E9',
      },
      fontFamily: {
        'poppins': ['Poppins'],
     },
    },
  },
  plugins: [],
}

