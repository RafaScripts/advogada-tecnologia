/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // High-end fintech / premium legal aesthetic
        background: '#0a0f18',   // Very dark slate, almost black
        surface: '#131b2b',      // Slightly lighter slate for cards
        'surface-hover': '#1a2438',
        gold: '#D4AF37',         // Classic gold
        'gold-hover': '#b5952f',
        'gold-light': '#f3e5ab',
        text: '#ffffff',         // Pure white for highest contrast on dark
        'text-secondary': '#9ba3af', // Accessible gray (meets AA on background)
        border: '#2a3441',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
      },
      boxShadow: {
        focus: '0 0 0 3px #0a0f18, 0 0 0 6px #D4AF37',
        card: '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
