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
.text-spaced {
	letter-spacing: 7px !important;
}
.text-spaced-button {
	letter-spacing: 4px !important;
}

.sectionAngle {
	margin-top: 10vh;
	margin-bottom: 10vh;
}
.sectionAngle::before,
.sectionAngle::after {
	position: absolute;
	content: "";
	width: 100%;
	height: 100px;
	background-color: #111111;
	transform-origin: top left;
	transform: skewY(-3deg);
}
</style>
