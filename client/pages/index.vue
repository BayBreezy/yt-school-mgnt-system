<template>
	<main class="flex items-center justify-center min-h-screen">
		<div class="h-screen lg:w-1/2 flex items-center justify-center">
			<div class="w-[360px] mx-auto">
				<img id="logo" src="/sms_icon.png" alt="Logo" class="rounded-full w-10 mb-10" />
				<h1 class="text-3xl font-medium frm">Welcome back</h1>
				<p class="text-gray-500 dark:text-gray-400 mt-2 frm">Enter your credentials to sign in</p>

				<VForm @submit="submit" class="mt-10">
					<div class="frm">
						<FormLabel for="email">Email address</FormLabel>
						<FormInput
							autofocus
							label="Email"
							rules="required|email"
							type="email"
							id="email"
							name="email"
						/>
					</div>
					<div class="frm">
						<FormLabel for="password" class="mt-4">Password</FormLabel>
						<FormInput
							hint="6 chars or more"
							label="Password"
							rules="required|min:6"
							type="password"
							id="password"
							name="password"
						/>
					</div>
					<div class="frm">
						<button type="submit" class="btn w-full primary mt-7">Sign In</button>
					</div>
				</VForm>
				<p class="text-sm mt-7 text-gray-500 frm">
					<span
						>Not yet a student?
						<NuxtLink to="#" class="font-medium text-primary">Register here</NuxtLink></span
					>
				</p>
			</div>
		</div>
		<div class="min-h-screen lg:w-1/2">
			<img src="/sms_image.png" alt="Auth Image" class="object-cover w-full h-screen" />
		</div>
	</main>
</template>

<script setup>
	import { gsap } from "gsap";

	onMounted(() => {
		const isDark = useDark();
		const toggleDark = useToggle(isDark);

		toggleDark();
		gsap.from("#logo", { x: -50, opacity: 0, duration: 0.8 });
		gsap.from(".frm", {
			delay: 0.4,
			x: -50,
			opacity: 0,
			duration: 0.5,
			stagger: {
				each: 0.1,
			},
		});
	});

	// function triggered when the form is submitted
	const submit = (values, ctx) => {};
</script>
