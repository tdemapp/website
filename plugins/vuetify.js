import Vue from 'vue';
import Vuetify, {
	VApp,
	VToolbar,
	VToolbarItems,
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
	VAvatar,
	VFadeTransition,
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';

import 'vuetify/dist/vuetify.min.css';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
	components: {
		VApp,
		VToolbar,
		VToolbarItems,
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
		VAvatar,
		VFadeTransition,
	},
	directives: {
		Ripple,
	},
});
