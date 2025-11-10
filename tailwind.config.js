/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E293B',    // Slate 800
        'secondary': '#64748B',  // Slate 500
        'accent': '#3B82F6',     // Blue 500
        'off-white': '#F8FAFC',  // Slate 50
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}