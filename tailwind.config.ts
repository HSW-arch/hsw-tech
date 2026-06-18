import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1a3a5c',
        'brand-blue-light': '#2d5a8e',
        'brand-blue-dark': '#0f2440',
        'brand-light': '#f5f6f8',
        'brand-gray': '#6b7d8e',
        'brand-gray-light': '#9aacbb',
        'brand-gray-dark': '#4a5a6a',
        'brand-accent': '#e8ecf1',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config