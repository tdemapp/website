<template>
	<v-container>
		<v-row align="center" justify="center">
			<v-col
				cols="12"
				md="10"
				lg="8"
				xl="6"
				v-for="(question, i) in questions"
				:key="i"
				data-aos="fade-up"
				:data-aos-delay="i * 100"
				:data-aos-offset="-50 * i"
			>
				<v-card dark class="primary pa-2 elevation-9">
					<v-card-title primary-title>
						<span class="display-1 mr-3" v-text="question.emoji" />
						<span
							class="headline font-weight-black text-uppercase"
							v-text="question.title"
						/>
					</v-card-title>

					<v-divider class="mx-2" />

					<v-card-text>
						<span class="body-1" v-html="$md.render(question.body)" />
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	metaInfo: {
		title: 'FAQ',
	},
	data() {
		return {
			questions: [
				{
					emoji: '❓',
					title: 'What is TDEM',
					body:
						"TDEM (TweetDeck Extension Manager) is a browser extension designed to provide a simple and easy way to install and manage extensions to enhance Twitter's TweetDeck client.",
				},
				{
					emoji: '🏗',
					title: 'How does it work',
					body:
						'TDEM is build using a fork of the TD.Extensions specification built by the DeckHack team. ❤️ HUGE thanks to them for their work on creating the specification.',
				},
				{
					emoji: '🤝',
					title: 'Are you affiliated with Twitter',
					body:
						'**NO**. TDEM is in no way allifiated with Twitter or TweetDeck in anyway. ',
				},
				{
					emoji: '️💎',
					title: 'Is TDEM Free',
					body: '**YES**. TDEM is 100% free and open source and always will be.',
				},
				{
					emoji: '📦',
					title: 'How do I make an extension',
					body:
						'Anyone can create an extension for TDEM. You can find both a JavaScript and a TypeScript template to build an extension on our GitHub. We also provide multiple example extensions you can use as reference to help create your own extension',
				},
				{
					emoji: '🔥',
					title: "An extension isn't working, what do I do",
					body:
						'TweetDeck can often make changes that can result in extensions breaking/not working as intended. We recommend first checking your TweetDeck console to try and narrow down the extension causing the issues. From there we recommend contacting the author of the extension to let them investogate the issue and if need be release an updated version.',
				},
				{
					emoji: '⬇️',
					title: 'Where can I download extensions from',
					body:
						'TDEM offers a built in "Store" that is connected to our public extension repository and offers a simple and easy way to download and install verified extensions.',
				},
				{
					emoji: '⚠️',
					title: 'Can I install extensions from a 3rd party',
					body:
						'We do offer the ability to download extensions via a url, however this method is highly discouraged unless you know what you are doing. Downloading and installing 3rd party extensions means that they have most likely not been verified by the community and as such could be malicious. If you do want to install a 3rd party extension we recommend reviewing the source code for the extension first before installing it to be safe.',
				},
			],
		};
	},
	head() {
		return {
			title: 'TDEM | FAQ',
		};
	},
};
</script>
