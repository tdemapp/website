import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';
import Splitbee from 'vite-plugin-splitbee';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [
		Pages(),
		Splitbee(),
		Vue(),
	],
});
