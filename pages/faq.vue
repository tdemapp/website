<template>
	<v-layout align-center justify-center row wrap class="py-5 transparent">
		<v-flex xs12 md10 lg8 xl6>
			<v-container grid-list-xl>
				<v-layout row wrap align-center>
					<v-flex xs12 v-for="i in 8" :key="i">
						<v-card
							class="transparent elevation-0"
							data-aos="fade-up"
							data-aos-delay="50"
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
	head() {
		return {
			title: 'TDEM | FAQ',
		};
	},
};
</script>
