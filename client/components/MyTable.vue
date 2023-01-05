<template>
	<ClientOnly>
		<DataTable class="w-full" ref="table" :options="options">
			<thead>
				<slot name="head" />
			</thead>
			<tbody>
				<slot name="body" />
			</tbody>
		</DataTable>
	</ClientOnly>
</template>

<script setup lang="ts">
	import type { Config } from "datatables.net";
	// Var that hold the dt instance
	let dt: any;
	// ref for the table in the html
	const table = ref();
	const emit = defineEmits(["ready"]);
	const tableProps = withDefaults(
		defineProps<{ search?: string; pageLength?: string | number }>(),
		{
			pageLength: Number(7),
		}
	);

	const options = ref<Config & { buttons: string[] }>({
		dom: "<'hidden'B>t<'flex items-center justify-between text-sm p-5'ip>",
		pageLength: Number(tableProps.pageLength),
		buttons: ["copy", "csv", "excel", "pdf", "print"],
	});

	// function used to search for record in table
	const searchTable = (v: string | undefined | null) => {
		// clear table if search is empty
		if (!v) return dt?.search("").draw();
		dt?.search(v).draw();
	};

	// Watch the prop and search through the table when the value changes
	watch(() => tableProps.search, searchTable);

	onMounted(() => {
		// once component is mounted, you can assign the value to it
		setTimeout(() => {
			dt = table.value?.dt();
			emit("ready", dt);
		}, 1000);
	});
</script>
