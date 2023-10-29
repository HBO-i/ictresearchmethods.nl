<script lang="ts">
	import type { Method } from '$lib/types';
	import Tag from '$lib/components/utils/Tag.svelte';

	export let method: Method;
</script>

<article class={method.category}>
	<div class="card-heading">
		<picture class="card-heading__img">
			<source
				type="image/webp"
				srcset={`/img/methods/${method.category}/thumbnail/${method.slug}.webp`}
			/>
			<source
				type="image/jpeg"
				srcset={`/img/methods/${method.category}/thumbnail/${method.slug}.jpg`}
			/>
			<img
				src={`/img/methods/${method.category}/thumbnail/${method.slug}.jpg`}
				loading="lazy"
				decoding="async"
				class="img"
				alt=""
				height="80"
				width="80"
			/>
		</picture>

		<div class="card-heading__text">
			<h1>{method.name}</h1>
			<h2>{method.category}</h2>
		</div>
	</div>
	<div class="card-content">
		<p class="card-content__heading">Why?</p>
		<p class="card-content__body">
			{method.why}
		</p>
		<div class="tag-container">
			{#if method.phases}
				{#each method.phases as phase}
					<a href="/methods-per-project-phase/">
						<Tag theme={method.category} value={phase} tooltipText="Project phase of use" />
					</a>
				{/each}
			{/if}
		</div>
	</div>
	<button class="btn btn-{method.category} more-info">More info</button>
</article>

<style lang="scss">
	a {
		text-decoration: none;
		transition: all 0.2s ease;

		&:hover {
			font-weight: normal;
			transform: scale(1.025);
		}
	}

	article {
		min-width: min-content;
		background-color: var(--color-white);
		margin: 0.5em 0;
		padding: 2rem;
		border-radius: 1.5em;

		@include desktop-small {
			display: flex;
			gap: 0.25rem;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			height: 11.25rem;
			padding: 0.75rem;

			&:hover {
				transform: scale(1.01);
				box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
			}
		}

		@include desktop {
			width: 67.5rem;
			padding: 2rem;
		}

		@include desktop-large {
			width: 70rem;
		}
	}

	h1 {
		font-weight: 500;
		margin: 0.2em 0;
		font-size: 1.1em;
		width: 10em;
		color: var(--color-black);

		@include desktop-small {
			font-size: 1em;
		}
	}

	h2 {
		color: var(--color-primary);
		font-size: 1em;
		font-weight: bold;
		line-height: 0;
		text-transform: capitalize;

		@include desktop-small {
			font-size: 0.9em;
		}
	}

	button {
		@include desktop-small {
			margin-left: 2em;
		}
	}

	.card-heading {
		display: flex;
		align-items: center;
		gap: 1em;
		margin-bottom: 1.5em;

		@include desktop-small {
			margin-bottom: 0;
		}

		&__text {
			display: flex;
			flex-direction: column-reverse;
			max-width: 50%;
		}
		&__img img {
			height: 5em;
			width: 5em;
			border-radius: 1em;
			object-fit: cover;
			background-color: white;
		}
	}
	.card-content {
		max-width: 27.5rem;
		&__heading {
			font-weight: 700;
			line-height: 0;
		}

		&__body {
			@include desktop-small {
				width: 31.25em;
			}

			@include desktop-large {
				width: 35em;
			}
		}
	}

	.tag-container {
		display: flex;
		flex-wrap: wrap;

		@include desktop-small {
			display: flex;
		}
	}

	.more-info {
		display: none;

		@include desktop-small {
			display: flex;
		}
	}

	$categories: library, field, lab, showroom, workshop, extra;

	@each $category in $categories {
		.#{$category} h2 {
			color: var(--color-#{$category});
		}
	}
</style>
