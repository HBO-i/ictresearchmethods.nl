/**
 * Returns the slugified version of a string, so it can be used as slug
 *
 * @param {string} str - Expects the name of the method (method.name)
 * @returns {string} - The slugified name of the method
 */
export function slugify(str: string) {
	str = str.replace(/^\s+|\s+$/g, '');

	// Make the string lowercase
	str = str.toLowerCase();

	// Remove accents, swap ñ for n, etc
	const from =
		'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;';
	const to =
		'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------';
	for (let i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	// Remove invalid chars
	str = str
		.replace(/[^a-z0-9 -]/g, '')
		// Collapse whitespace and replace by -
		.replace(/\s+/g, '-')
		// Collapse dashes
		.replace(/-+/g, '-');

	return str;
}

/**
 * Returns
 * @param {string} slug - Slug from a specific url
 * @returns {string} - The slug without the dashes
 *
 * Example:
 * 'brainstorm-sessions' will be come 'brainstorm sessions'
 */
export function unslugify(slug: string) {
	return slug.replace(/\-/g, ' ');
}
