module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
