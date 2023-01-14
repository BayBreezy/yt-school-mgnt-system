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
				<button @click="openModal()" class="btn primary gap-x-2">
					<Icon name="ph:plus-bold" size="16" />
					<span>Create New</span>
				</button>
			</div>
		</div>
		<ModalStudent @submit="submit" ref="studentModal" />

		<div v-if="!students.length" class="mx-auto text-center mt-20">
			<Icon class="text-gray-400" name="ph:student" size="48" />
			<p class="font-semibold mt-5 mb-3">No Students</p>
			<p>Add your first student now</p>
			<button @click="openModal()" class="btn primary mt-5">Add New Student</button>
		</div>

		<MyTable v-if="students.length" @ready="dataTable = $event" :search="search">
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
				<template v-for="s in students" :key="`student-${s.id}`">
					<tr class="border-b border-gray-100">
						<td class="p-4 text-center">{{ s.id }}</td>
						<td class="p-4">
							<div class="flex">
								<img
									v-if="s.avatar"
									:src="`${url}${s.avatar.url}`"
									:alt="`${s.firstName} ${s.lastName} Image`"
									class="w-11 h-11 rounded-full object-cover"
								/>
								<span
									v-else
									class="rounded-full w-12 h-12 text-gray-600 bg-gray-100 flex items-center justify-center"
								>
									<Icon name="ph:student" />
								</span>
								<div class="ml-4">
									<p class="font-medium">{{ s.firstName }} {{ s.lastName }}</p>
									<a
										class="text-sm text-gray-500 hover:text-primary hover:underline"
										:href="`mailto:${s.email}`"
										>{{ s.email }}</a
									>
								</div>
							</div>
						</td>
						<td class="p-4 text-sm">
							<a class="text-sm hover:text-primary hover:underline" :href="`tel:${s.phone}`">{{
								s.phone
							}}</a>
						</td>
						<td class="p-4 text-sm">{{ s.dob }}</td>
						<td class="p-4 text-sm">{{ s.createdAt }}</td>
						<td class="p-4 text-sm text-right">
							<button @click="openModal(s)" class="font-medium px-3 text-primary hover:underline">
								Edit
							</button>
							<button class="font-medium px-3 text-red-500 hover:underline">Delete</button>
						</td>
					</tr>
				</template>
			</template>
		</MyTable>
	</div>
</template>

<script setup lang="ts">
	import { IStudent } from "~~/types";

	definePageMeta({ layout: "admin" });

	const dataTable = ref();
	const studentModal = ref();
	const search = ref("");
	const students = ref<IStudent[]>([]);
	const url = useStrapiUrl().replace("/api", "");

	const exportData = (action: string) => {
		useExportData(dataTable.value, action);
	};

	const openModal = (item?: IStudent) => {
		studentModal.value.openModal(item);
	};

	// function used to load students
	const loadData = async () => {
		const loading = useLoading();
		loading.value = true;
		const { find } = useStrapi<IStudent[]>();
		try {
			const { data } = await find("students", { populate: "deep" });
			// @ts-ignore
			students.value = data;
		} catch (error) {
			console.log(error);
		} finally {
			loading.value = false;
		}
	};

	loadData();

	// function used to save or update student data
	const submit = async (item: IStudent) => {
		const { update, create } = useStrapi<IStudent>();
		// start loader
		useLoading().value = true;
		let newStudent: IStudent;

		try {
			// if id field is present, update the doc
			if (item.id) {
				await update("students", item.id, item);
			} else {
				// create a record
				const { data } = await await create("students", item);
				// @ts-ignore
				newStudent = data;
			}
			// if an avatar is attached, upload it
			if (item.newAvatar) {
				// check if this is a new student
				if (item.id) {
					// delete the old image if one exist
					if (item.avatar?.id) {
						await useRemoveFile(item.avatar.id);
					}
					// upload new image
					await useUploadFile(item.newAvatar, item.id, "api::student.student", "avatar");
				}
				if (newStudent.id) {
					// upload new image
					await useUploadFile(item.avatar, newStudent.id, "api::student.student", "avatar");
				}
			}
			alert("Student created/updated");
		} catch (error) {
		} finally {
			// stop loader
			useLoading().value = false;
		}
	};
</script>
