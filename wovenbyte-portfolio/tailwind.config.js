/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        animation: {
          'fade-in-up': 'fadeInUp 0.6s ease-out',
          'bounce-slow': 'bounce 2s infinite',
        },
        keyframes: {
          fadeInUp: {
            '0%': {
              opacity: '0',
              transform: 'translateY(30px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
        },
      },
    },
    plugins: [],
  }
  