import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

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
			extensions: ['.md']
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
