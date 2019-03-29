<template>
	<v-toolbar flat class="elevation-0 transparent">
		<v-spacer />

		<v-toolbar-title class="headline font-weight-black text-capitalize text-spaced grey--text">
			TDEM
		</v-toolbar-title>

		<v-spacer />

		<v-btn flat icon large href="https://twitter.com/nurodev">
			<IconTwitter class="icon grey--text" />
		</v-btn>
		<v-btn flat icon large href="https://github.com/tdemapp">
			<IconGitHub class="icon grey--text" />
		</v-btn>

		<v-spacer />
	</v-toolbar>
</template>

<script>
import IconGitHub from '~/static/icons/github.svg';
import IconTwitter from '~/static/icons/twitter.svg';

export default {
	components: {
		IconGitHub,
		IconTwitter,
	},
};
</script>

<style scoped>
.icon {
	width: 24px;
	height: 24px;
}
.text-spaced {
	letter-spacing: 1em !important;
}
.headline {
	font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
}
</style>
