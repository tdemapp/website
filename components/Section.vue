<template>
	<section :id="id" :class="dark ? 'angle' : null">
		<v-layout align-center row wrap :class="`py-5 ${dark ? 'primary' : 'transparent'}`">
			<v-flex xs12>
				<v-container grid-list-xl>
					<v-layout row wrap align-center>
						<slot name="content" />
					</v-layout>
				</v-container>
			</v-flex>
		</v-layout>
	</section>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			default: '',
			required: true,
		},
		dark: {
			type: Boolean,
			default: false,
			required: false,
		},
	},
};
</script>
