<template>
	<v-layout align-center justify-center row wrap class="py-5 transparent">
		<v-flex xs12 md10 lg8 xl6>
			<v-container grid-list-xl>
				<v-layout row wrap align-center>
					<v-flex xs12>
						<v-card
							class="transparent elevation-0"
							data-aos="fade-up"
							data-aos-delay="50"
						>
							<v-responsive height="20vh" class="grey lighten-3" />
						</v-card>
					</v-flex>
					<v-flex xs12>
						<v-card
							class="transparent elevation-0"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<v-responsive height="20vh" class="grey lighten-3" />
						</v-card>
					</v-flex>
					<v-flex xs12>
						<v-card
							class="transparent elevation-0"
							data-aos="fade-up"
							data-aos-delay="150"
						>
							<v-responsive height="20vh" class="grey lighten-3" />
						</v-card>
					</v-flex>
					<v-flex xs12>
						<v-card
							class="transparent elevation-0"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<v-responsive height="20vh" class="grey lighten-3" />
						</v-card>
					</v-flex>
					<v-flex xs12>
						<v-card
							class="transparent elevation-0"
							data-aos="fade-up"
							data-aos-delay="250"
						>
							<v-responsive height="20vh" class="grey lighten-3" />
						</v-card>
					</v-flex>
					<v-flex xs12>
						<v-card
							class="transparent elevation-0"
							data-aos="fade-up"
							data-aos-delay="300"
						>
							<v-responsive height="20vh" class="grey lighten-3" />
						</v-card>
					</v-flex>
					<v-flex xs12>
						<v-card
							class="transparent elevation-0"
							data-aos="fade-up"
							data-aos-delay="350"
						>
							<v-responsive height="20vh" class="grey lighten-3" />
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
