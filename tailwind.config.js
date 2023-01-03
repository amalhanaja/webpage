const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#569CD6",
        secondary: "#4ABCA6",
        "window-action-red": "#FE5F57",
        "window-action-yellow": "#FEBC2E",
        "window-action-green": "#27C840",
        editor: {
          dark: "#1E1E1E",
        },
        nav: {
          100: {
            dark: "#1E1E1E",
          },
          200: {
            dark: "#252526",
          },
          300: {
            dark: "#2D2D2D",
          },
        },
        background: {
          dark: "#333333",
        },
        window: {
          bar: {
            dark: "#3C3C3C",
          },
          footer: {
            dark: "#007ACC"
          }
        },
        content: {
          100: {
            dark: "#D4D4D4",
          },
          200: {
            dark: "#A9A9A9",
          },
        },
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
