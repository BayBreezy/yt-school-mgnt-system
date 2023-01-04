<template>
	<div>
		<AdminHeader title="Dashboard" subtext="Here is an overview of what is happening" />
		<StatSection />
		<div class="mt-10">
			<p class="text-lg font-medium">Recent Registrations</p>
			<p class="text-gray-500 mt-2">Here is a list of the most recent students that registered.</p>

			<div class="overflow-x-auto w-full mt-5 border rounded-lg">
				<table class="w-full">
					<thead>
						<tr class="border-b bg-gray-50">
							<td class="px-5 py-4 text-sm font-semibold">Name</td>
							<td class="px-5 py-4 text-sm font-semibold">Reg. Date</td>
							<td class="px-5 py-4 text-sm font-semibold">Phone</td>
							<td class="px-5 py-4 text-sm font-semibold">D.O.B</td>
							<td class="px-5 py-4 text-sm font-semibold"></td>
						</tr>
					</thead>
					<tbody>
						<template v-for="n in 6" :key="`student-${n}`">
							<tr class="border-b border-gray-100">
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
								<td class="p-4 text-sm">January 5, 2023</td>
								<td class="p-4 text-sm">
									<a class="text-sm hover:text-primary hover:underline" href="tel:+1876-555-8701"
										>+1876-555-8701</a
									>
								</td>
								<td class="p-4 text-sm">May 5, 1999</td>
								<td class="p-4 text-sm text-right">
									<button class="font-medium px-3 text-primary hover:underline">View</button>
								</td>
							</tr>
						</template>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({ layout: "admin" });
</script>
