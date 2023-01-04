<template>
	<div>
		<AdminHeader title="Students" subtext="Student information" />
		<div class="flex items-center justify-between mt-10">
			<div class="lg:w-72 relative">
				<Icon
					name="ph:magnifying-glass"
					size="18"
					class="absolute top-1/2 -translate-y-1/2 left-3 text-gray-500"
				/>
				<input
					class="pl-9"
					type="search"
					name="serach"
					id="search"
					placeholder="Search student here..."
				/>
			</div>
			<div class="flex items-center gap-x-4">
				<button class="btn outline text-xs gap-x-2">
					<Icon name="ph:cloud-arrow-down" size="16" />
					<span>Export</span>
				</button>
				<button class="btn primary gap-x-2">
					<Icon name="ph:plus-bold" size="16" />
					<span>Create New</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({ layout: "admin" });
</script>
