const downloadUrls = {
	chrome: 'https://chrome.google.com/webstore',
	firefox: 'https://addons.mozilla.org',
	opera: 'https://addons.opera.com',
};

module.exports = {
	mode: 'spa',

	// Headers of the page
	head: {
		title: 'TDEM | TweetDeck Extension Manager',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'TweetDeck Extension Manager' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
	},

	// Customize the progress-bar color
	loading: {
		color: '#ffffff',
		failedColor: '#f44336',
		height: '3px',
	},

	// Nuxt PWA module
	meta: {
		favicon: true,
		name: 'TDEM | TweetDeck Extension Manager',
		description: 'TweetDeck Extension Manager',
		lang: 'en',
		theme_color: '#212121',
	},

	// Manifest data
	manifest: {
		name: 'TDEM',
		short_name: 'TDEM',
		description: 'TweetDeck Extension Manager',
		lang: 'en',
		start_url: '/',
		display: 'standalone',
		orientation: 'portrait',
		background_color: '#212121',
		theme_color: '#212121',
	},

	// Icon sizes to generate
	icon: {
		sizes: [16, 128, 144, 152, 192, 256, 512],
	},

	// Nuxt Robots modules
	robots: [
		{
			UserAgent: '*',
			Disallow: '',
		},
	],
	// Nuxt Markdown parser
	markdownit: {
		injected: true,
	},

	// URL redirects
	redirect: [
		{ from: '^/chrome', to: downloadUrls.chrome, statusCode: 301 },
		{ from: '^/firefox', to: downloadUrls.firefox, statusCode: 301 },
		{ from: '^/opera', to: downloadUrls.opera, statusCode: 301 },
	],

	// Global CSS
	css: ['~/assets/style/app.styl'],

	// Plugins to load before mounting the App
	plugins: ['@/plugins/vuetify', '@/plugins/aos'],

	// Nuxt.js modules
	modules: [
		'@nuxtjs/markdownit',
		'@nuxtjs/redirect-module',
		'@nuxtjs/robots',
		'@nuxtjs/pwa',
		'svg-to-vue-component/nuxt',
		'vue-scrollto/nuxt',
	],

	// Build configuration
	build: {
		// You can extend webpack config here
		extend(config, ctx) {},
	},
};
