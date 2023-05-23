<script lang="ts">
	import type { PageData } from './$types';
	import { afterNavigate } from '$app/navigation';
	import { capitalizeFirstLetter } from '$lib/utils/format';

	import { isJavaScriptDisabled } from '$lib/stores';

	import EditMethod from '$lib/components/EditMethod.svelte';
	import GoBack from '$lib/components/layout/GoBack.svelte';

	let previousRoute: string;

	afterNavigate((navigation) => {
		previousRoute = navigation.from?.url?.href ?? '/';
	});

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.method.name} — ICT Research Methods</title>
	<meta name="description" content={data.method.how.slice(0, 150)} />
</svelte:head>

<section>
	<GoBack link={$isJavaScriptDisabled ? '/' : previousRoute ?? '/'} text="Details" />

	<picture>
		<source
			type="image/webp"
			srcset={`/img/methods/${data.method.category}/${data.method.slug}.webp`}
		/>
		<source
			type="image/jpeg"
			srcset={`/img/methods/${data.method.category}/${data.method.slug}.jpg`}
		/>
		<img
			src={`/img/methods/${data.method.category}/${data.method.slug}.jpg`}
			class="img"
			alt=""
			width="240"
			height="360"
		/>
	</picture>

	<div class="detail__heading">
		<h1>{data.method.name}</h1>
		<h2><a href={'/' + data.method.category}>{data.method.category}</a></h2>
	</div>

	<h3>Why?</h3>
	<p>{data.method.why}</p>

	<h3>How?</h3>
	<p>{data.method.how}</p>

	<h3>Ingredients</h3>
	<ul>
		{#each data.method.ingredients as ingredient}
			<li>{ingredient}</li>
		{/each}
	</ul>

	<h3>In practice</h3>
	<p>{data.method.practice}</p>

	<h3>Phase(s) of use</h3>
	<p>In the following project phase(s) {data.method.name.toLowerCase()} can be used:</p>
	<ul>
		{#each data.method.phases as phase}
			<li>{capitalizeFirstLetter(phase)}</li>
		{/each}
	</ul>
</section>

<EditMethod category={data.method.category} methodSlug={data.method.slug} />

<style lang="scss">
	section {
		background-color: var(--color-white);
		border-radius: 1em;
		padding: 0.5em 2em;
	}

	img {
		border-radius: 1em;
		background-color: white;
		height: 20rem;
		width: auto;

		@include tablet {
			height: 22.5rem;
		}

		@include desktop-small {
			height: 25rem;
		}
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

		@include desktop-small {
			max-width: 50vw;
		}
	}
</style>
