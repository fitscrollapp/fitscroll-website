import type { Config } from 'tailwindcss'

export default <Config>{
  darkMode: 'class',
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#EF4723',
          50: '#FDECE8',
          100: '#FBD5CC',
          200: '#F7A998',
          300: '#F37D65',
          400: '#EF5132',
          500: '#EF4723',
          600: '#C62D0F',
          700: '#A0240C',
          800: '#7A1B09',
          900: '#531205',
        },
        amber: {
          DEFAULT: '#F5A623',
          500: '#F5A623',
        },
        navy: {
          DEFAULT: '#0E1535',
          deep: '#060922',
          light: '#1A2554',
        },
        cyan: {
          DEFAULT: '#00E5D1',
          400: '#00E5D1',
        },
        dark: {
          DEFAULT: '#060922',
          50: '#2A2F55',
          100: '#1A2554',
          200: '#141A3F',
          300: '#0E1535',
          400: '#060922',
        },
        surface: '#0E1535',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(239, 71, 35, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(239, 71, 35, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
