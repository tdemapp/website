<template>
	<v-responsive height="100vh" id="header" class="grey darken-4">
		<v-container fill-height>
			<v-layout align-center>
				<v-flex xs12 text-xs-center>
					<h1
						class="ma-3 mt-4 white--text text-uppercase text-spaced font-weight-thin display-1"
					>
						⚠️ Page not found ⚠️
					</h1>
					<h4
						class="ma-3 mt-2 white--text text-uppercase text-spaced font-weight-black"
					>
						Whoops! It seems this page does not exist.
					</h4>

					<v-btn flat large to="/">
						<v-icon left v-html="$vuetify.icons.home" />
						<IconHome class="mr-3" />
						Home
					</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
	</v-responsive>
</template>

<script>
import IconHome from '~/static/icons/home.svg';

export default {
	components: {
		IconHome,
	},
	head() {
		return {
			title: 'TDEM | Error...',
		};
	},
};
</script>

<style scoped>
	.text-spaced {
		letter-spacing: 0.2em!important;
	}
</style>
