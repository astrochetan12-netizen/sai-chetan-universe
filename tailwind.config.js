/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBase: '#0a0a0f',
        accentIndigo: '#4f46e5',
        accentMaroon: '#9f1239',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        retro: ['"Press Start 2P"', 'monospace'], // For movies section
      },
    },
  },
  plugins: [],
}
