/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#6B0F1A',
          dark: '#4a0a12',
          mid: '#8B1A2A',
        },
        gold: {
          DEFAULT: '#C9A84C',
          mid: '#D4AF37',
          light: '#F0D060',
        },
        ivory: '#FDF6E3',
        peach: '#F5C6A0',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'shimmer': 'shimmer 5s ease infinite',
        'float': 'float 4s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'bounce-pin': 'bouncePin 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(201,168,76,0.2), 0 0 30px rgba(201,168,76,0.1)',
            borderColor: 'rgba(201,168,76,0.5)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(201,168,76,0.4), 0 0 60px rgba(201,168,76,0.2)',
            borderColor: '#F0D060',
          },
        },
        bouncePin: {
          '0%, 100%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-16px)' },
          '50%': { transform: 'translateY(-8px)' },
          '70%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
