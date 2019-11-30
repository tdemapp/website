<template>
	<v-layout align-center justify-center row wrap class="transparent">
		<v-flex xs12 md10 lg8 xl6>
			<v-responsive height="100vh" class="transparent">
				<v-layout row wrap align-center justify-center fill-height>
					<v-card class="transparent elevation-0">
						<v-card-title>
							<v-spacer />
								<v-avatar tile size="128px" data-aos="fade-down" data-aos-duration="1200" data-aos-easing="ease-in-out-back">
									<IconWarning width="128px" height="128px" />
								</v-avatar>
							<v-spacer />
						</v-card-title>

						<v-card-text class="py-0" data-aos="fade-left" data-aos-duration="1100" data-aos-easing="ease-in-out-back">
							<h1 class="primary--text display-3 text-center font-weight-black text-uppercase">
								Page Not Found
							</h1>
						</v-card-text>

						<v-card-text data-aos="fade-right" data-aos-duration="1200" data-aos-easing="ease-in-out-back">
							<p class="primary--text caption text-spaced text-center text-uppercase font-weight-thin">
								The page you are looking for cannot be found.
							</p>
						</v-card-text>

						<v-card-actions data-aos="fade-up" data-aos-duration="1300" data-aos-easing="ease-in-out-back">
							<v-spacer />
							<v-btn dark large rounded text color="primary" to="/">
								<IconBack width="16px" height="16px" class="mx-4" />
								<span class="text-spaced-button text-uppercase font-weight-black mr-4">
									Go Back Home
								</span>
							</v-btn>
							<v-spacer />
						</v-card-actions>
					</v-card>
				</v-layout>
			</v-responsive>
		</v-flex>
	</v-layout>
</template>

<script>
import IconBack from '~/static/icons/back.svg';
import IconWarning from '~/static/icons/warning.svg';

export default {
	metaInfo: {
		title: 'Error',
	},
	components: {
		IconBack,
		IconWarning,
	},
	head() {
		return {
			title: 'TDEM | Error',
		};
	},
};
</script>
