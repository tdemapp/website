<template>
	<section>
		<Header />
		<Dashboard />
		<Other />
		<Api />
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
