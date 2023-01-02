const title = "School Management System";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// enable takeover mode
	typescript: { shim: false },
	// add modules
	modules: ["@nuxtjs/tailwindcss"],
	// configure tailwind module
	tailwindcss: { cssPath: "@/assets/main.css" },
	// configure head
	app: {
		head: {
			title,
			// add Inter font family to project
			link: [
				{ rel: "preconnect", href: "https://rsms.me/" },
				{ rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
			],
		},
	},
});
