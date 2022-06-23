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
	</div>
	<button class="btn btn-primary"
		><a href={'/' + method.category + '/' + method.slug}>More info</a></button
	>
</article>

<style lang="scss">
	article {
		background-color: var(--color-white);
		margin: 0.75em 0;
		padding: 2em;
		border-radius: 1.5em;
	}

	h1 {
		font-weight: 500;
		margin: 0.2em 0;
		font-size: 1em;
		width: 10em;
	}

	h2 {
		color: var(--color-primary);
		font-size: 0.9em;
		font-weight: normal;
		line-height: 0;
		text-transform: capitalize;
	}

	button a {
		text-decoration: none;
		color: var(--color-white);
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

	// Desktop Styling
	@media screen and (min-width: 1200px) {
		article {
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
		}

		button {
			margin-left: 5em;
		}

		.card-heading {
			margin-bottom: 0;

			&__img img {
				height: 5em;
				width: 5em;
				transition: 0.2s ease-in;

				&:hover {
					transform: scale(1.5);
				}
			}
		}

		.card-content__body {
			width: 42.5em;
		}
	}
</style>
