<template>
	<div class="grid gap-10 grid-cols-1 lg:grid-cols-3 mt-10">
		<StatCard
			title="Total Students"
			stat="3,500"
			icon="ph:student"
			link="/admin/students"
			linkText="Create Student"
		/>
		<StatCard
			title="Total Teachers"
			stat="3"
			icon="ph:chalkboard-teacher"
			link="/admin/teachers"
			linkText="Create Teacher"
		/>
		<StatCard
			title="Total Subjects"
			stat="32"
			icon="ph:file-code"
			link="/admin/subjects"
			linkText="Create Subject"
		/>
	</div>
</template>
