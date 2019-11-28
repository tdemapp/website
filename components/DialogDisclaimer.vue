<template>
	<div>
		<v-btn dark text @click="dialog = true">
			<IconInfo width="16px" class="mr-2" />
			<span class="caption text-spaced-button text-uppercase">Disclaimer</span>
		</v-btn>

		<v-dialog v-model="dialog" max-width="490">
			<v-card light>
				<v-toolbar flat dark color="primary">
					<v-card-title>
						<IconInfo class="mr-2" />
						<h1 class="text-spaced text-uppercase font-weight-black ml-2">
							Disclaimer
						</h1>
					</v-card-title>

					<v-spacer />

					<v-toolbar-items class="hidden-sm-and-down">
						<v-btn text @click="dialog = false">
							<IconClose />
						</v-btn>
					</v-toolbar-items>
				</v-toolbar>

				<v-card-text class="mb-1 mt-4">
					<span class="primary--text font-weight-thin">
						TDEM is <strong>NOT</strong> affiliated with Twitter or TweetDeck in any
						way.
					</span>
				</v-card-text>

				<v-divider class="mx-2" />

				<v-card-text class="mt-4">
					<span class="primary--text font-weight-thin">
						TDEM uses the
						<a
							href="https://github.com/DeckHack/TD.extensions"
							alt="TD.Extensions"
							aria-label="TD.Extensions"
						>
							TD.extensions specification
						</a>
						which creates a system for code injection into TweetDeck.
						<br />
						As such please do take care when installing extensions and
						<strong class="font-weight-black">NEVER</strong> install anything that has
						not been verifed or anything that looks suspicious/malicious.
					</span>
				</v-card-text>

				<v-card-actions>
					<v-btn text large block color="primary" @click="dialog = false">
						<IconCheck class="mr-3" />
						I understand
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import IconCheck from '~/static/icons/check.svg';
import IconClose from '~/static/icons/close.svg';
import IconInfo from '~/static/icons/info.svg';

export default {
	components: {
		IconCheck,
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
