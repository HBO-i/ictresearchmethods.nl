<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const prerender = true;

	export const load: Load = async ({ fetch, params }) => {
		const res = await fetch(`/${params.category}/${params.method}.json`);

		if (res.ok) {
			const result = await res.json();

			if (result.length === 0) {
				return { status: 404 };
			}

			return {
				props: {
					result
				}
			};
		}

		const { message } = await res.json();

		return {
			error: new Error('[method.svelte]: ', message)
		};
	};
</script>

<script lang="ts">
	import type { Method } from '$lib/types';
	import { afterNavigate } from '$app/navigation';
	import { capitalizeFirstLetter } from '$lib/utils/format';

	let previousRoute: string;

	afterNavigate((navigation) => {
		previousRoute = navigation.from?.href ?? '/';
	});

	export let result: Method;
</script>

<svelte:head>
	<title>{result.name} — ICT Research Methods</title>
</svelte:head>

<section>
	<p class="detail__details">
		<a href={previousRoute}>{'<'}</a>Details
	</p>

	<img src={result.image} alt="" />

	<div class="detail__heading">
		<h1>{result.name}</h1>
		<h2>{result.category}</h2>
	</div>

	<h3>Why?</h3>
	<p>{result.why}</p>

	<h3>How?</h3>
	<p>{result.how}</p>

	<h3>Ingredients</h3>
	<ul>
		{#each result.ingredients as ingredient}
			<li>{ingredient}</li>
		{/each}
	</ul>

	<h3>In practice</h3>
	<p>{result.practice}</p>

	<h3>Phase(s) of use</h3>
	<p>In the following project phase(s) {result.name.toLowerCase()} can be used:</p>
	<ul>
		{#each result.phase as phase}
			<li>{capitalizeFirstLetter(phase)}</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	section {
		background-color: var(--color-white);
		border-radius: 1em;
		padding: 0.5em 2em;
	}

	img {
		border-radius: 1em;
		max-height: 40vh;
	}

	h1,
	h2 {
		margin: 0;
	}

	h1 {
		margin-bottom: 1.25em;
	}

	h2 {
		text-transform: capitalize;
		color: var(--color-primary);
		font-weight: 400;
		font-size: 1.1em;
		margin-bottom: 0.5em;
	}

	h3 {
		margin: 0;
	}

	p {
		max-width: 90vw;
		line-height: 1.5em;
		letter-spacing: 0.2px;
		margin-top: 0.35em;
	}

	.detail {
		&__details {
			color: var(--color-black);
			font-size: 1.5em;
			font-weight: 500;
			display: flex;
			gap: 0.75em;
			align-items: center;

			a {
				text-decoration: none;
				font-size: 1.5em;
				color: var(--color-black);
				font-weight: normal;

				&:hover {
					transform: scale(1.15);
				}
			}
		}

		&__heading {
			display: flex;
			flex-direction: column-reverse;
		}
	}

	@media screen and (min-width: 1200px) {
		p {
			max-width: 50vw;
		}
	}
</style>
