import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'funky-black': '#241F21',
      },
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
      keyframes: {
        // Arrow slides out to the right until it's fully clipped by its
        // static SVG mask (a hard cutoff, not a fade — like sliding behind
        // a wall), jumps to the equivalent clipped position on the left,
        // then slides back in from there. Distance (60px) exceeds the
        // arrow's own ~57px width so it's completely hidden at the 35%/36%
        // steps, not just partially cropped.
        'arrow-out-in': {
          '0%': { transform: 'translateX(0)' },
          '35%': { transform: 'translateX(60px)' },
          '36%': { transform: 'translateX(-60px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'arrow-out-in': 'arrow-out-in 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
}

export default config