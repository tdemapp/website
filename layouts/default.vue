<template>
  <v-app dark>
    <v-content class="grey darken-4">
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style>
::-webkit-scrollbar {
	display: none;
}

html,
body,
.theme--light.application {
	background-color: #fafcff !important;
	margin: 0;
	font-family: 'Roboto', Arial, Helvetica, sans-serif !important;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-transition: all 0.5s !important;
	transition: all 0.5s !important;
}

.text {
	font-weight: 300 !important;
	letter-spacing: 0.2em !important;
	text-transform: uppercase;
	border-radius: 6px !important;
}

.v-btn {
	border-radius: 0 !important;
}
</style>
