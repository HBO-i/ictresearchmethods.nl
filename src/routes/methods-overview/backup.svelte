<script lang="ts">
	import { allMethods } from '$lib/stores';

	import type { Method } from '$lib/types';
	import GoBack from '$lib/components/layout/GoBack.svelte';

	console.log($allMethods);

	// Can probably be shortened, but didn't feel like a prio right now
	const libraryArr = $allMethods.filter((item: Method) => {
		return item.category === 'library';
	});

	const fieldArr = $allMethods.filter((item: Method) => {
		return item.category === 'field';
	});

	const labArr = $allMethods.filter((item: Method) => {
		return item.category === 'lab';
	});

	const showroomArr = $allMethods.filter((item: Method) => {
		return item.category === 'showroom';
	});

	const workshopArr = $allMethods.filter((item: Method) => {
		return item.category === 'workshop';
	});

	const extraArr = $allMethods.filter((item: Method) => {
		return item.category === 'extra';
	});
</script>

<svelte:head>
	<title>ICT Research Methods — Research Methods for Design-Oriented Research in ICT</title>
</svelte:head>

<GoBack link="/" text="Go back" isClickable />

<div class="container">
	<div class="inner-container">
		<div class="table">
			<a href="/library" class="table-img">
				<img src="/img/methods/library/100px-Logo-library.png" alt="library" width="50" />
			</a>
			<ul class="table-header " style="background: var(--color-library)" aria-label="Library">
				{#each libraryArr as item}
					<li class="item" style="background: var(--color-library-light)">
						<a href={'/' + item.category + '/' + item.slug} title={item.name}>{item.name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="table">
			<a href="/field" class="table-img">
				<img src="/img/methods/field/100px-Logo-field.png" alt="field" width="50" />
			</a>
			<ul class="table-header" style="background: var(--color-field)" aria-label="Field">
				{#each fieldArr as item}
					<li class="item" style="background: var(--color-field-light)">
						<a href={'/' + item.category + '/' + item.slug} title={item.name}>{item.name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="table">
			<a href="/lab" class="table-img">
				<img src="/img/methods/lab/100px-Logo-lab.png" alt="lab" width="50" />
			</a>
			<ul class="table-header" style="background: var(--color-lab)" aria-label="Lab">
				{#each labArr as item}
					<li class="item" style="background: var(--color-lab-light)">
						<a href={'/' + item.category + '/' + item.slug} title={item.name}>{item.name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="table">
			<a href="/showroom" class="table-img">
				<img src="/img/methods/showroom/100px-Logo-showroom.png" alt="showroom" width="50" />
			</a>
			<ul class="table-header" style="background: var(--color-showroom)" aria-label="Showroom">
				{#each showroomArr as item}
					<li class="item" style="background: var(--color-showroom-light)">
						<a href={'/' + item.category + '/' + item.slug} title={item.name}>{item.name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="table">
			<a href="/workshop" class="table-img">
				<img src="/img/methods/workshop/100px-Logo-workshop.png" alt="workshop" width="50" />
			</a>
			<ul class="table-header" style="background: var(--color-workshop)" aria-label="Workshop">
				{#each workshopArr as item}
					<li class="item" style="background: var(--color-workshop-light)">
						<a href={'/' + item.category + '/' + item.slug} title={item.name}>{item.name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="table">
			<a href="/extra" class="table-img">
				<div style="height: 50px" />
			</a>
			<ul class="table-header" style="background: var(--color-extra)" aria-label="Extra">
				{#each extraArr as item}
					<li class="item" style="background: var(--color-extra-light)">
						<a href={'/' + item.category + '/' + item.slug} title={item.name}>{item.name}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style lang="scss" scoped>
	.container {
		overflow-x: auto;
	}

	.inner-container {
		display: flex;
	}

	.table {
		font-size: 1em;
		display: flex;
		flex-direction: column;

		@include desktop-small {
			font-size: 1.1em;
		}
	}

	.table-header {
		color: white;
		padding: 5px;
		padding: 0;
	}

	.item {
		padding: 5px;
		border: 1px solid white;
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
	}

	li {
		list-style: none;
		height: 40px;
		width: 150px;
		display: flex;
		align-items: center;
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
</style>
