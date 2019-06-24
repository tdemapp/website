import Vue from 'vue';
import Vuetify, {
	VApp,
	VAvatar,
	VBtn,
	VCard,
	VCardActions,
	VCardTitle,
	VCardText,
	VContent,
	VContainer,
	VDialog,
	VDivider,
	VFlex,
	VFooter,
	VLayout,
	VResponsive,
	VSpacer,
	VToolbar,
	VToolbarItems,
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';

import 'vuetify/dist/vuetify.min.css';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
	components: {
		VApp,
		VAvatar,
		VBtn,
		VCard,
		VCardActions,
		VCardTitle,
		VCardText,
		VContent,
		VContainer,
		VDialog,
		VDivider,
		VFlex,
		VFooter,
		VLayout,
		VResponsive,
		VSpacer,
		VToolbar,
		VToolbarItems,
	},
	directives: {
		Ripple,
	},
	theme: {
		primary: '#111111',
		secondary: '#161616',
		info: '#0076FF',
		success: '#2CBE4E',
		error: '#FF0000',
	},
});
