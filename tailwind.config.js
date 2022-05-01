const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#DF2935",
        "primary-dark": "#BF1D37",
      },
      textColor: {
        "primary-color": "#212529",
        "on-primary": "#FFFFFF",
      }, 
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}
