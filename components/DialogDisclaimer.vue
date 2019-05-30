<template>
	<div>
		<v-btn dark flat @click="dialog = true">
			<IconInfo width="16px" class="mr-2" />
			<span class="caption text-spaced-button text-uppercase">Disclaimer</span>
		</v-btn>

		<v-dialog v-model="dialog" max-width="490">
			<v-card light>
				<v-toolbar flat dark color="grey darken-4">
					<v-card-title>
						<IconInfo class="mr-2" />
						<h1 class="text-spaced-header text-uppercase font-weight-black ml-2">
							Disclaimer
						</h1>
					</v-card-title>

					<v-spacer />

					<v-toolbar-items class="hidden-sm-and-down">
						<v-btn flat class="squareCorners" @click="dialog = false">
							<IconClose />
						</v-btn>
					</v-toolbar-items>
				</v-toolbar>

				<v-card-text>
					TDEM uses the <a href="https://github.com/DeckHack/TD.extensions" alt="TD.Extensions" aria-label="TD.Extensions">TD.extensions specification</a> which creates a system for code injection into TweetDeck.
					As such please do take care when installing extensions and NEVER install anything that could be seen as malicious.
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import IconClose from '~/static/icons/close.svg';
import IconInfo from '~/static/icons/info.svg';

export default {
	components: {
		IconClose,
		IconInfo,
	},
	data() {
		return {
			dialog: false,
		};
	},
};
</script>
