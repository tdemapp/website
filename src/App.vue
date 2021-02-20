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

import Footer from './components/Footer.vue';

AOS.init({
	duration: 1000,
	easing: 'ease-in-out-sin',
	once: true,
});
</script>

<style lang="postcss">
#app {
	@apply antialiased;
}
</style>
