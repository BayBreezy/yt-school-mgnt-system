<template>
	<ClientOnly>
		<HTransitionRoot :show="isOpen" appear as="div">
			<HDialog @close="closeModal" as="div" class="relative z-30">
				<!-- Overlay -->
				<HTransitionChild
					enter="transition duration-300"
					leave="transition"
					enter-from="opacity-0"
					leave-to="opacity-0"
				>
					<div class="fixed inset-0 bg-black/30"></div>
				</HTransitionChild>

				<div class="fixed inset-0 overflow-y-auto">
					<!-- Sidebar container -->
					<div class="flex min-h-full justify-end">
						<HTransitionChild
							as="div"
							enter="transition duration-300"
							leave="transition duration-200"
							enter-from="opacity-0 translate-x-10"
							leave-to="opacity-0 translate-x-10"
						>
							<HDialogPanel
								class="w-full max-w-md overflow-y-auto h-full transform bg-white p-6 shadow-xl transition-all"
							>
								<slot />
							</HDialogPanel>
						</HTransitionChild>
					</div>
				</div>
			</HDialog>
		</HTransitionRoot>
	</ClientOnly>
</template>

<script setup lang="ts">
	const isOpen = ref(false);

	const openModal = () => (isOpen.value = true);
	const closeModal = () => (isOpen.value = false);

	defineExpose({ openModal, closeModal });
</script>
