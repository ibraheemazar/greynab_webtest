import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // From §7 of the brief
        green: {
          DEFAULT: '#00B04C',
          glow: '#00FF6F',
        },
        ink: '#0A0A0A',
        graphite: '#55565A',
        mist: '#F4F4F4',
        soft: '#FAFAFA',
        paper: '#EFEEEA',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      transitionTimingFunction: {
        // From §7 motion language: cubic-bezier(0.65, 0, 0.35, 1)
        brand: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      transitionDuration: {
        micro: '200ms',
        component: '400ms',
        page: '800ms',
        hero: '1200ms',
      },
    },
  },
  plugins: [],
};

export default config;
