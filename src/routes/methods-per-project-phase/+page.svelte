<script lang="ts">
	import { allMethods } from '$lib/stores';
	import type { Method } from '$lib/types';

	const phaseOrder = [
		'problem definition',
		'analysis',
		'design',
		'realisation',
		'evaluation',
		'machine learning'
	];

	const methodsByPhase: { [key: string]: Method[] } = {};

	$allMethods.forEach((method: Method) => {
		method.phases.forEach((phase: string) => {
			if (!methodsByPhase[phase]) {
				methodsByPhase[phase] = [];
			}
			methodsByPhase[phase].push(method);
		});
	});

	const phases = phaseOrder.filter((phase) => methodsByPhase[phase]);
</script>

<svelte:head>
	<title>ICT Research Methods — Research Methods for Design-Oriented Research in ICT</title>
</svelte:head>

<h1>Methods per project phase</h1>

<div class="container">
	<div class="inner-container">
		{#each phases as phase}
			<div class="table">
				<ul class="table-header" style={`background: black`} aria-label={phase}>
					{#each methodsByPhase[phase] as item}
						<li class="item" style={`background: var(--color-${item.category}-light)`}>
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
		font-size: 0.9em;
		padding: 5px;
		text-transform: capitalize;
	}

	li {
		list-style: none;
		height: 40px;
		width: 160px;
		display: flex;
		align-items: center;
	}
</style>
