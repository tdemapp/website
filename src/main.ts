import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'vite-plugin-pages/client';

import App from './App.vue';

import 'windi.css';
import 'aos/dist/aos.css';

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount('#app');
