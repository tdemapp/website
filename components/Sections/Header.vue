<template>
	<v-container fluid fill-height>
		<v-responsive height="100vh" class="transparent">
			<v-layout row wrap align-center justify-center fill-height>
				<v-card class="transparent elevation-0">
					<v-toolbar flat extended class='transparent pt-4 pb-2'>
						<v-spacer />
						<v-avatar size="192px" data-aos="fade-down" data-aos-duration="1200" data-aos-easing="ease-in-out-back">
							<img src="/icon.svg" alt="Logo">
						</v-avatar>
						<v-spacer />
					</v-toolbar>

					<v-card-text class="py-0" data-aos="fade-left" data-aos-duration="1200" data-aos-easing="ease-in-out-back">
						<h1 class="header text-xs-center font-weight-black text-uppercase">
							Extend your deck
						</h1>
					</v-card-text>

					<v-card-text class="py-0" data-aos="fade-right" data-aos-duration="1200" data-aos-easing="ease-in-out-back">
						<p
							class="subHeader text-spaced-sub-header text-xs-center text-uppercase font-weight-thin"
						>
							Install and manage extensions for TweetDeck
						</p>
					</v-card-text>

					<v-card-actions data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-out-back">
						<v-btn dark large block round depressed class="mx-4 headerBtn" v-scroll-to="{el: '#download',duration: 1000,easing: 'ease-in-out'}">
							<span class="text-spaced-button text-uppercase font-weight-black"
								>Download</span
							>
						</v-btn>
						<v-btn
							flat
							large
							block
							round
							outline
							class="mx-4 headerBtn"
							href="https://github.com/tdemapp"
							aria-label="GitHub"
						>
							<span class="text-spaced-button text-uppercase font-weight-black"
								>GitHub</span
							>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-layout>
		</v-responsive>
	</v-container>
</template>

<script>
export default {};
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
.header {
	font-size: 64px;
}
.subHeader {
	font-size: 12px;
}
</style>
