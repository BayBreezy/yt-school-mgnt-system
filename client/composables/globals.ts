// global loading state
export const useLoading = () => useState("loading", () => false);
// menu open close state
export const useMenuState = () => useState("menuState", () => true);
// menu options
export const useMenuOptions = () =>
	useState("menuOptions", () => [
		{ title: "Dashboard", link: "/admin/dashboard", icon: "ph:house" },
		{ title: "Students", link: "/admin/students", icon: "ph:student" },
		{ title: "Teachers", link: "/admin/teachers", icon: "ph:chalkboard-teacher" },
		{ title: "Classes", link: "/admin/classes", icon: "ph:grid-four" },
		{ title: "Subjects", link: "/admin/subjects", icon: "ph:books" },
	]);
