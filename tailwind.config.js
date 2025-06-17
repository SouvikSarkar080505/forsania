/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['"Dancing Script"', 'cursive'],
        'playfair': ['"Playfair Display"', 'serif'],
        'sans': ['Poppins', 'sans-serif']
      },
      colors: {
        'princess-pink': {
          100: '#FFF0F7',
          200: '#FFD6E8',
          300: '#FFADD2',
          400: '#FF85BC',
          500: '#FF5CA8',
          600: '#FF338F',
          700: '#CC1A6B',
          800: '#991447',
          900: '#660D24',
        },
        'royal-purple': {
          100: '#F3E8FF',
          200: '#E4CCFF',
          300: '#C9A3FA',
          400: '#AD7AEF',
          500: '#9351E5',
          600: '#7928CC',
          700: '#5F1FB3',
          800: '#45178A',
          900: '#2E0F61',
        },
        'golden': {
          100: '#FFF9E6',
          200: '#FFEFC0',
          300: '#FFE499',
          400: '#FFD166',
          500: '#FFC233',
          600: '#FFB100',
          700: '#CC8C00',
          800: '#996800',
          900: '#664500',
        },
      },
      backgroundImage: {
        'fairy-tale-gradient': 'linear-gradient(to bottom, #FFF0F7, #F3E8FF)',
        'night-sky-gradient': 'linear-gradient(to bottom, #1a1a2e, #16213e, #0f3460)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s linear infinite',
        'pulse-soft': 'pulse-soft 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0, transform: 'scale(0.5)' },
          '50%': { opacity: 1, transform: 'scale(1)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
    },
  },
  plugins: [],
};