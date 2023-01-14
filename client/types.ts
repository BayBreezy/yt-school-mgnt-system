export interface IStrapiMeta {
	id?: number;
	createdAt?: string;
	updatedAt?: string;
	publishedAt?: string;
}
export interface IStudent extends IStrapiMeta {
	firstName: string;
	lastName: string;
	phone?: string;
	email?: string;
	dob: string;
	avatar?: any;
	newAvatar?: File;
}
