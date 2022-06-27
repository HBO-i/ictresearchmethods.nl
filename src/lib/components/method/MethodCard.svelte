<script lang="ts">
	import type { Method } from '$lib/types';

	export let method: Method;
</script>

<article>
	<div class="card-heading">
		<div class="card-heading__img">
			<img src={method.image} class="img" alt="" />
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
			{#if method.phase}
				{#each method.phase as phase}
					<div class="tag-container__tag">{phase}</div>
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
	}
	h1 {
		font-weight: 500;
		margin: 0.2em 0;
		font-size: 1.1em;
		width: 10em;
		color: var(--color-black);
	}
	h2 {
		color: var(--color-primary);
		font-size: 1em;
		font-weight: normal;
		line-height: 0;
		text-transform: capitalize;
	}

	.card-heading {
		display: flex;
		align-items: center;
		gap: 1em;
		margin-bottom: 1.5em;
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
	}

	.tag-container {
		display: flex;
		flex-wrap: wrap;
		&__tag {
			color: var(--color-primary);
			border: 1px solid var(--color-primary);
			width: max-content;
			padding: 0.33em 1em;
			font-size: 0.9em;
			border-radius: 1em;
			text-transform: uppercase;
			margin: 0.25em 0.5em;
			margin-left: 0;
		}
	}

	.more-info {
		display: none;
	}

	// Desktop Styling
	@media screen and (min-width: 1200px) {
		article {
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			margin: 0.5em 0;

			&:hover {
				transform: scale(1.01);
				box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
			}
		}
		button {
			margin-left: 5em;
		}

		h1 {
			font-size: 1em;
		}

		h2 {
			font-size: 0.9em;
		}
		.card-heading {
			margin-bottom: 0;
		}
		.card-content__body {
			width: 42.5em;
		}

		.tag-container {
			display: flex;

			&__tag {
				margin: 0 0.25em;
				font-size: 0.8em;
			}
		}

		.more-info {
			display: flex;
		}
	}
</style>
