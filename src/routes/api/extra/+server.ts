import type { RequestHandler } from './$types';
export const GET: RequestHandler = async () => {
	const methods = await Promise.all(
		Object.entries(import.meta.glob('$lib/content/**/*.md')).map(async ([path, page]) => {
			const { metadata } = await page();
			const slug = path.split('/').pop().split('.').shift();
			return { ...metadata, slug };
		})
	);

	const isExtra = methods.filter((method) => {
		if (method.category === 'extra') {
			return true;
		}
	});

	return new Response(JSON.stringify(isExtra), {
		status: 200
	});
};
