<script>
	// your script goes here
</script>

<article>
	<div class="card-heading">
		<div class="card-heading__img">
			<div class="img" />
		</div>
		<div class="card-heading__text">
			<h1>Available product analysis</h1>
			<h2>Library</h2>
		</div>
	</div>
	<div class="card-content">
		<p class="card-content__heading">Why?</p>
		<p class="card-content__body">
			Find out what you are planning to do has already been done (in full or in part) by someone
			else
		</p>
	</div>
	<button class="btn btn-primary">More info</button>
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
	}

	h2 {
		color: var(--color-primary);
		font-size: 0.9em;
		font-weight: normal;
		line-height: 0;
	}

	.card-heading {
		display: flex;
		gap: 1em;
		margin-bottom: 1.5em;

		&__text {
			display: flex;
			flex-direction: column-reverse;
			max-width: 50%;
		}

		&__img .img {
			height: 4.375em;
			width: 4.375em;
			border-radius: 1em;
			background-color: antiquewhite;
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
			max-width: fit-content;

			&:hover {
				transform: scale(1.005);
				cursor: pointer;
			}
		}

		button {
			margin-left: 5em;
		}
	}
</style>
