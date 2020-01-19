<template>
	<div>
		<section class="flex flex-col items-center h-screen">
			<div class="container flex flex-col items-center justify-center h-screen">
				<h1
					class="mb-2 text-2xl md:text-6xl font-black uppercase tracking-widest text-black dark:text-white"
					data-aos="fade-left"
					data-aos-easing="ease-in-out-back"
					data-aos-duration="1100"
				>
					Extend Your Deck
				</h1>
				<h3
					class="my-6 md:my-0 text-xs md:text-base text-center font-thin uppercase tracking-max text-gray-800 dark:text-gray-200"
					data-aos="fade-right"
					data-aos-easing="ease-in-out-back"
					data-aos-duration="1200"
				>
					Install and manage extensions for TweetDeck
				</h3>

				<div class="flex flex-row flex-wrap items-center justify-center">
					<div
						data-aos="fade-up"
						data-aos-duration="1300"
						data-aos-easing="ease-in-out-back"
					>
						<a
							:href="downloadBtnUrl"
							class="m-2 md:m-8 py-3 px-16 flex flex-row flex-no-wrap rounded-full bg-black dark:bg-white focus:outline-none text-white dark:text-black text-base uppercase tracking-max font-bold animatedButton"
						>
							<IconDownload class="mr-4" />
							Download
						</a>
					</div>

					<div
						data-aos="fade-up"
						data-aos-duration="1400"
						data-aos-easing="ease-in-out-back"
					>
						<a
							:href="githubBtnUrl"
							class="m-2 md:m-8 py-3 px-16 flex flex-row flex-no-wrap rounded-full bg-black dark:bg-white focus:outline-none text-white dark:text-black text-base uppercase tracking-max font-bold animatedButton"
						>
							<IconGitHub class="mr-4" />
							GitHub
						</a>
					</div>
				</div>
			</div>
		</section>

		<section class="flex flex-col items-center h-screen">
			<div
				class="container flex flex-col flex-wrap items-center justify-center h-screen my-8"
			>
				<IconDashboard class="w-16 h-16 text-black dark:text-white" />

				<h1
					class="text-black dark:text-white font-black text-6xl uppercase tracking-widest"
				>
					Dashboard
				</h1>
			</div>
		</section>

		<section class="flex flex-col items-center h-screen">
			<div
				class="container flex flex-col flex-wrap items-center justify-center h-screen my-8"
			>
				<IconExtension class="w-16 h-16 text-black dark:text-white" />

				<h1
					class="text-black dark:text-white font-black text-6xl uppercase tracking-widest"
				>
					Extensions
				</h1>
			</div>
		</section>

		<section class="flex flex-col items-center h-screen">
			<div
				class="container flex flex-col flex-wrap items-center justify-center h-screen my-8"
			>
				<IconOSS class="w-16 h-16 text-white" />

				<h1 class="text-white font-black text-6xl uppercase tracking-widest">
					Open Source
				</h1>
			</div>
		</section>

		<section class="flex flex-col items-center h-screen">
			<div
				class="container flex flex-col flex-wrap items-center justify-center h-screen my-8"
			>
				<IconDownload class="w-16 h-16 text-black dark:text-white" />

				<h1
					class="text-black dark:text-white font-black text-6xl uppercase tracking-widest"
				>
					Download
				</h1>
			</div>
		</section>
	</div>
</template>

<script>
import Icon from '~/static/icon.svg?inline';
import IconDashboard from '~/static/icons/dashboard.svg?inline';
import IconDownload from '~/static/icons/download.svg?inline';
import IconExtension from '~/static/icons/extensions.svg?inline';
import IconGitHub from '~/static/icons/github.svg?inline';
import IconOSS from '~/static/icons/oss.svg?inline';

export default {
	components: {
		Icon,
		IconDashboard,
		IconDownload,
		IconExtension,
		IconGitHub,
		IconOSS,
	},
	data() {
		return {
			downloadBtnUrl: '#download',
			githubBtnUrl: 'https://github.com/tdemapp/manager',
		};
	},
};
</script>
