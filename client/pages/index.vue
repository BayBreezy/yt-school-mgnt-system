<template>
	<main class="flex items-center justify-center min-h-screen">
		<div class="h-screen lg:w-1/2 flex items-center justify-center">
			<div class="w-[390px] mx-auto">
				<img src="/sms_icon.png" alt="Logo" class="rounded-full w-10 mb-10" />
				<h1 class="text-3xl font-medium">Welcome back</h1>
				<p class="text-gray-500 mt-2">Enter your details to get started</p>

				<form class="mt-10">
					<label for="email" class="text-sm text-gray-700 mb-2 inline-block">Email address</label>
					<input type="email" id="email" name="email" />
				</form>
			</div>
		</div>
		<div class="min-h-screen lg:w-1/2">
			<img src="/sms_image.png" alt="Auth Image" class="object-cover w-full h-screen" />
		</div>
	</main>
</template>
