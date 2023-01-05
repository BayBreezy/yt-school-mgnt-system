<template>
	<HMenu as="div" class="relative">
		<HMenuButton class="btn outline text-xs gap-x-2">
			<Icon name="ph:cloud-arrow-down" size="16" />
			<span>Export</span>
		</HMenuButton>
		<transition-expand axis="y" :duration="300">
			<HMenuItems
				class="absolute right-0 bg-white z-10 rounded-md shadow-lg w-40 p-1 ring-1 mt-2 ring-gray-100"
			>
				<template v-for="(b, i) in buttons" :key="`exportButton-${i}`">
					<HMenuItem>
						<button
							@click="$emit('action', b.action)"
							class="w-full text-sm flex items-center gap-x-4 rounded px-4 py-2.5 text-gray-600 ui-active:bg-primary-50 ui-active:text-primary"
						>
							<Icon size="18" :name="b.icon" /><span>{{ b.title }}</span>
						</button>
					</HMenuItem>
				</template>
			</HMenuItems>
		</transition-expand>
	</HMenu>
</template>

<script setup lang="ts">
	const buttons = ref([
		{ title: "Copy", icon: "ph:copy", action: "copy" },
		{ title: "CSV", icon: "ph:file-csv", action: "csv" },
		{ title: "Excel", icon: "vscode-icons:file-type-excel", action: "excel" },
		{ title: "PDF", icon: "vscode-icons:file-type-pdf2", action: "pdf" },
		{ title: "Print", icon: "noto-v1:printer", action: "print" },
	]);
</script>
