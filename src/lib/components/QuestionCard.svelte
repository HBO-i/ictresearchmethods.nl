<script lang="ts">
	export let questionTitle: string;
	export let questionPattern: string;

	import { capitalizeFirstLetter, slugify } from '$lib/utils/format';
	import Tag from './utils/Tag.svelte';
</script>

<a href={`/patterns/${slugify(questionPattern)}`} class="article-wrapper">
	<article>
		<div class="img-title">
			<picture class="img">
				<source type="image/webp" srcset={`/img/patterns/${slugify(questionPattern)}.webp`} />
				<source type="image/png" srcset={`/img/patterns/${slugify(questionPattern)}.png`} />
				<img
					src={`/img/patterns/${slugify(questionPattern)}.png`}
					loading="lazy"
					decoding="async"
					class="img"
					alt=""
					height="400"
					width="400"
				/>
			</picture>
			<h1>{questionTitle}</h1>
		</div>
		<p>{questionPattern}</p>
		<!-- <picture class="img">
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
					<a href={`/${category}/`}>
						<Tag theme={category} value={capitalizeFirstLetter(category)} />
					</a>
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
		</div> -->
	</article>
</a>

<style lang="scss">
	a {
		text-decoration: none;

		&:hover {
			cursor: pointer;
		}
	}

	article {
		box-sizing: border-box;
		background-color: var(--color-white);
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 100%;
		justify-content: space-between;
		width: 100%;
		padding: 1.5rem;
		height: 100%;

		&:hover {
			transform: scale(1.01);
			transition: transform 0.2s ease;
		}

		p {
			font-size: 1.2em;
			margin: 0;

			&:hover {
				text-decoration: underline;
				cursor: pointer;
			}

			&::after {
				content: ' ->';
			}
		}
	}

	.img {
		height: 7.5rem;
		border-radius: 10px;
		width: 100%;
		object-fit: contain;
		background-color: var(--color-bg);

		@include tablet {
			height: 10rem;
		}
	}

	h1 {
		margin: 0;
		font-size: 1.25em;

		@include tablet-landscape {
			font-size: 1.4em;
		}
	}

	.img-title {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>
