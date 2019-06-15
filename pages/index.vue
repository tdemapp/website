<template>
	<section>
		<Header />
		<Dashboard />
		<Extensions />
		<OSS />
		<Download />
	</section>
</template>

<script>
import Dashboard from '~/components/Sections/Dashboard';
import Download from '~/components/Sections/Download';
import Extensions from '~/components/Sections/Extensions';
import Header from '~/components/Sections/Header';
import OSS from '~/components/Sections/OSS';

export default {
	metaInfo: {
		title: 'Home',
	},
	components: {
		Dashboard,
		Download,
		Extensions,
		Header,
		OSS,
	},
	head() {
		return {
			title: 'TDEM | TweetDeck Extension Manager',
		};
	},
};
</script>

<style>
.display-3 {
	font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif !important;
	font-size: 64px !important;
}
</style>
