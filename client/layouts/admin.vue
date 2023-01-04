<template>
	<div>
		<header class="border-b bg-white/80 z-10 sticky top-0 backdrop-blur">
			<div class="flex items-center justify-between h-20 px-5">
				<NuxtLink to="/admin/dashboard" class="flex items-center gap-3">
					<img src="/sms_icon.png" alt="Logo" class="w-8 h-8 rounded-full" />
					<h1 class="text-xl font-semibold text-gray-800">SMS</h1>
				</NuxtLink>
				<div class="flex items-center gap-3">
					<img
						src="https://behonbaker.com/icon.png"
						alt="Logged in user"
						class="w-9 h-9 rounded-full bg-white border-2 border-primary"
					/>
					<div>
						<p class="text-sm font-semibold">Behon Baker</p>
						<p class="text-sm text-gray-500">Admin</p>
					</div>
					<Icon class="w-4 h-4 text-gray-400" name="ph:caret-down" />
				</div>
			</div>
		</header>
		<aside
			:class="[{ 'w-72': menuOpen, 'w-20': !menuOpen }]"
			class="fixed top-20 bottom-0 z-0 p-5 overflow-y-auto border-r"
		>
			<button
				class="border rounded-lg outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary p-3 flex items-center w-full"
			>
				<div class="flex items-center gap-2 grow">
					<Icon class="text-gray-400 w-5 h-5" name="ph:magnifying-glass" />
					<span class="text-sm text-gray-400">Search...</span>
				</div>
			</button>

			<nav class="w-full flex flex-col mt-7 gap-y-2">
				<template v-for="(m, n) in menu" :key="`navItem-${n}`">
					<NuxtLink
						:to="m.link"
						class="text-gray-500 hover:text-primary-700 transition flex gap-3 items-center p-3 rounded-lg hover:bg-primary-50"
					>
						<Icon size="20" :name="m.icon" />
						<span class="text-sm">{{ m.title }}</span>
					</NuxtLink></template
				>
			</nav>
		</aside>
		<main :class="[{ 'ml-72': menuOpen, 'ml-20': !menuOpen }]" class="p-5">
			<slot />
		</main>
	</div>
</template>

<script setup>
	const menuOpen = useMenuState();
	const menu = useMenuOptions();
</script>
