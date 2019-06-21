import Vue from 'vue';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
	theme: {
		primary: '#111111',
		secondary: '#161616',
		info: '#0076FF',
		success: '#2CBE4E',
		error: '#FF0000',
	},
});
