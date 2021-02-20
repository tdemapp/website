import { defineConfig } from 'vite';
import Components from 'vite-plugin-components'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons';
import Pages from 'vite-plugin-pages';
import Splitbee from 'vite-plugin-splitbee';
import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

import colors from 'windicss/colors';

export default defineConfig({
	plugins: [
		Components({
			customComponentResolvers: ViteIconsResolver({
				componentPrefix: '',
			}),
		}),
		Icons(),
		Pages(),
		Splitbee(),
		Vue(),
		WindiCSS({
			config: {
				darkMode: 'class',
				plugins: [
					require('windicss/plugin/aspect-ratio'),
					require('windicss/plugin/forms'),
				],
				theme: {
					extend: {
						colors: {
							primary: colors.lightBlue,
							rose: colors.rose,
						}
					},
				},
			},
		}),
	],
});
