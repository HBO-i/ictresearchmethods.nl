import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';
import { fileURLToPath } from 'url';
import { mdsvex } from 'mdsvex';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		preprocess({
			scss: {
				prependData: `@import './src/lib/styles/__mixins.scss';`
			}
		}),
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: {
				mds: path.join(dirname, './src/routes/mdsvex/layout.svelte')
			}
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'error.html',
			precompress: true
		})
	}
};

export default config;
