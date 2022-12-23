import type { RequestHandler } from './$types';
export const GET: RequestHandler = async () => {
	const methods = await Promise.all(
		Object.entries(import.meta.glob('../../**/**/*.md')).map(async ([path, page]) => {
			const { metadata } = await page();
			const slug = path.split('/').pop().split('.').shift();
			return { ...metadata, slug };
		})
	);

	const isShowroom = methods.filter((method) => {
		if (method.category === 'showroom') {
			return true;
		}
	});

	return new Response(JSON.stringify(isShowroom), {
		status: 200
	});
};
