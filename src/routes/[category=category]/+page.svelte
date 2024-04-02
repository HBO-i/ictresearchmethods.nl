<script lang="ts">
	import type { PageData } from './$types';

	import { onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import MethodList from '$lib/components/method/MethodList.svelte';
	import CategoryTab from '$lib/components/tabs/CategoryTab.svelte';

	const categoryDescriptions = [
		{
			category: 'library',
			description:
				'Library research is done to explore what is already done and what guidelines and theories exist that could help you further your design. Since the advent of the internet library research is also called desk research.'
		},
		{
			category: 'field',
			description:
				'Field research is done to explore the application context. You apply a field strategy to get to know your end users, their needs, desires and limitations as organizational and physical contexts in which they will use your product.'
		},
		{
			category: 'workshop',
			description:
				'Workshop research is done to explore opportunities. Prototyping, sketching and co-creation activities are all ways to gain insights in what is possible and how things could work.'
		},
		{
			category: 'lab',
			description:
				'Lab research is done to test your ideas with the users of your product. You use lab research to learn if things work out the way you intended them.'
		},
		{
			category: 'showroom',
			description:
				'Showroom research is done to test your ideas in relation to existing work. Showing your prototype to experts can be a form of showroom research or spelling out how your product is different from the competition.'
		}
	];

	export let data: PageData;

	let matchedDescription = '';
	const unsubscribe = page.subscribe(($page) => {
		const routeCategory = $page.params.category;
		const descriptionObj = categoryDescriptions.find(
			(description) => description.category === routeCategory
		);
		matchedDescription = descriptionObj ? descriptionObj.description : '';
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<svelte:head>
	<title>Category {data.result[0].category} — ICT Research Methods</title>
</svelte:head>

<h1 class="site-title">Methods</h1>
<p>{matchedDescription}</p>
<CategoryTab />
<MethodList methodsArray={data.result} />

<style lang="scss">
	h1 {
		font-weight: 500;
		font-size: 1.25em;
		margin: 1em;
		width: 100%;
		text-align: center;

		@include desktop-small {
			text-align: left;
			margin-left: 0;
		}
	}

	p {
		max-width: 100%;
		padding: 0 0.75em;

		@include tablet {
			padding: 0;
		}
	}
</style>
