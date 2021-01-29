import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import { ViteSplitbee } from 'vite-plugin-splitbee';

export default defineConfig({
	plugins: [
		Pages(),
		ViteSplitbee(),
		vue(),
	],
});
