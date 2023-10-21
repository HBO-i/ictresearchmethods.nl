<script lang="ts">
	import type { PageData } from './$types';
	import MethodList from '$lib/components/method/MethodList.svelte';
	import CategoryTab from '$lib/components/tabs/CategoryTab.svelte';
	import SiteDescription from '$lib/components/SiteDescription.svelte';

	import Alert from '$lib/components/utils/Alert.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Category {data.result[0].category} — ICT Research Methods</title>
</svelte:head>

<Alert type="primary" title="Switch to old website">
	You can still access the old design, by visiting
	<a href="https://oud.ictresearchmethods.nl/Methods" target="_blank">this url</a>.
</Alert>

<h1 class="site-title">Methods</h1>
<SiteDescription />
<a href="/methods-overview">Show quick overview</a>
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
</style>
