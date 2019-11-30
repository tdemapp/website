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
import Dashboard from './index/dashboard';
import Download from './index/download';
import Extensions from './index/extensions';
import Header from './index/header';
import OSS from './index/oss';

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
