<template>
	<div>
		<transition-fade>
			<div
				v-if="loading"
				class="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur"
			>
				<div class="text-center text-white">
					<Icon class="animate-spin mb-2" size="36" name="ph:spinner" />
					<p class="text-xl font-semibold">Loading</p>
				</div>
			</div>
		</transition-fade>
	</div>
</template>

<script setup lang="ts">
	const loading = useLoading();
</script>
