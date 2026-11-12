import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#F2F7F3',
          '2': '#E6EFE8',
          '3': '#D4E6D8',
        },
        forest: {
          DEFAULT: '#2D5A3D',
          '2': '#3A7050',
          '3': '#1E3D29',
        },
        gold: {
          DEFAULT: '#8B6914',
          '2': '#A07C20',
        },
        dark: '#18231C',
        mid: '#4A5E52',
        muted: '#7A9080',
        border: '#D0E2D4',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1360px',
      },
      screens: {
        '2xl': '1360px',
      },
    },
  },
  plugins: [],
}

export default config
