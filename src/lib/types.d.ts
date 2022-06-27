export interface Method {
	name: string;
	why: string;
	how: string;
	practice: string;
	ingredients: string[];
	category: category;
	image: string;
	slug: string;
}

declare module '*.svg' {
	const content: any;
	export default content;
}

declare module '*.svg?component' {
	const content: any;
	export default content;
}

declare module '*.svg?src' {
	const content: string;
	export default content;
}

declare module '*.svg?url' {
	const content: string;
	export default content;
}
