/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        light: "#ffffff",
        primary: "#2189FF",
        lightPrimary: "#0B2441",
        lightDark: "#0B2441",
        bgCard: "#EAF4FF",
        secondary: "#F4F4F4",
        black: "#000000",
      },
    },
  },
  plugins: [],
}

