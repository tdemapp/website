const app = {
	title: 'TDEM',
	description: 'TweetDeck Extension Manager',
};
const fullTitle = app.title + ' | ' + app.description;
const downloads = {
	chrome: 'https://chrome.google.com/webstore',
	firefox: 'https://addons.mozilla.org',
	opera: 'https://addons.opera.com',
};

export default {
	mode: 'spa',
	// Headers of the page
	head: {
		titleTemplate: '%s - ' + app.title,
		title: fullTitle,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: app.description },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
	},
	// Customize the progress-bar color
	loading: {
		color: '#fff',
		failedColor: '#f44336',
		height: '3px',
	},
	// Plugins to load before mounting the App
	plugins: ['@/plugins/aos'],
	// Nuxt.js dev-modules
	buildModules: ['@nuxtjs/vuetify'],
	// Nuxt.js modules
	modules: [
		[
			'@nuxtjs/markdownit',
			{
				injected: true,
			},
		],
		[
			'@nuxtjs/redirect-module',
			[
				{ from: '^/chrome', to: downloads.chrome, statusCode: 301 },
				{ from: '^/firefox', to: downloads.firefox, statusCode: 301 },
				{ from: '^/opera', to: downloads.opera, statusCode: 301 },
			],
		],
		[
			'@nuxtjs/robots',
			{
				UserAgent: '*',
				Disallow: '',
			},
		],
		[
			'@nuxtjs/pwa',
			{
				meta: {
					favicon: true,
					name: fullTitle,
					description: app.description,
					lang: 'en',
					theme_color: '#212121',
				},
				manifest: {
					name: app.title,
					short_name: app.title,
					description: app.description,
					lang: 'en',
					start_url: '/',
					display: 'standalone',
					orientation: 'portrait',
					background_color: '#212121',
					theme_color: '#212121',
				},
				icon: {
					sizes: [16, 128, 144, 152, 192, 256, 512],
				},
			},
		],
		'nuxt-svg-loader',
		'vue-scrollto/nuxt',
	],
	// Vuetify module configuration
	vuetify: {
		theme: {
			dark: false,
			themes: {
				light: {
					primary: '#111111',
					secondary: '#161616',
					info: '#0076FF',
					success: '#2CBE4E',
					error: '#FF0000',
				},
			},
		},
	},
};
