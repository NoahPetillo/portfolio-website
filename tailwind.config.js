/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0D0F14',
        surface: '#161B25',
        border: '#1E2535',
        accent: '#6366F1',
        'accent-hover': '#818CF8',
        primary: '#F1F5F9',
        secondary: '#94A3B8',
        amber: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
