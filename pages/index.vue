<template>
	<section>
		<Header />
		<Dashboard />
		<Api />
		<Other />
		<Download />
	</section>
</template>

<script>
import Api from '~/components/Sections/Api';
import Dashboard from '~/components/Sections/Dashboard';
import Download from '~/components/Sections/Download';
import Header from '~/components/Sections/Header';
import Other from '~/components/Sections/Other';

export default {
	metaInfo: {
		title: 'Home',
	},
	components: {
		Api,
		Dashboard,
		Download,
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
