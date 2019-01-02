<template>
	<v-app>
		<v-responsive id='welcome' class='sectionBG' height='100vh'>
			<v-container fill-height>
				<v-layout align-center>
				<v-flex xs12 text-xs-center>
					<v-avatar size='256px' tile>
					<img src='./assets/logo.svg' alt='Logo'>
					</v-avatar>

					<h2 class='ma-3 mt-4 text' color='grey darken-4'>Coming Soon...</h2>
					<v-btn flat large href='https://github.com/tdemapp' color='grey darken-4' class='sourceBtn text'>
						<v-icon left v-html='$vuetify.icons.github' />
						<span>GitHub</span>
					</v-btn>
				</v-flex>
				</v-layout>
			</v-container>
		</v-responsive>
	</v-app>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style>
@import url("./feather.css");

::-webkit-scrollbar { 
	display: none; 
}
html,
body,
.theme--light.application {
	background-color: #fafcff!important;
	margin: 0;
	font-family: 'Roboto', Arial, Helvetica, sans-serif!important;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-transition: all 0.5s!important;
	transition: all 0.5s!important;
}
.text {
	font-weight: 300!important;
	letter-spacing: .20em!important;
	text-transform: uppercase;
}
.text {
	border-radius: 6px!important;
}
</style>
