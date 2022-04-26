module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /bg-(red|orange|yellow|green|cyan|blue|rose|amber|teal|emerald|indigo|pink|purple)-(100|700)*/,
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animationDelay: {
        "3s": "3s",
      },
      spacing: {
        'width': '100vw',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '70%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        }
      },
      animation: {
        'fade-in': 'fade-in 2s ease-out'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography')
  ],
}
