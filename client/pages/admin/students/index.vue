<template>
	<div>
		<AdminHeader title="Students" subtext="Student information" />
		<div class="flex items-center justify-between my-10">
			<div class="lg:w-72 relative">
				<Icon
					name="ph:magnifying-glass"
					size="18"
					class="absolute top-1/2 -translate-y-1/2 left-3 text-gray-500 pointer-events-none"
				/>
				<input
					class="pl-9"
					v-model="search"
					type="search"
					name="serach"
					id="search"
					placeholder="Search student here..."
				/>
			</div>
			<div class="flex items-center gap-x-4">
				<ExportButton @action="exportData" />
				<button class="btn primary gap-x-2">
					<Icon name="ph:plus-bold" size="16" />
					<span>Create New</span>
				</button>
			</div>
		</div>

		<div class="mx-auto text-center mt-20">
			<Icon class="text-gray-400" name="ph:student" size="48" />
			<p class="font-semibold mt-5 mb-3">No Students</p>
			<p>Add your first student now</p>
			<button @click="openModal()" class="btn primary mt-5">Add New Student</button>
		</div>

		<ModalStudent ref="studentModal" />

		<!-- <MyTable @ready="dataTable = $event" :search="search">
			<template #head>
				<tr class="border-b bg-gray-50">
					<th class="!w-20">ID</th>
					<th>Name</th>
					<th>Phone</th>
					<th>D.O.B</th>
					<th>Created Date</th>
					<th></th>
				</tr>
			</template>
			<template #body>
				<template v-for="n in 100" :key="`student-${n}`">
					<tr class="border-b border-gray-100">
						<td class="p-4 text-center">{{ n }}</td>
						<td class="p-4">
							<div class="flex">
								<img
									src="http://placeimg.com/480/480/people"
									alt="Student"
									class="w-11 h-11 rounded-full"
								/>
								<div class="ml-4">
									<p class="font-medium">John Brown</p>
									<a
										class="text-sm text-gray-500 hover:text-primary hover:underline"
										href="mailto:johnbrown@test.com"
										>johnbrown@test.com</a
									>
								</div>
							</div>
						</td>
						<td class="p-4 text-sm">
							<a class="text-sm hover:text-primary hover:underline" href="tel:+1876-555-8701"
								>+1876-555-8701</a
							>
						</td>
						<td class="p-4 text-sm">January 5, 2023</td>
						<td class="p-4 text-sm">May 5, 1999</td>
						<td class="p-4 text-sm text-right">
							<button class="font-medium px-3 text-primary hover:underline">Edit</button>
							<button class="font-medium px-3 text-red-400 hover:underline">Delete</button>
						</td>
					</tr>
				</template>
			</template>
		</MyTable> -->
	</div>
</template>

<script setup lang="ts">
	definePageMeta({ layout: "admin" });

	const dataTable = ref();
	const studentModal = ref();
	const search = ref("");

	const exportData = (action: string) => {
		useExportData(dataTable.value, action);
	};

	const openModal = (item?: any) => {
		studentModal.value.openModal(item);
	};
</script>
