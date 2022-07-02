export interface Method {
	name: string;
	why: string;
	how: string;
	practice: string;
	ingredients: string[];
	category: category;
	slug: string;
	phases: string[];
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
