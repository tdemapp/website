<template>
	<v-layout class="mt-3">
		<v-flex layout wrap xs12 align-content-space-between>
			<v-responsive height="50vh" class="grey darken-4">
				<v-layout align-center justify-space-around row wrap fill-height>
					<v-flex xs10>
						<v-card
							class="ma-3 transparent elevation-0"
							data-aos="fade-right"
							data-aos-delay="200"
						>
							<img src="/screenshot.png" width="50%" alt="Screenshot" />
						</v-card>
					</v-flex>
					<v-flex xs2>
						<v-card class="ma-3" data-aos="fade-left" data-aos-delay="200">
							<v-card-text>Hello World</v-card-text>
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
