<template>
	<v-app dark>
		<AppToolbar />
		<v-content class="transparent">
			<v-container fluid fill-height>
				<nuxt />
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import AppToolbar from '~/components/AppToolbar';

export default {
	name: 'App',
	components: {
		AppToolbar,
	},
};
</script>

<style>
::-webkit-scrollbar {
	display: none;
}

html,
body,
.theme--dark.application {
	background: #202020 !important;
	background: radial-gradient(circle at top, #343434 0%, #000000 100%) !important;
	background: -webkit-radial-gradient(circle at top, #343434 0%, #000000 100%) !important;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-transition: all 0.5s !important;
	transition: all 0.5s !important;
}
</style>
