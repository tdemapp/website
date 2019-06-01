<template>
	<v-layout align-center column wrap class="py-5 transparent" id="download">
		<v-flex xs12>
			<v-container grid-list-xl>
				<v-layout row wrap align-center>
					<v-flex xs12>
						<v-card class="elevation-0 transparent">
							<v-card-text
								class="py-0"
								data-aos="fade-down"
								data-aos-easing="ease-in-out-back"
							>
								<h1
									class="text-spaced-header header text-xs-center font-weight-black text-uppercase"
								>
									Download
								</h1>
							</v-card-text>

							<v-card-actions>
								<div
									class="mx-2"
									data-aos="zoom-in"
									data-aos-delay="50"
									data-aos-easing="ease-in-out-back"
								>
									<v-btn
										large
										outline
										round
										class="headerBtn"
										color="blue"
										href="https://github.com/tdemapp/manager/releases"
									>
										<IconDownload class="mr-3" />
										Chrome
									</v-btn>
								</div>

								<div
									class="mx-2"
									data-aos="zoom-in"
									data-aos-delay="150"
									data-aos-easing="ease-in-out-back"
								>
									<v-btn
										large
										outline
										round
										class="headerBtn"
										color="deep-orange"
										href="https://github.com/tdemapp/manager/releases"
									>
										<IconDownload class="mr-3" />
										Firefox
									</v-btn>
								</div>

								<div
									class="mx-2"
									data-aos="zoom-in"
									data-aos-delay="250"
									data-aos-easing="ease-in-out-back"
								>
									<v-btn
										large
										outline
										round
										class="headerBtn"
										color="red"
										href="https://github.com/tdemapp/manager/releases"
									>
										<IconDownload class="mr-3" />
										Opera
									</v-btn>
								</div>
							</v-card-actions>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-flex>
	</v-layout>
</template>

<script>
import IconDownload from '~/static/icons/download.svg';

export default {
	components: {
		IconDownload,
	},
};
</script>
