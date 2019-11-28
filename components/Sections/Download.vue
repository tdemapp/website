<template>
	<section id="download">
		<v-container class="grey lighten-5">
			<v-row
				align="center"
				justify="center"
				class="ma-4"
				data-aos="fade-down"
				data-aos-easing="ease-in-out-back"
			>
				<h1
					class="primary--text display-3 text-spaced header text-center font-weight-black text-uppercase"
				>
					Download
				</h1>
			</v-row>
			<v-row align="center" justify="center">
				<v-col
					cols="12"
					sm="8"
					md="3"
					lg="2"
					class="ma-4"
					data-aos="zoom-in"
					data-aos-easing="ease-in-out-back"
					data-aos-delay="100"
				>
					<v-card dark href="/chrome" class="elevation-0 blue darken-2 downloadCard">
						<v-img class="blue">
							<v-card-title class="py-3">
								<v-spacer />
								<IconDownload class="white--text ma-2" width="64px" height="64px" />
								<v-spacer />
							</v-card-title>
						</v-img>
						<v-card-title primary-title class="pa-3 text-center">
							<v-spacer />
							<h1 class="text-spaced font-weight-black text-uppercase">Chrome</h1>
							<v-spacer />
						</v-card-title>
					</v-card>
				</v-col>
				<v-col
					cols="12"
					sm="8"
					md="3"
					lg="2"
					class="ma-4"
					data-aos="zoom-in"
					data-aos-easing="ease-in-out-back"
					data-aos-delay="200"
				>
					<v-card
						dark
						href="/opera"
						class="elevation-0 deep-orange darken-2 downloadCard"
					>
						<v-img class="deep-orange">
							<v-card-title class="py-3">
								<v-spacer />
								<IconDownload class="white--text ma-2" width="64px" height="64px" />
								<v-spacer />
							</v-card-title>
						</v-img>
						<v-card-title primary-title class="pa-3 text-center">
							<v-spacer />
							<h1 class="text-spaced font-weight-black text-uppercase">Firefox</h1>
							<v-spacer />
						</v-card-title>
					</v-card>
				</v-col>
				<v-col
					cols="12"
					sm="8"
					md="3"
					lg="2"
					class="ma-4"
					data-aos="zoom-in"
					data-aos-easing="ease-in-out-back"
					data-aos-delay="300"
				>
					<v-card dark href="/opera" class="elevation-0 red darken-2 downloadCard">
						<v-img class="red">
							<v-card-title class="py-3">
								<v-spacer />
								<IconDownload class="white--text ma-2" width="64px" height="64px" />
								<v-spacer />
							</v-card-title>
						</v-img>
						<v-card-title primary-title class="pa-3 text-center">
							<v-spacer />
							<h1 class="text-spaced font-weight-black text-uppercase">Opera</h1>
							<v-spacer />
						</v-card-title>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<script>
import IconDownload from '~/static/icons/download.svg';

export default {
	components: {
		IconDownload,
	},
	data() {
		return {
			links: [{ text: 'Chrome', href: '', color: '' }],
		};
	},
};
</script>

<style>
.downloadCard {
	transition: all 0.5s;
}
.downloadCard:hover {
	transition: all 0.5s;
	box-shadow: 0 8px 15px rgba(33, 33, 33, 0.1) !important;
	transform: translateY(-4px) !important;
}
.downloadCard:active {
	transition: all 0.5s;
	transform: translateY(2px) !important;
}
</style>
