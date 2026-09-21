/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          paper: '#F2E8CF',
          cream: '#F8F2E2',
          forest: '#0E3B30',
          'forest-deep': '#101B17',
          gold: '#C6A15B',
          ink: '#1F2A24',
          muted: '#55614F',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Source Serif 4"', 'Georgia', 'serif'],
        arabic: ['Amiri', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1080px',
        legal: '720px',
      },
      borderRadius: {
        btn: '8px',
        phone: '28px',
        shot: '16px',
      },
    },
  },
  plugins: [],
}
