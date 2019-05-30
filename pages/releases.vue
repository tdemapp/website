<template></template>

<script>
export default {
	metaInfo: {
		title: 'FAQ',
	},
	created() {
		fetch('https://api.github.com/repos/tdemapp/manager/releases')
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
			})
			.catch((err) => {
				throw new Error(err);
			});
	},
	head() {
		return {
			title: 'TDEM | Releases',
		};
	},
};
</script>
