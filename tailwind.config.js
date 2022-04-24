module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /bg-(red|green|blue|rose|amber|teal|emerald|indigo|pink)-(100|700)*/,
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {
			animationDelay: {
				"2s": 2000,
			},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
		require("tailwindcss-animate"),
		// ...
	],
}
