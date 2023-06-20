export function capitalizeFirstLetter(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function slugify(str: string): string {
	str = str.replace(/^\s+|\s+$/g, '');
	str = str.toLowerCase();
	str = str
		.replace(/[^a-z0-9 -]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');
	return str;
}
