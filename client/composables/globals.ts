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

// function used to export data from tables
export const useExportData = (dt: any, action: string) => {
	dt.button(`.buttons-${action}`).trigger();
};

// function used to upload images to our api
export const useUploadFile = async (image: File, refId: number, ref: string, field: string) => {
	const fd = new FormData();
	const client = useStrapiClient();

	// add props to form data
	fd.append("files", image);
	fd.append("refId", refId.toString());
	fd.append("ref", ref);
	fd.append("field", field);

	try {
		const { data } = await client<any>("/upload", {
			method: "POST",
			body: fd,
		});
		return "success";
	} catch (error) {
		console.log(error);
	}
};

// function used to delete an image/file
export const useRemoveFile = async (id: number) => {
	const { delete: remove } = useStrapi();
	try {
		await remove<any>("/upload/files", id);
		return "success";
	} catch (error) {
		console.log(error);
	}
};
