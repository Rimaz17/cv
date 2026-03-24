/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(125, 211, 252, 0.35), 0 0 45px rgba(56, 189, 248, 0.2)',
      },
    },
  },
  plugins: [],
}

