<template>
	<div v-show="enabled" class="bg-primary-600">
		<div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between flex-wrap">
				<div class="w-0 flex-1 flex items-center">
					<span class="flex p-2 rounded-lg bg-primary-800">
						<svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
							<line x1="16" y1="8" x2="2" y2="22"></line>
							<line x1="17.5" y1="15" x2="9" y2="15"></line>
						</svg>
					</span>
					<p class="ml-3 font-medium text-white truncate">
						<span class="md:hidden"> We announced a new product! </span>
						<span class="hidden md:inline">
							Big news! We're excited to announce a brand new product.
						</span>
					</p>
				</div>
				<div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
					<a
						href="#"
						class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-600 bg-white hover:bg-primary-50"
					>
						Learn more
					</a>
				</div>
				<div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
					<button
						@click="toggleEnabled"
						type="button"
						class="-mr-1 flex p-2 rounded-md hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
					>
						<span class="sr-only">Dismiss</span>
						<svg
							class="h-6 w-6 text-white"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
	enabled: {
		required: true,
		type: Boolean,
	},
});

const enabled = ref(props.enabled);

const toggleEnabled = () => (enabled.value = !enabled.value);
</script>
