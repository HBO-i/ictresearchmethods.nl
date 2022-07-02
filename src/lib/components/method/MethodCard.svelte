<script lang="ts">
	import type { Method } from '$lib/types';

	import Tag from '$lib/components/utils/Tag.svelte';

	export let method: Method;
</script>

<article>
	<div class="card-heading">
		<div class="card-heading__img">
			<img
				src={`/img/${method.category}/${method.slug}.webp`}
				class="img"
				alt=""
				height="80"
				width="80"
			/>
		</div>
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
					<Tag value={phase} tooltipText="Project phase of use" />
				{/each}
			{/if}
		</div>
	</div>
	<button class="btn btn-primary more-info">More info</button>
</article>

<style lang="scss">
	article {
		background-color: var(--color-white);
		margin: 0.5em 0;
		padding: 2em;
		border-radius: 1.5em;

		@include desktop {
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			margin: 0.5em 0;
			gap: 1em;

			&:hover {
				transform: scale(1.01);
				box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
			}
		}
	}

	h1 {
		font-weight: 500;
		margin: 0.2em 0;
		font-size: 1.1em;
		width: 10em;
		color: var(--color-black);

		@include desktop {
			font-size: 1em;
		}
	}

	h2 {
		color: var(--color-primary);
		font-size: 1em;
		font-weight: normal;
		line-height: 0;
		text-transform: capitalize;

		@include desktop {
			font-size: 0.9em;
		}
	}

	button {
		@include desktop {
			margin-left: 5em;
		}
	}

	.card-heading {
		display: flex;
		align-items: center;
		gap: 1em;
		margin-bottom: 1.5em;

		@include desktop {
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
		}
	}
	.card-content {
		&__heading {
			font-weight: 700;
			line-height: 0;
		}

		&__body {
			@include desktop {
				width: 32.5em;
			}

			@include desktop-large {
				width: 42.5em;
			}
		}
	}

	.tag-container {
		display: flex;
		flex-wrap: wrap;

		@include desktop {
			display: flex;
		}
	}

	.more-info {
		display: none;

		@include desktop {
			display: flex;
		}
	}
</style>
