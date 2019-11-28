<template>
	<v-responsive height="100vh" class="transparent">
		<v-container class="fill-height" fluid>
			<v-row align="center" justify="center">
				<v-card class="transparent elevation-0">
					<v-card-title>
						<v-spacer />
						<v-avatar
							size="192px"
							data-aos="fade-down"
							data-aos-duration="1200"
							data-aos-easing="ease-in-out-back"
						>
							<Logo alt="Logo" />
						</v-avatar>
						<v-spacer />
					</v-card-title>

					<v-card-text
						class="py-0"
						data-aos="fade-left"
						data-aos-duration="1100"
						data-aos-easing="ease-in-out-back"
					>
						<h1
							class="primary--text display-3 text-center font-weight-black text-uppercase"
						>
							Extend your deck
						</h1>
					</v-card-text>

					<v-card-text
						class="py-0"
						data-aos="fade-right"
						data-aos-duration="1200"
						data-aos-easing="ease-in-out-back"
					>
						<p
							class="primary--text caption text-spaced text-center text-uppercase font-weight-thin"
						>
							Install and manage extensions for TweetDeck
						</p>
					</v-card-text>

					<v-card-actions>
						<div
							data-aos="fade-up"
							data-aos-duration="1300"
							data-aos-easing="ease-in-out-back"
							class="flex mx-4"
						>
							<v-btn
								dark
								large
								block
								rounded
								depressed
								color="primary"
								class="headerBtn"
								v-scroll-to="{
									el: '#download',
									duration: 1000,
									easing: 'ease-in-out',
								}"
							>
								<span class="text-spaced-button text-uppercase font-weight-black"
									>Download</span
								>
							</v-btn>
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1500"
							data-aos-easing="ease-in-out-back"
							class="flex mx-4"
						>
							<v-btn
								text
								large
								block
								rounded
								outlined
								color="primary"
								class="headerBtn"
								href="https://github.com/tdemapp"
								aria-label="GitHub"
							>
								<span class="text-spaced-button text-uppercase font-weight-black"
									>GitHub</span
								>
							</v-btn>
						</div>
					</v-card-actions>
				</v-card>
			</v-row>
		</v-container>
	</v-responsive>
</template>

<script>
import Logo from '~/static/icon.svg';

export default {
	components: {
		Logo,
	},
};
</script>

<style>
.headerBtn {
	-webkit-transition: all 0.25s !important;
	transition: all 0.25s !important;
	transform: translateY(0);
}
.headerBtn:hover {
	-webkit-transition: all 0.25s !important;
	transition: all 0.25s !important;
	transform: translateY(-3px);
}
.headerBtn:active {
	-webkit-transition: all 0.25s !important;
	transition: all 0.25s !important;
	transform: translateY(3px);
}
</style>
