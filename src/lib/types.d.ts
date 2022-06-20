export interface Method {
	name: string;
	why: string;
	how: string;
	practice: string;
	ingredients: string[];
	category: category;
	image: string;
}

export type AllMethodsBody = () => { body: Method[] };
