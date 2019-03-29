<template>
	<!-- <v-responsive height="100%" class="transparent"> -->
		<v-layout row wrap align-center justify-center>
			<v-flex xs12 sm12 md6 lg6 xl4>
				<v-card class="transparent elevation-0">
					<v-card-text
						class="mt-4 mb-0 text-spaced text-xs-center font-weight-black headline"
						style="letter-spacing: 12px!important;"
					>
						TweetDeck Extension Manager
					</v-card-text>

					<v-card-text
						class="mt-0 mb-4 text-spaced text-xs-center font-weight-thin sub-heading"
						style="letter-spacing: 7px!important;"
					>
						Install and manage extensions for TweetDeck
					</v-card-text>

					<v-card-actions>
						<v-btn large block round class="mx-4 button chrome" color="blue">
							<IconChrome class="mr-2 icon" />
							Chrome
						</v-btn>
						<v-btn
							large
							block
							round
							class="mx-4 button firefox"
							color="orange darken-3"
						>
							<IconFirefox class="mr-2 icon" />
							Firefox
						</v-btn>
						<v-btn large block round class="mx-4 button opera" color="red">
							<IconOpera class="mr-2 icon" />
							Opera
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	<!-- </v-responsive> -->
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
	fill: #fff;
}
.button {
	-webkit-transition: all 0.25s !important;
	transition: all 0.25s !important;
	transform: translateY(0);
}
.button:hover {
	-webkit-transition: all 0.25s !important;
	transition: all 0.25s !important;
	transform: translateY(-3px);
}
.button:active {
	-webkit-transition: all 0.25s !important;
	transition: all 0.25s !important;
	transform: translateY(3px);
}
.chrome {
	background: #81ceff !important;
	background: linear-gradient(0deg, #81ceff 0%, #0065d7 100%) !important;
	background: -webkit-linear-gradient(0deg, #81ceff 0%, #0065d7 100%) !important;
}
.firefox {
	background: #ff944a !important;
	background: linear-gradient(0deg, #ff944a 0%, #ac4600 100%) !important;
	background: -webkit-linear-gradient(0deg, #ff944a 0%, #ac4600 100%) !important;
}
.opera {
	background: #ff5858 !important;
	background: linear-gradient(0deg, #ff5858 0%, #a60000 100%) !important;
	background: -webkit-linear-gradient(0deg, #ff5858 0%, #a60000 100%) !important;
}
</style>
