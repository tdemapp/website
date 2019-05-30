<template>
	<v-layout class="mt-3" data-aos="slide-right" data-aos-offset="-60">
		<v-flex layout wrap xs12 align-content-space-between :pa-5="$vuetify.breakpoint.smAndDown">
			<v-responsive height="50vh" class="grey darken-4 angle angleLeft" />
		</v-flex>
	</v-layout>
</template>

<script>
export default {};
</script>

<style>
.angleLeft {
	transform: rotate(2deg);
}
</style>
