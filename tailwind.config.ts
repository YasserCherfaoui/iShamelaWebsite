import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        manuscript: {
          paper: '#F7F2E7',
          'paper-deep': '#EFE6D4',
          ink: '#2B241C',
          'ink-soft': '#6B5F4E',
          gold: '#B8860B',
          madder: '#8C3B2E',
          'madder-deep': '#6E2C22',
          sage: '#5C6B54',
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
        btn: '6px',
        frame: '10px',
      },
    },
  },
  plugins: [],
}

export default config
