<script lang="ts">
	import { allMethods } from '$lib/stores';
	import type { Method } from '$lib/types';
	import GoBack from '$lib/components/layout/GoBack.svelte';

	const categoryOrder = ['library', 'field', 'lab', 'showroom', 'workshop', 'extra'];

	const methodsByCategory: { [key: string]: Method[] } = $allMethods.reduce((acc, item: Method) => {
		if (!acc[item.category]) {
			acc[item.category] = [];
		}
		acc[item.category].push(item);
		return acc;
	}, {});

	const categories = categoryOrder.filter((category) => methodsByCategory[category]);
</script>

<div class="container">
	<div class="inner-container">
		{#each categories as category}
			<div class="table">
				<a href="/{category}" class="table-img">
					<img
						src={`/img/methods/${category}/100px-Logo-${category}.png`}
						alt={category}
						width="50"
					/>
				</a>
				<ul
					class="table-header"
					style={`background: var(--color-${category})`}
					aria-label={category}
				>
					{#each methodsByCategory[category] as item}
						<li class="item" style={`background: var(--color-${category}-light)`}>
							<a href={`/${item.category}/${item.slug}`} title={item.name}>{item.name}</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>

<style lang="scss" scoped>
	.container {
		overflow-x: auto;
	}

	.inner-container {
		display: flex;
		padding-left: 24px;
	}

	.table {
		font-size: 1em;
		display: flex;
		flex-direction: column;

		@include desktop-small {
			font-size: 1.1em;
		}
	}

	.table-img {
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 24px;
		box-sizing: border-box;
		transition: all 0.1s ease-in;

		&:hover {
			transform: scale(1.05);
		}
	}

	.table-header {
		color: white;
		padding: 5px;
		padding: 0;
	}

	.item {
		padding: 5px;
		border: 1px solid var(--color-white);

    &:first-child {
        border-top: 2px solid var(--color-white);
    }
	}

	a {
		color: black;
		text-decoration: none;
	}

	a:hover {
		font-weight: normal;
		text-decoration: underline;
	}

	ul {
		margin: 0;
	}

	ul:before {
		content: attr(aria-label);
		font-weight: bold;
		padding: 5px;
		text-transform: capitalize;
	}

	li {
		list-style: none;
		height: 40px;
		width: 150px;
		display: flex;
		align-items: center;
	}
</style>
