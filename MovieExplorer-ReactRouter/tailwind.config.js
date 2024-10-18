/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#FAF1E4',
        bgHeader: '#CEDEBD',
        btnAndTxt: '#435334',
        extraBtn: '#9EB384'
      }
    },
  },
  plugins: [],
}