<template>
	<main>
		<Navbar />
		<nuxt />
	</main>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
	components: {
		Navbar,
	},
};
</script>

<style lang="stylus">
* {
	transition: all 0.25s;
	&::selection {
		@apply bg-gray-500 text-white;
	}
}

html {
	@apply antialiased font-sans;
}

body {
  background-position: 0 0, 32px 32px;
  background-attachment: fixed;
  background-size: 64px 64px;
}

.tracking-max {
	letter-spacing: 7px;
}

.animatedButton {
	transform: translateY(0);
	&:hover {
		transform: translateY(-4px);
	}
	&:active {
		transform: translateY(4px);
	}
	&:focus {
		border: none;
	}
}

@media(prefers-color-scheme: light) {
	html {
		@apply bg-white;
	}
	body {
		background-image: radial-gradient(#ccc 1px, transparent 1px), radial-gradient(#ccc 1px, transparent 1px);
	}
}

@media(prefers-color-scheme: dark) {
	html {
		@apply bg-black;
	}
	body {
		background-image: radial-gradient(#222 1px, transparent 1px), radial-gradient(#222 1px, transparent 1px);
	}
}
</style>
