<template>
	<v-footer dark height="auto">
		<v-card flat tile class="flex my-0 py-0">
			<v-card-title class="primary">
				<v-spacer />

				<v-btn dark flat large round to="/" aria-label="Home">
					<IconHome />
				</v-btn>
				<v-btn dark flat large round to="/faq" aria-label="FAQ">
					<IconFAQ />
				</v-btn>
				<v-btn dark flat large round to="/releases" aria-label="Releases">
					<IconReleaseNotes />
				</v-btn>
				<v-btn dark flat large round href="https://github.com/tdemapp" aria-label="GitHub">
					<IconGitHub />
				</v-btn>
				<v-btn
					dark
					flat
					large
					round
					href="https://twitter.com/nurodev"
					aria-label="Twitter"
				>
					<IconTwitter />
				</v-btn>

				<v-spacer />
			</v-card-title>

			<v-card-actions class="black justify-center">
				<DialogDisclaimer />

				<v-spacer />&copy;2019 —
				<strong>TDEM</strong>
			</v-card-actions>
		</v-card>
	</v-footer>
</template>

<script>
import IconFAQ from '~/static/icons/faq.svg';
import IconGitHub from '~/static/icons/github.svg';
import IconHome from '~/static/icons/home.svg';
import IconReleaseNotes from '~/static/icons/release_notes.svg';
import IconTwitter from '~/static/icons/twitter.svg';

import DialogDisclaimer from '~/components/DialogDisclaimer';

export default {
	components: {
		DialogDisclaimer,
		IconFAQ,
		IconGitHub,
		IconHome,
		IconReleaseNotes,
		IconTwitter,
	},
};
</script>

<style></style>
