/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Fira-Sans': ['fira-sans'],
        'Metrophobic': ['metrophobic']
      }
    },
  },
  plugins: [],
}