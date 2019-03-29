import Vue from 'vue';
import Vuetify, {
	VApp,
	VToolbar,
	VToolbarItems,
	VToolbarTitle,
	VBtn,
	VCard,
	VCardActions,
	VCardTitle,
	VCardText,
	VSpacer,
	VContent,
	VResponsive,
	VContainer,
	VLayout,
	VFlex,
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';

import 'vuetify/dist/vuetify.min.css';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
	components: {
		VApp,
		VToolbar,
		VToolbarItems,
		VToolbarTitle,
		VBtn,
		VCard,
		VCardActions,
		VCardTitle,
		VCardText,
		VSpacer,
		VContent,
		VResponsive,
		VContainer,
		VLayout,
		VFlex,
	},
	directives: {
		Ripple,
	},
});
