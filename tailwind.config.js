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
				"2s": 2000,
			},
      spacing: {
        'width': '100vw',
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
