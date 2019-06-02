<template>
	<section>
		<Header />
		<Dashboard />
		<Extensions />
		<Other />
		<Download />
	</section>
</template>

<script>
import Dashboard from '~/components/Sections/Dashboard';
import Download from '~/components/Sections/Download';
import Extensions from '~/components/Sections/Extensions';
import Header from '~/components/Sections/Header';
import Other from '~/components/Sections/Other';

export default {
	metaInfo: {
		title: 'Home',
	},
	components: {
		Dashboard,
		Download,
		Extensions,
		Header,
		Other,
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
