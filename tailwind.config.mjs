/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'warm-cream': '#FAF6F1',
        'warm': {
          50: '#F5EDE4',
          100: '#EDE3D7',
          200: '#DDD0BF',
          300: '#C4B49E',
          400: '#A08D76',
          500: '#7D6C58',
          600: '#5E503E',
          700: '#453A2C',
          800: '#2D2419',
          900: '#1A1410',
        },
        'terracotta': {
          DEFAULT: '#C4704B',
          dark: '#A85A38',
        },
        'warm-gold': {
          DEFAULT: '#D4A574',
        },
        'warm-rose': {
          DEFAULT: '#D4917A',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'drift': 'drift 20s ease-in-out infinite',
        'drift-slow': 'drift-slow 25s ease-in-out infinite',
        'drift-reverse': 'drift-reverse 22s ease-in-out infinite',
      },
      keyframes: {
        'drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.95)' },
        },
        'drift-slow': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, 30px) scale(1.08)' },
        },
        'drift-reverse': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-25px, 20px) scale(1.03)' },
          '66%': { transform: 'translate(15px, -25px) scale(0.97)' },
        },
      },
    },
  },
  plugins: [],
}
