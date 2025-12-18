import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'museo-moderno': ['var(--font-museo-moderno)', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'figtree': ['Figtree', 'sans-serif'],
      },
      fontSize: {
        'h2': ['48px', { fontWeight: '600' }],
        'h3': ['24px', { fontWeight: '600' }],
        'h4': ['18px', { fontWeight: '500' }],
        'body': ['16px', { fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}

export default config