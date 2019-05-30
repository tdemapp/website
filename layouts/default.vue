<template>
	<v-app>
		<v-content>
			<nuxt />
		</v-content>
		<Footer />
	</v-app>
</template>

<script>
import Footer from '~/components/Footer';

export default {
	components: {
		Footer,
	},
};
</script>

<style>
::-webkit-scrollbar {
	display: none;
}

html,
body,
.theme--light.application {
	background: #fafcff !important;
	font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif !important;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-transition: all 0.5s !important;
	transition: all 0.5s !important;
}
.v-toolbar .v-toolbar__content {
	padding: 0 !important;
}
.text-spaced-header {
	letter-spacing: 12px !important;
}
.text-spaced-sub-header {
	letter-spacing: 7px !important;
}
.text-spaced-button {
	letter-spacing: 4px !important;
}
</style>
