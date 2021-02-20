<template>
	<div class="bg-grey-50">
		<main>
			<router-view />
		</main>
		<Footer />
	</div>
</template>

<script setup lang="ts">
import AOS from 'aos';
import splitbee from '@splitbee/web';

import Footer from './components/Footer.vue';

AOS.init({
	duration: 1000,
	easing: 'ease-in-out-sin',
	once: true,
});

splitbee.init({
	disableCookie: true,
});
</script>

<style lang="postcss">
#app {
	@apply antialiased;
}
</style>
