const cols = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	darkMode: "class",
	theme: {
		extend: {
			// add font family to config
			fontFamily: { sans: ["Inter var", "sans-serif"] },
			// add primary color
			colors: { primary: { DEFAULT: cols.violet[600], ...cols.violet } },
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
