<template>
	<v-layout align-center column wrap class="py-5 transparent">
		<v-flex xs12>
			<v-container grid-list-xl>
				<v-layout row wrap align-center>
					<v-flex xs12 md4>
						<v-card class="elevation-0 transparent" data-aos="fade-right">
							<v-card-text primary-title class="text-xs-center">
								<IconOther width="64px" height="64px" />
								<div
									class="header text-spaced-sub-header text-xs-center text-uppercase font-weight-thin"
								>
									Other
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
					<v-flex xs12 md8>
						<v-card
							class="ma-3 transparent elevation-0"
							data-aos="fade-left"
							data-aos-delay="200"
						>
							<v-responsive height="40vh" class="grey lighten-3" />
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-flex>
	</v-layout>
</template>

<script>
import IconOther from '~/static/icons/other.svg';

export default {
	components: {
		IconOther,
	},
};
</script>
