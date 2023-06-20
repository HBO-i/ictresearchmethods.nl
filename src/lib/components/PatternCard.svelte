<script lang="ts">
	export let patternTitle: string;
	export let patternCategories: string[];
	export let patternQuestions: string[];

	import { capitalizeFirstLetter, slugify } from '$lib/utils/format';
</script>

<a href={`/patterns/${slugify(patternTitle)}`}>
	<article>
		<picture class="img">
			<source type="image/webp" srcset={`/img/patterns/${slugify(patternTitle)}.webp`} />
			<source type="image/png" srcset={`/img/patterns/${slugify(patternTitle)}.png`} />
			<img
				src={`/img/patterns/${slugify(patternTitle)}.png`}
				loading="lazy"
				decoding="async"
				class="img"
				alt=""
				height="400"
				width="400"
			/>
		</picture>
		<div class="heading-container">
			<h1>{patternTitle}</h1>
			<div class="tag-container">
				{#each patternCategories as category}
					<div class="tag">{capitalizeFirstLetter(category)}</div>
				{/each}
			</div>
		</div>
		<div class="questions-container">
			<h2>Questions:</h2>
			<ul>
				{#each patternQuestions as question}
					<li>{question}</li>
				{/each}
			</ul>
		</div>
	</article>
</a>

<style lang="scss">
	a {
		text-decoration: none;
		width: 100%;

		&:hover {
			cursor: pointer;
			font-weight: inherit;
			transform: scale(1.1);
		}
	}
	article {
		box-sizing: border-box;
		background-color: var(--color-white);
		border-radius: 0.5rem;
		display: grid;
		grid-template-areas:
			'img			 heading	 heading	 heading'
			'questions questions questions questions';
		grid-template-columns: 7.5rem 1fr;
		width: 100%;
		height: 100%;
		padding: 1rem;

		@include tablet {
			grid-template-areas:
				'img	heading	 heading	 heading 	 heading'
				'img questions questions questions questions';
			grid-template-columns: 10.5rem 1fr;
			grid-gap: 1.5rem;
			align-items: center;
			width: 60rem;
		}

		@include desktop-small {
			width: 55rem;
		}

		@include desktop {
			width: 65rem;
		}

		@include desktop-large {
			width: 75rem;
		}

		&:hover {
			transform: scale(1.01);
			transition: transform 0.2s ease;
		}
	}

	.img {
		height: 6rem;
		width: 6rem;

		@include tablet {
			height: 10rem;
			width: 10rem;
		}
	}

	h1 {
		margin: 0;
		font-size: 1.25em;

		@include tablet-landscape {
			font-size: 1.4em;
		}
	}

	h2 {
		font-size: 1.1em;

		@include tablet-landscape {
			font-size: 1.2em;
		}
	}

	li {
		max-width: 30em;
		font-size: 1em;
		line-height: 1.4em;
	}

	.img {
		grid-area: img;
	}

	.heading-container {
		grid-area: heading;
	}

	.questions-container {
		grid-area: questions;
	}

	.tag-container {
		display: flex;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.tag {
		background-color: var(--color-tag-bg);
		color: var(--color-tag-text);
		font-size: 0.9em;
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem;

		@include desktop {
			font-size: 1em;
		}
	}
</style>
