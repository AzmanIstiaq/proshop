/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#343a40",
        primaryHover: "#495057",
        secondary: "#6c757d",
        secondaryHover: "#58626c",
        surface: "#e9ecef",
        background: "#f8f9fa",
        border: "#ced4da",
        accent: "#f8e825",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
