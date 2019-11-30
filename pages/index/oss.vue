<template>
	<Section dark id="oss">
		<template slot="content">
			<v-flex xs12 sm12 md8>
				<v-card
					class="ma-3 transparent elevation-0"
					data-aos="fade-right"
					data-aos-delay="200"
				>
					<v-responsive height="40vh" class="grey darken-4" />
				</v-card>
			</v-flex>
			<v-flex xs12 sm12 md4>
				<v-card dark class="elevation-0 transparent" data-aos="fade-left">
					<v-card-text primary-title class="text-center">
						<IconOSS width="64px" height="64px" />
						<div class="display-3 text-center font-weight-black text-uppercase">
							Open Source
						</div>
						<div
							class="caption text-spaced text-center text-uppercase font-weight-thin"
						>
							Section subheading text goes here
						</div>
					</v-card-text>
					<v-card-text>
						Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt
						ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada
						fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus
						bibendum tincidunt. Suspendisse potenti.
					</v-card-text>
				</v-card>
			</v-flex>
		</template>
	</Section>
</template>

<script>
import IconOSS from '~/static/icons/oss.svg';
import Section from '~/components/Section';

export default {
	components: {
		IconOSS,
		Section,
	},
};
</script>
