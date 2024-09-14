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
	<GoBack link="/" text="Methods" isClickable />

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

	{#if data.method.scales}
		<h3>Scales</h3>

		<div class="scales">
			{#each data.method.scales as scale}
				<div class="scale">
					<div class="scale-labels">
						<span class="scale-name">{scale.name.split('_')[0]}</span>
						<span class="scale-name">{scale.name.split('_')[1]}</span>
					</div>
					<div class="scale-bar">
						<div class="scale-fill" style="width: {scale.value}%;" />
					</div>
				</div>
			{/each}
		</div>
	{/if}
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

	.scales {
		margin-top: 1em;
	}

	.scale {
		margin-bottom: 1.5em;
	}

	.scale-labels {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.25em;
	}

	.scale-name {
		text-transform: capitalize;
		font-size: 0.9em;
		color: var(--color-text-secondary);
	}

	.scale-bar {
		width: 100%;
		height: 20px;
		background-color: var(--color-bg);
		border-radius: 5px;
		overflow: hidden;
	}

	.scale-fill {
		height: 100%;
		background-color: var(--color-primary);
		transition: width 0.3s ease;
	}
</style>
