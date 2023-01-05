<template>
	<ModalSlideOverBase ref="modal">
		<div class="w-80 flex items-center justify-between">
			<p class="font-semibold text-lg">New Student</p>
			<button
				@click="closeModal"
				class="inline-flex items-center justify-center p-2 hover:bg-red-100 hover:text-red-500 rounded-md transition-all"
			>
				<Icon name="ph:x" />
			</button>
		</div>
	</ModalSlideOverBase>
</template>

<script setup lang="ts">
	import SlideOverBase from "./SlideOverBase.vue";
	const modal = ref<typeof SlideOverBase>();

	const isOpen = ref(false);

	const openModal = () => modal.value?.openModal();
	const closeModal = () => modal.value?.closeModal();

	defineExpose({ openModal, closeModal });
</script>
