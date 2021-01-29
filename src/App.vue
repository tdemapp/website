<template>
	<div class="bg-grey-50">
		<main>
			<router-view />
		</main>
		<Footer />
	</div>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue';
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
	@apply antialiased;
}
</style>
