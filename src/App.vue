<template>
	<div class="bg-grey-50">
		<main>
			<Banner :enabled="true" />
			<Hero />
			<Features />
			<CTA />
		</main>

		<Footer />
	</div>
</template>

<script setup lang="ts">
import Banner from './components/Banner.vue';
import CTA from './components/CTA.vue';
import Features from './components/Features.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
</script>

<style lang='postcss'>
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
	@apply antialiased;
}
</style>
