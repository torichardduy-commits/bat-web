/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0a1929',
        },
        bat: {
          dark: '#0d1b2a',
          medium: '#1b263b',
          accent: '#e9c46a',
          gold: '#f4a261',
          rust: '#e76f51',
          teal: '#2a9d8f',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fly': 'fly 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fly: {
          '0%': { transform: 'translateX(-100px) translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateX(50px) translateY(-30px) rotate(5deg)' },
          '50%': { transform: 'translateX(200px) translateY(0) rotate(0deg)' },
          '75%': { transform: 'translateX(350px) translateY(-20px) rotate(-5deg)' },
          '100%': { transform: 'translateX(500px) translateY(0) rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
};
