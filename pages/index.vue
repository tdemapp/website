<template>
	<v-layout row wrap align-center justify-center>
		<v-flex xs12 sm12 md6 lg6 xl4>
			<v-card light class="elevation-12">
				<v-card-title class="grey darken-4">
					<v-layout row wrap align-center justify-center>
						<v-avatar tile size="256px">
							<IconLogo />
						</v-avatar>
					</v-layout>

					<h1 class="ma-4 mt-4 white--text text-uppercase text-spaced text-xs-center font-weight-thin display-1">
						TweetDeck Extension Manager
					</h1>
				</v-card-title>

				<v-card-text>
					<h4 class="ma-3 mt-2 grey--text--darken-4 text-uppercase text-spaced text-xs-center font-weight-black">
						Install and manage extensions for TweetDeck
					</h4>
				</v-card-text>

				<v-card-actions>
					<v-btn flat large block color="blue">
						<IconChrome class="mr-2 icon chrome" />
						Chrome
					</v-btn>
					<v-btn flat large block color="orange darken-3">
						<IconFirefox class="mr-2 icon firefox" />
						Firefox
					</v-btn>
					<v-btn flat large block color="red">
						<IconOpera class="mr-2 icon opera" />
						Opera
					</v-btn>
				</v-card-actions>

				<v-card-actions>
					<v-btn flat large block href="https://twitter.com/nurodev">
						<IconTwitter class="mr-3" />
						Twitter
					</v-btn>
					<v-btn flat large block href="https://github.com/tdemapp">
						<IconGitHub class="mr-3" />
						GitHub
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
import IconChrome from '~/static/icons/chrome.svg';
import IconFirefox from '~/static/icons/firefox.svg';
import IconGitHub from '~/static/icons/github.svg';
import IconLogo from '~/static/logo.svg';
import IconOpera from '~/static/icons/opera.svg';
import IconTwitter from '~/static/icons/twitter.svg';

export default {
	metaInfo: {
		title: 'Home',
	},
	components: {
		IconChrome,
		IconFirefox,
		IconGitHub,
		IconLogo,
		IconOpera,
		IconTwitter,
	},
	head() {
		return {
			title: 'TDEM | TweetDeck Extension Manager',
		};
	},
};
</script>

<style scoped>
.icon {
	width: 24px;
	height: 24px;
}
.icon.chrome {
	fill: #2196f3;
}
.icon.firefox {
	fill: #ef6c00;
}
.icon.opera {
	fill: #f44336;
}
.text-spaced {
	letter-spacing: 0.2em!important;
}
</style>
