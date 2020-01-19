const title = 'TDEM';
const description = 'TweetDeck Extension Manager';
const titleConcat = title + ' | ' + description;
const downloads = {
	chrome: 'https://chrome.google.com/webstore',
	firefox: 'https://addons.mozilla.org',
	opera: 'https://addons.opera.com',
};

export default {
	mode: 'spa',

	// Headers of the page
	head: {
		title: titleConcat,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: description },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
	},

	//  Customize the progress-bar color
	loading: {
		color: '#ffffff',
		failedColor: '#f44336',
		height: '3px',
	},

	// Plugins to load before mounting the App
	plugins: [{
		src: "@/plugins/aos",
		ssr: false
	}],

	// Nuxt.js dev-modules
	buildModules: ['@nuxtjs/tailwindcss'],

	// Nuxt.js modules
	modules: [
		['@nuxtjs/markdownit', { injected: true }],
		[
			'@nuxtjs/redirect-module',
			[
				{ from: '^/chrome', to: downloads.chrome, statusCode: 301 },
				{ from: '^/firefox', to: downloads.firefox, statusCode: 301 },
				{ from: '^/opera', to: downloads.opera, statusCode: 301 },
			],
		],
		[
			'@nuxtjs/pwa',
			{
				meta: {
					favicon: true,
					name: titleConcat,
					description: description,
					lang: 'en',
					theme_color: '#212121',
				},
				manifest: {
					name: title,
					short_name: title,
					description: description,
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
		[
			'@nuxtjs/robots',
			{
				UserAgent: '*',
				Disallow: '',
			},
		],
		'@nuxtjs/svg',
	],
};
