<template>
	<v-layout align-center row wrap class="py-5 grey darken-4">
		<v-flex xs12>
			<v-container grid-list-xl>
				<v-layout row wrap align-center>
					<v-flex xs12 md8>
						<v-card
							class="ma-3 transparent elevation-0"
							data-aos="fade-right"
							data-aos-delay="200"
						>
							<v-responsive height="40vh" class="grey darken-3" />
						</v-card>
					</v-flex>
					<v-flex xs12 md4>
						<v-card dark class="elevation-0 transparent" data-aos="fade-left">
							<v-card-text primary-title class="text-xs-center">
								<IconDashboard width="64px" height="64px" />
								<div
									class="display-3 text-xs-center font-weight-black text-uppercase my-2"
								>
									Dashboard
								</div>
								<div
									class="caption text-spaced text-xs-center text-uppercase font-weight-thin"
								>
									Section subheading text goes here
								</div>
							</v-card-text>
							<v-card-text>
								Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat
								tincidunt ornare. Pellentesque habitant morbi tristique senectus et
								netus et malesuada fames ac turpis egestas. Nullam in aliquet odio.
								Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
							</v-card-text>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-flex>
	</v-layout>
</template>

<script>
import IconDashboard from '~/static/icons/dashboard.svg';

export default {
	components: {
		IconDashboard,
	},
};
</script>
