<template>
	<v-layout align-center justify-center row wrap class="py-5 transparent" id="download">
		<v-flex xs12 md4>
			<v-container grid-list-xl>
				<v-layout row wrap align-center>
					<v-flex xs12>
						<v-card class="elevation-0 transparent">
							<v-card-text
								class="py-0 text-xs-center"
								data-aos="fade-down"
								data-aos-easing="ease-in-out-back"
							>
								<h1
									class="display-3 text-spaced header text-xs-center font-weight-black text-uppercase"
								>
									Download
								</h1>
							</v-card-text>

							<v-card-actions
								class="mx-2"
								data-aos="zoom-in"
								data-aos-delay="50"
								data-aos-easing="ease-in-out-back"
							>
								<v-btn
									large
									outline
									round
									block
									class="headerBtn"
									color="blue"
									href="https://github.com/tdemapp/manager/releases"
								>
									<IconDownload class="mr-3" />
									Chrome
								</v-btn>
							</v-card-actions>

							<v-card-actions
								class="mx-2"
								data-aos="zoom-in"
								data-aos-delay="150"
								data-aos-easing="ease-in-out-back"
							>
								<v-btn
									large
									outline
									round
									block
									class="headerBtn"
									color="deep-orange"
									href="https://github.com/tdemapp/manager/releases"
								>
									<IconDownload class="mr-3" />
									Firefox
								</v-btn>
							</v-card-actions>

							<v-card-actions
								class="mx-2"
								data-aos="zoom-in"
								data-aos-delay="250"
								data-aos-easing="ease-in-out-back"
							>
								<v-btn
									large
									outline
									round
									block
									class="headerBtn"
									color="red"
									href="https://github.com/tdemapp/manager/releases"
								>
									<IconDownload class="mr-3" />
									Opera
								</v-btn>
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
