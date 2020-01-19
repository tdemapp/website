<template>
	<nav class="fixed flex flex-row flex-wrap items-center justify-center w-full bg-transparent">
		<div class="container flex flex-row flex-wrap items-end justify-end p-4">
			<n-link prefetch to="/">
				<Icon class="w-10 h-10 text-black dark:text-white animatedButton" />
			</n-link>

			<div class="flex-grow" />

			<n-link
				prefetch
				to="/faq"
				aria-label="FAQ"
				class="m-2 mx-8 text-black dark:text-white animatedButton"
			>
				<IconFAQ />
			</n-link>
			<n-link
				prefetch
				to="/releases"
				aria-label="Releases"
				class="m-2 mx-8 text-black dark:text-white animatedButton"
			>
				<IconReleaseNotes />
			</n-link>
			<a
				href="https://github.com/tdemapp"
				aria-label="GitHub"
				class="m-2 mx-8 text-black dark:text-white animatedButton"
			>
				<IconGitHub />
			</a>
			<a
				href="https://twitter.com/nurodev"
				aria-label="Twitter"
				class="m-2 mx-8 text-black dark:text-white animatedButton"
			>
				<IconTwitter />
			</a>
		</div>
	</nav>
</template>

<script>
import Icon from '~/static/icon.svg?inline';
import IconFAQ from '~/static/icons/faq.svg?inline';
import IconGitHub from '~/static/icons/github.svg?inline';
import IconReleaseNotes from '~/static/icons/release_notes.svg?inline';
import IconTwitter from '~/static/icons/twitter.svg?inline';

export default {
	components: {
		Icon,
		IconFAQ,
		IconGitHub,
		IconReleaseNotes,
		IconTwitter,
	},
};
</script>
