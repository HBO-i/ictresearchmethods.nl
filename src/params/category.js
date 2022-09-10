const categories = new Set(['library', 'field', 'lab', 'showroom', 'workshop', 'extra']);

/** @type {import('@sveltejs/kit').ParamMatcher} */
export const match = (category) => categories.has(category);
