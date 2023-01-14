<template>
	<ModalSlideOverBase ref="modal">
		<div class="w-80 flex items-center justify-between">
			<p class="font-semibold text-lg">{{ student?.id ? "Edit" : "New" }} Student</p>
			<button
				@click="closeModal"
				class="inline-flex items-center justify-center p-2 hover:bg-red-100 hover:text-red-500 rounded-md transition-all"
			>
				<Icon name="ph:x" />
			</button>
		</div>
		<VForm @submit="submit" :initialValues="student" class="mt-5">
			<div @click="$refs.hiddenFile.click()">
				<div v-if="!studentBase64Image" class="flex items-center mb-5 cursor-pointer">
					<span
						class="rounded-full h-20 w-20 hover:bg-primary-100 hover:text-primary text-gray-500 bg-gray-100 flex items-center justify-center"
					>
						<Icon class="" name="ph:image" size="32" />
					</span>
					<div class="grow ml-5">
						<p class="text-sm">Click to add student image</p>
					</div>
				</div>
				<div v-if="studentBase64Image" class="flex items-center mb-5 cursor-pointer">
					<img
						class="rounded-full w-20 h-20 object-cover"
						:src="studentBase64Image"
						alt="Student Image"
					/>

					<div class="grow ml-5">
						<p class="text-sm font-medium">Click to change image</p>
						<p class="text-sm font-light text-primary-600 mt-1">{{ avatar?.name }}</p>
					</div>
				</div>
			</div>
			<FormLabel for="firstName">First name</FormLabel>
			<FormInput
				v-model.trim="student.firstName"
				placeholder="Enter first name"
				rules="required|min:3"
				name="firstName"
				id="firstName"
			/>
			<FormLabel for="lastName">Last name</FormLabel>
			<FormInput
				v-model.trim="student.lastName"
				placeholder="Enter last name"
				rules="required|min:3"
				name="lastName"
				id="lastName"
			/>
			<FormLabel for="dob">Date of Birth</FormLabel>
			<FormInput v-model.trim="student.dob" type="date" rules="required" name="dob" id="dob" />
			<FormLabel for="email"
				>Email <span class="text-gray-400 italic font-light">(Optional)</span></FormLabel
			>
			<FormInput
				v-model.trim="student.email"
				placeholder="Enter email here"
				type="email"
				rules="email"
				name="email"
				id="email"
			/>
			<FormLabel for="phone"
				>Phone <span class="text-gray-400 italic font-light">(Optional)</span></FormLabel
			>
			<FormInput
				v-model.trim="student.phone"
				placeholder="Enter phone number here"
				type="tel"
				name="phone"
				id="phone"
			/>
			<div>
				<button class="btn primary" type="submit">
					{{ student?.id ? "Update" : "Save" }} Student
				</button>
			</div>
		</VForm>
	</ModalSlideOverBase>
	<!-- Hidden input -->
	<input
		ref="hiddenFile"
		@click="$event.target.value = null"
		@change="addImage"
		type="file"
		hidden
		accept=".png,.jpg,.jpeg"
	/>
</template>

<script setup lang="ts">
	import { Ref } from "vue";
	import { IStudent } from "~~/types";
	import SlideOverBase from "./SlideOverBase.vue";

	const emits = defineEmits(["submit"]);

	const modal = ref<typeof SlideOverBase>();
	const avatar = ref() as Ref<File | undefined | null>;
	const url = useStrapiUrl().replace("/api", "");

	// student being created / edited
	const student = ref<IStudent>({} as IStudent);
	const avatarUrl = ref("");

	// @ts-ignore
	const { base64: studentBase64Image } = useBase64(avatar);

	// functions used to open and close the modal
	const openModal = (item?: IStudent) => {
		if (item) {
			student.value = item;
			if (item.avatar) {
				studentBase64Image.value = `${url}${item.avatar.url}`;
			}
		}
		modal.value?.openModal();
	};
	const closeModal = () => {
		avatar.value = null;
		student.value = {} as IStudent;
		studentBase64Image.value = "";
		modal.value?.closeModal();
	};

	// functions/variables that are exposed to the parent component
	defineExpose({ openModal, closeModal });

	// function used to add image
	const addImage = (e: any) => {
		// validation
		if (!e) return;
		let files = e.target.files;
		if (!files) return;
		let file = files[0];
		if (!file.type.match("image/*")) return alert("Wrong file type");
		// assign image to avatar
		avatar.value = file;
		// set avatarUrl if id is present on student
		if (student.value.id) {
			const { base64 } = useBase64(ref(file));
			studentBase64Image.value = base64.value;
		}
	};

	// function used to submit form data
	const submit = (values: Partial<IStudent>, ctx: any) => {
		emits("submit", { ...student.value, newAvatar: avatar.value });
		closeModal();
	};
</script>
