/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#2E073F',
        btnColor: '#FF9100', // Define your custom color
      },
    },
  },
  plugins: [],
}