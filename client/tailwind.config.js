const cols = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	theme: {
		extend: {
			// add font family to config
			fontFamily: { sans: ["Inter var", "sans-serif"] },
			// add primary color
			colors: { primary: cols.violet[600], ...cols.violet },
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
