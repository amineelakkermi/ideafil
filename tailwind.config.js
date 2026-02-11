/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales
        dark: '#050519',
        mauve: '#7F00FE',
        blue: '#00BFFE',
        pink: '#FE0060',
        
        // Variations claires
        'dark-light': '#2D0066',
        'dark-lighter': '#400080',
        'mauve-light': '#9933FF',
        'mauve-lighter': '#B366FF',
        'blue-light': '#33CCFF',
        'blue-lighter': '#66DDFF',
        'pink-light': '#FF3380',
        'pink-lighter': '#FF6699',
        
        // Couleurs neutres
        'custom-gray': '#F3F4F6',
        'custom-gray-dark': '#374151',
        'custom-black': '#000000',
        'custom-white': '#FFFFFF',
      },
      fontFamily: {
        'handicrafts': ['var(--font-handicrafts)'],
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'stagger': 'stagger 0.6s ease-out',
        'scroll-ar': 'scroll-ar 50s linear infinite reverse',
        'scroll-en': 'scroll-en 50s linear infinite reverse',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        stagger: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scroll-ar': {
          '0%': { transform: 'translate(0, -50%)' },
          '100%': { transform: 'translate(-50%, -50%)' },
        },
        'scroll-en': {
          '0%': { transform: 'translate(-50%, -50%)' },
          '100%': { transform: 'translate(0, -50%)' },
        },
      },
    },
  },
  plugins: [],
}
