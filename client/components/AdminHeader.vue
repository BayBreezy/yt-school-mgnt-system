<template>
	<div>
		<h1 class="text-2xl font-semibold">{{ title }}</h1>
		<p v-if="subtext" class="text-gray-500 mt-2">{{ subtext }}</p>
	</div>
</template>

<script setup lang="ts">
	defineProps<{ title: string; subtext?: string }>();
</script>
