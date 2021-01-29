const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: 'class',
	future: {
		defaultLineHeights: true,
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true,
		standardFontWeights: true,
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
	],
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	},
	theme: {
		extend: {
			colors: {
				primary: colors.lightBlue,
				rose: colors.rose,
			}
		}
	},
};
