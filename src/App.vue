<template>
	<img alt="Vue logo" src="./assets/logo.png" class="mx-auto m-8" />
	<HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
	@apply mt-64 antialiased text-center text-gray-700;
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
