/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#f97316",
          600: "#ea580c",
        },
        brandomedia: {
          blue: "#00008B",
          dark: "#0a0a4a",
          light: "#1e1e6e",
          orange: "#FFA500",
          yellow: "#FFD700",
        },
      },
    },
  },
  plugins: [],
};

