export interface Method {
	name: string;
	why: string;
	how: string;
	practice: string;
	ingredients: string[];
	category: category;
	image: string;
	slug: string;
	phase: string[];
}

export interface CategoryRoute {
	title: string;
	category: string;
}

export interface SidebarRoute {
	title: string;
	path: string;
	icon: string;
}
