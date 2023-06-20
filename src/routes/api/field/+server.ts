import type { RequestHandler } from './$types';
export const GET: RequestHandler = async () => {
	const methods = await Promise.all(
		Object.entries(import.meta.glob('$content/methods/text/**/*.md')).map(async ([path, page]) => {
			const { metadata } = await page();

			const slug = path.split('/').pop().split('.').shift();
			return { ...metadata, slug };
		})
	);

	const isField = methods.filter((method) => {
		if (method.category === 'field') {
			return true;
		}
	});

	return new Response(JSON.stringify(isField), {
		status: 200
	});
};
