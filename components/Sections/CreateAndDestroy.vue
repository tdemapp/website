<template>
	<v-layout class="mt-3">
		<v-flex layout wrap xs12 align-content-space-between>
			<v-responsive height="50vh" class="grey darken-4">
				<v-layout align-center justify-space-around row wrap fill-height>
					<v-flex xs6>
						<v-card class="ma-3" data-aos="fade-right" data-aos-delay="200">
							<v-responsive height="40vh" class="black" />
						</v-card>
					</v-flex>
					<v-flex xs6>
						<v-card class="ma-3" data-aos="fade-left" data-aos-delay="200">
							<v-responsive height="40vh" class="black" />
						</v-card>
					</v-flex>
				</v-layout>
			</v-responsive>
		</v-flex>
	</v-layout>
</template>

<script>
export default {};
</script>
