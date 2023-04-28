<script lang="ts">
	import { allMethods } from '$lib/stores';

	// Can probably be shortened, but didn't feel like a prio right now
	const libraryArr = $allMethods.filter((item) => {
		return item.category === 'library';
	});

	const fieldArr = $allMethods.filter((item) => {
		return item.category === 'field';
	});

	const labArr = $allMethods.filter((item) => {
		return item.category === 'lab';
	});

	const showroomArr = $allMethods.filter((item) => {
		return item.category === 'showroom';
	});

	const workshopArr = $allMethods.filter((item) => {
		return item.category === 'workshop';
	});

	const extraArr = $allMethods.filter((item) => {
		return item.category === 'extra';
	});
</script>

<svelte:head>
	<title>ICT Research Methods — Research Methods for Design-Oriented Research in ICT</title>
</svelte:head>

<p class="detail__details">
	<a href="/">{'<'}</a>Go back
</p>

<div class="container">
	{#if $allMethods}
		<section>
			<h1>Library</h1>
			<ul>
				{#each libraryArr as item}
					<li>
						<a href={'/' + item.category + '/' + item.slug}>{item.name}</a>
					</li>
				{/each}
			</ul>
		</section>

		<section>
			<h1>Field</h1>
			<ul>
				{#each fieldArr as item}
					<li>
						<a href={'/' + item.category + '/' + item.slug}>{item.name}</a>
					</li>
				{/each}
			</ul>
		</section>
		<section>
			<h1>Lab</h1>
			<ul>
				{#each labArr as item}
					<li>
						<a href={'/' + item.category + '/' + item.slug}>{item.name}</a>
					</li>
				{/each}
			</ul>
		</section>
		<section>
			<h1>Showroom</h1>
			<ul>
				{#each showroomArr as item}
					<li>
						<a href={'/' + item.category + '/' + item.slug}>{item.name}</a>
					</li>
				{/each}
			</ul>
		</section>

		<section>
			<h1>Workshop</h1>
			<ul>
				{#each workshopArr as item}
					<li>
						<a href={'/' + item.category + '/' + item.slug}>{item.name}</a>
					</li>
				{/each}
			</ul>
		</section>

		<section>
			<h1>Extra</h1>
			<ul>
				{#each extraArr as item}
					<li>
						<a href={'/' + item.category + '/' + item.slug}>{item.name}</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</div>

<style lang="scss">
	.container {
		width: 75vw;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		font-size: 1.1em;
	}

	ul {
		padding-left: 0.75rem;

		li {
			margin: 0.33rem 0;
		}
	}

	.detail {
		&__details {
			color: var(--color-black);
			font-size: 1.5em;
			font-weight: 500;
			display: flex;
			gap: 0.75em;
			align-items: center;

			a {
				text-decoration: none;
				font-size: 1.5em;
				color: var(--color-black);
				font-weight: normal;

				&:hover {
					transform: scale(1.15);
				}
			}
		}
	}
</style>
