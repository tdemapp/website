<template>
	<v-layout align-center justify-center row wrap class="transparent">
		<v-flex xs12 md10 lg8 xl6>
			<v-container grid-list-xl>
				<v-layout row wrap align-center>

					<v-flex xs12 v-for="(release, i) in releases" :key='i'>
						<v-card
							dark
							class="primary pa-2 elevation-9"
							data-aos="fade-up"
							:data-aos-offset="-50 * i"
						>
							<v-card-title primary-title class="display-1 text-spaced-button text-xs-center font-weight-black text-uppercase">
								<span v-text="release.tag_name" />
							</v-card-title>
							
							<v-divider class='mx-2' />

							<v-card-text v-html='$md.render(release.body)' />
						</v-card>
					</v-flex>

				</v-layout>
			</v-container>
		</v-flex>
	</v-layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'FAQ',
	},
	created () {
		fetch('https://api.github.com/repos/tdemapp/manager/releases')
		.then(res => res.json())
		.then(json => {
			json.forEach(el => {
				this.releases.push(el)
			});
		})
		.catch(err => {
			throw new Error(err)
		})
	},
	data () {
		return {
			releases: [],
		}
	},
	head() {
		return {
			title: 'TDEM | Releases',
		};
	},
};
</script>
