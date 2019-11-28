<template>
	<v-layout align-center justify-center row wrap class="transparent">
		<v-flex xs12 md10 lg8 xl6>
			<v-responsive height="100vh" class="transparent" v-if="releases === false">
				<v-layout row wrap align-center justify-center fill-height>
					<v-card class="transparent elevation-0">
						<v-toolbar flat extended class="transparent pt-4 pb-2">
							<v-spacer />
							<v-avatar
								size="192px"
								data-aos="fade-down"
								data-aos-duration="1200"
								data-aos-easing="ease-in-out-back"
							>
								<IconWarning width="128px" height="128px" />
							</v-avatar>
							<v-spacer />
						</v-toolbar>

						<v-card-text
							class="py-0"
							data-aos="fade-left"
							data-aos-duration="1100"
							data-aos-easing="ease-in-out-back"
						>
							<h1
								class="primary--text display-3 text-center font-weight-black text-uppercase"
							>
								No releases found
							</h1>
						</v-card-text>

						<v-card-text
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-easing="ease-in-out-back"
						>
							<p
								class="primary--text caption text-spaced text-center text-uppercase font-weight-thin"
							>
								There was an error fetching the
								<br />release data from GitHub
							</p>
						</v-card-text>
					</v-card>
				</v-layout>
			</v-responsive>
			<v-container grid-list-xl v-else>
				<v-layout row wrap align-center>
					<v-flex xs12 v-for="(release, i) in releases" :key="i">
						<v-card
							dark
							class="primary pa-2 elevation-9"
							data-aos="fade-up"
							:data-aos-offset="-50 * i"
						>
							<v-card-title
								primary-title
								class="headline text-spaced-button font-weight-black text-uppercase"
							>
								<span v-text="release.tag_name" />
							</v-card-title>

							<v-divider class="mx-2" />

							<v-card-text>
								<span v-html="$md.render(release.body)" />
							</v-card-text>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-flex>
	</v-layout>
</template>

<script>
import IconWarning from '~/static/icons/warning.svg';

export default {
	metaInfo: {
		title: 'FAQ',
	},
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
