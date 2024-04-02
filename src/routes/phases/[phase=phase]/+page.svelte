<script lang="ts">
	import type { PageData } from './$types';

	// import { onDestroy } from 'svelte';
	// import { page } from '$app/stores';
	import MethodList from '$lib/components/method/MethodList.svelte';
	import PhaseTab from '$lib/components/tabs/PhaseTab.svelte';

	// const phaseDescription = [
	// 	{
	// 		category: 'problem definition',
	// 		description:
	// 			'As an ICT student or professional, you need to solve all kind of ICT challenges. Answering the questions and tackling the problems or opportunities of your ICT project requires research and often a combination of various ICT research methods. The toolkit on this website offers you a set of possible research methods and a framework to select the appropriate (combination of) methods.'
	// 	},
	// 	{
	// 		category: 'analysis',
	// 		description:
	// 			'As an ICT student or professional, you need to solve all kind of ICT challenges. Answering the questions and tackling the problems or opportunities of your ICT project requires research and often a combination of various ICT research methods. The toolkit on this website offers you a set of possible research methods and a framework to select the appropriate (combination of) methods.'
	// 	},
	// 	{
	// 		category: 'design',
	// 		description:
	// 			'As an ICT student or professional, you need to solve all kind of ICT challenges. Answering the questions and tackling the problems or opportunities of your ICT project requires research and often a combination of various ICT research methods. The toolkit on this website offers you a set of possible research methods and a framework to select the appropriate (combination of) methods.'
	// 	},
	// 	{
	// 		category: 'evaluation',
	// 		description:
	// 			'As an ICT student or professional, you need to solve all kind of ICT challenges. Answering the questions and tackling the problems or opportunities of your ICT project requires research and often a combination of various ICT research methods. The toolkit on this website offers you a set of possible research methods and a framework to select the appropriate (combination of) methods.'
	// 	},
	// 	{
	// 		category: 'machine learning',
	// 		description:
	// 			'As an ICT student or professional, you need to solve all kind of ICT challenges. Answering the questions and tackling the problems or opportunities of your ICT project requires research and often a combination of various ICT research methods. The toolkit on this website offers you a set of possible research methods and a framework to select the appropriate (combination of) methods.'
	// 	}
	// ];

	export let data: PageData;

	// let matchedDescription = '';
	// const unsubscribe = page.subscribe(($page) => {
	// 	const routePhase = $page.params.category;
	// 	const descriptionObj = phaseDescription.find(
	// 		(description) => description.category === routePhase
	// 	);
	// 	matchedDescription = descriptionObj ? descriptionObj.description : '';
	// });

	// onDestroy(() => {
	// 	unsubscribe();
	// });
</script>

<svelte:head>
	<title>Phases — ICT Research Methods</title>
</svelte:head>

<h1 class="site-title">Methods</h1>
<p>
	As an ICT student or professional, you need to solve all kind of ICT challenges. Answering the
	questions and tackling the problems or opportunities of your ICT project requires research and
	often a combination of various ICT research methods. The toolkit on this website offers you a set
	of possible research methods and a framework to select the appropriate (combination of) methods
</p>
<PhaseTab />
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
