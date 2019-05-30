<template>
	<section>
		<Header />
		<Dashboard />
		<Other />
		<CreateAndDestroy />
		<Download />
	</section>
</template>

<script>
import CreateAndDestroy from '~/components/Sections/CreateAndDestroy';
import Dashboard from '~/components/Sections/Dashboard';
import Download from '~/components/Sections/Download';
import Header from '~/components/Sections/Header';
import Other from '~/components/Sections/Other';

export default {
	metaInfo: {
		title: 'Home',
	},
	components: {
		CreateAndDestroy,
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
