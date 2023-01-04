export default defineNuxtRouteMiddleware((to, from) => {
	const user = useStrapiUser();

	// // re-route to login page if the user isnt logged in and is trying to access an admin page
	// if (to.path.includes("admin") && !user) {
	// 	return navigateTo("/");
	// }
	// // If the user is logged in and going to login page, send them to admin page
	// if (to.path.includes("admin") && !!user) {
	// 	return navigateTo("/admin/dashboard");
	// }
});
