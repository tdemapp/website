<template>
	<v-container fluid fill-height>
		<v-responsive height="100vh" class="transparent">
			<v-layout row wrap align-center justify-center fill-height>
				<v-card class="transparent elevation-0">
					<v-card-text class="py-0" data-aos="slide-left">
						<h1 class="header text-xs-center font-weight-black text-uppercase">
							Extend your deck
						</h1>
					</v-card-text>

					<v-card-text class="py-0" data-aos="slide-right">
						<p
							class="subHeader text-spaced-sub-header text-xs-center text-uppercase font-weight-thin"
						>
							Install and manage extensions for TweetDeck
						</p>
					</v-card-text>

					<v-card-actions data-aos="zoom-in">
						<v-btn dark large block round depressed class="mx-4 headerBtn">
							<span class="text-spaced-button text-uppercase font-weight-black"
								>Download</span
							>
						</v-btn>
						<v-btn
							flat
							large
							block
							round
							class="mx-4 headerBtn githubBtn"
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
.githubBtn {
	border: 2px solid #212121;
}
.header {
	font-size: 64px;
}
.subHeader {
	font-size: 12px;
}
</style>
