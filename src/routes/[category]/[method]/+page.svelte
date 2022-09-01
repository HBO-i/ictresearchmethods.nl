<script lang="ts">
	import type { PageData } from './$types';
	import { afterNavigate } from '$app/navigation';
	import { capitalizeFirstLetter } from '$lib/utils/format';

	let previousRoute: string;

	afterNavigate((navigation) => {
		previousRoute = navigation.from?.href ?? '/';
	});

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.result.name} — ICT Research Methods</title>
	<meta name="description" content={data.result.how.slice(0, 150)} />
</svelte:head>

<section>
	<p class="detail__details">
		<a href={previousRoute}>{'<'}</a>Details
	</p>

	<img src={`/img/${data.result.category}/${data.result.slug}.webp`} class="img" alt="" />

	<div class="detail__heading">
		<h1>{data.result.name}</h1>
		<h2><a href={'/' + data.result.category} data-sveltekit-prefetch>{data.result.category}</a></h2>
	</div>

	<h3>Why?</h3>
	<p>{data.result.why}</p>

	<h3>How?</h3>
	<p>{data.result.how}</p>

	<h3>Ingredients</h3>
	<ul>
		{#each data.result.ingredients as ingredient}
			<li>{ingredient}</li>
		{/each}
	</ul>

	<h3>In practice</h3>
	<p>{data.result.practice}</p>

	<h3>Phase(s) of use</h3>
	<p>In the following project phase(s) {data.result.name.toLowerCase()} can be used:</p>
	<ul>
		{#each data.result.phases as phase}
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

		a {
			text-decoration: none;
			color: var(--color-primary);
		}
	}

	h3 {
		margin: 0;
	}

	p {
		max-width: 90vw;
		line-height: 1.5em;
		letter-spacing: 0.2px;
		margin-top: 0.35em;

		@include desktop {
			max-width: 50vw;
		}
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
</style>
