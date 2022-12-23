import type { RequestHandler } from './$types';
export const GET: RequestHandler = async () => {
	let methods = await Promise.all(
		Object.entries(import.meta.glob('../../**/**/*.md')).map(async ([path, page]) => {
			const { metadata } = await page();
			const slug = path.split('/').pop().split('.').shift();
			return { ...metadata, slug };
		})
	);

	return new Response(JSON.stringify(methods), {
		status: 200
	});
};
