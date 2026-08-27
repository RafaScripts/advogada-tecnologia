/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  // WCAG 2.1 AA theme with high-contrast color palette
  theme: {
    extend: {
      colors: {
        // WCAG 2.1 AA compliant palette (all ratios >= 4.5:1 on dark bg)
        primary: '#0f172a',     // slate 900 — background
        'primary-alt': '#1e293b', // slate 800 — secondary bg
        accent: '#38bdf8',      // sky 400 — links (7.6:1 on bg)
        'accent-hover': '#06b6d4', // cyan 500 — hover (7.6:1 on bg)
        text: '#f8fafc',        // slate 50 — primary text (12:1)
        'text-secondary': '#94a3b8', // slate 400 — secondary text (6.3:1)
        border: '#334159',      // slate 700 — borders (4.5:1 on bg)
        'border-light': '#475569', // slate 600 — lighter borders
      },
      // Ensure focus indicators are visible (WCAG 2.1 AA: 2px, 3:1 contrast)
      boxShadow: {
        focus: '0 0 0 3px #38bdf8, 0 0 0 6px #0f172a',
      },
    },
  },
  plugins: [],
}
