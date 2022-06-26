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
		<div class="tag">Problem Definition</div>
	</div>
	<button class="btn btn-primary">More info</button>
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
		font-size: 1em;
		width: 10em;
		color: var(--color-black);
	}
	h2 {
		color: var(--color-primary);
		font-size: 0.9em;
		font-weight: normal;
		line-height: 0;
		text-transform: capitalize;
	}
	a {
		text-decoration: none;
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
			height: 4.375em;
			width: 4.375em;
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

	.tag {
		border: 1px solid var(--color-primary);
		width: max-content;
		padding: 0.33em 1em;
		font-size: 0.8em;
		border-radius: 1em;
		text-transform: uppercase;
		margin: 1em 0;
	}

	// Desktop Styling
	@media screen and (min-width: 1200px) {
		article {
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			margin: 0.75em 0;

			&:hover {
				transform: scale(1.01);
				box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
			}
		}
		button {
			margin-left: 5em;
		}
		.card-heading {
			margin-bottom: 0;
			&__img img {
				height: 5em;
				width: 5em;
			}
		}
		.card-content__body {
			width: 42.5em;
		}

		.tag {
			margin: 0;
		}
	}
</style>
