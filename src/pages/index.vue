<template>
	<Banner :enabled="true" />
	<Hero />
	<Features />
	<CTA />
</template>

<script setup lang="ts">
import Banner from '../components/Banner.vue';
import CTA from '../components/CTA.vue';
import Features from '../components/Features.vue';
import Hero from '../components/Hero.vue';
</script>
