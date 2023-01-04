<template>
	<div class="group border p-5 rounded-md hover:border-primary transition">
		<div class="flex">
			<div class="grow">
				<p class="text-sm font-medium text-gray-500 capitalize">{{ title }}</p>
				<p class="text-2xl font-semibold mt-2">{{ stat }}</p>
			</div>
			<div>
				<div
					class="inline-flex justify-center items-center rounded-full bg-gray-100 group-hover:bg-primary-100 p-4"
				>
					<Icon class="text-gray-700 group-hover:text-primary-700" size="24" :name="icon" />
				</div>
			</div>
		</div>
		<NuxtLink
			v-if="link"
			:to="link"
			class="mt-5 text-xs p-3 group-hover:bg-primary-50 rounded-lg font-medium text-primary inline-flex items-center gap-2"
		>
			<span>{{ linkText }}</span> <Icon name="ph:caret-right" />
		</NuxtLink>
	</div>
</template>
<script setup lang="ts">
	const props = defineProps<{
		title: string;
		stat: string | number;
		icon: string;
		link?: string;
		linkText?: string;
	}>();
</script>
