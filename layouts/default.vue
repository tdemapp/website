<template>
	<v-app>
		<v-content>
			<v-container fluid class="pa-0">
				<nuxt />
			</v-container>
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
.theme--light.v-application {
	background: #fafcff !important;
	font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif !important;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-transition: all 0.5s !important;
	transition: all 0.5s !important;
}
.v-toolbar .v-toolbar__content,
.v-footer {
	padding: 0 !important;
}
.v-application .display-3 {
	font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif !important;
}
.v-application .caption,
.text-spaced-button {
	letter-spacing: 4px !important;
}
.theme--dark.v-card > .v-card__text {
	color: #FFFFFF!important;
}
.theme--light.v-card > .v-card__text {
	color: #111111!important;
}

.text-spaced {
	letter-spacing: 7px !important;
}
.angle {
	margin-top: 10vh;
	margin-bottom: 15vh;
}
.angle::before,
.angle::after {
	position: absolute;
	content: '';
	width: 100%;
	height: 15vh;
	background-color: #111111;
	transform-origin: top left;
	transform: skewY(-3deg);
}
</style>
