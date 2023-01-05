const title = "School Management System";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// add css files
	css: ["@/assets/main.scss"],
	// enable takeover mode
	typescript: { shim: false },
	// add modules
	modules: [
		"@nuxtjs/tailwindcss",
		"nuxt-icon",
		"@morev/vue-transitions/nuxt",
		"@vueuse/nuxt",
		"@nuxtjs/strapi",
		"nuxt-headlessui",
	],
	// configure tailwind module
	tailwindcss: { cssPath: "@/assets/main.css" },
	// configutr headluess ui module
	headlessui: {
		prefix: "H",
	},
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
	// starpi config
	strapi: {
		cookie: {
			maxAge: 60 * 60 * 24 * 30,
		},
	},
});
