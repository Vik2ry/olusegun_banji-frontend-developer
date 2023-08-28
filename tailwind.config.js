/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "var(--color-text-primary)"
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)"
      }
    },
  },
  plugins: [],
}

