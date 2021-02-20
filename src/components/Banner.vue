<template>
	<div v-show="enabled" class="bg-primary-600">
		<div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between flex-wrap">
				<div class="w-0 flex-1 flex items-center">
					<span class="flex p-2 rounded-lg bg-primary-800">
						<feather-bell class="h-6 w-6 text-white" />
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
						<feather-x class="h-6 w-6 text-white" />
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import splitbee from '@splitbee/web';

const enabled = useStorage('show-banner', true);

const toggleEnabled = () => {
	splitbee.track('Banner Closed', {
		show_banner: enabled.value,
	});
	enabled.value = !enabled.value;
};
</script>
