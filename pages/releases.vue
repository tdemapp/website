<template>
	<section class="flex flex-col items-center justify-center">
		<div
			v-if="releases === false"
			class="container flex flex-col items-center justify-center h-screen"
		>
			<IconWarning
				class="w-32 h-32 text-black dark:text-white"
				data-aos="fade-down"
				data-aos-duration="1200"
				data-aos-easing="ease-in-out-back"
			/>

			<h1
				class="my-4 text-3xl md:text-6xl font-black uppercase tracking-widest text-black dark:text-white"
				data-aos="fade-left"
				data-aos-easing="ease-in-out-back"
				data-aos-duration="1100"
			>
				No Releases Found
			</h1>
			<h3
				class="my-6 md:my-0 mx-8 md:mx-0 text-xs md:text-base text-center font-thin uppercase tracking-max text-gray-800 dark:text-gray-200"
				data-aos="fade-right"
				data-aos-easing="ease-in-out-back"
				data-aos-duration="1200"
			>
				There was an error fetching the release data from GitHub
			</h3>
		</div>

		<div v-else class="container flex flex-col items-center mt-24">
			<div v-for="(release, i) in releases" :key="i">
				<a :href="release.html_url">
					<article
						class="max-w-full md:max-w-xl p-6 md:p-16 mx-8 mb-8 md:mb-12 bg-white dark:bg-black dark:border-white dark:border-2 rounded-lg shadow-md hover:shadow-2xl animatedButton"
					>
						<div class="py-4">
							<h1
								class="text-2xl md:text-4xl mb-4 text-white block font-semibold leading-tight"
								v-text="release.tag_name"
							/>
							<hr class="mt-2 mb-4" />
							<p class="text-white" v-html="$md.render(release.body)" />
						</div>
					</article>
				</a>
			</div>
		</div>
	</section>
</template>

<script>
import IconWarning from '~/static/icons/warning.svg?inline';

export default {
	components: {
		IconWarning,
	},
	created() {
		fetch('https://api.github.com/repos/tdemapp/manager/releases')
			.then((res) => res.json())
			.then((json) => {
				if (json.length === 0) {
					this.releases = false;
				} else {
					json.forEach((el) => {
						this.releases.push(el);
					});
				}
			})
			.catch((err) => {
				this.releases = false;
				throw new Error(err);
			});
	},
	data() {
		return {
			releases: [],
		};
	},
	head() {
		return {
			title: 'TDEM | Releases',
		};
	},
};
</script>
