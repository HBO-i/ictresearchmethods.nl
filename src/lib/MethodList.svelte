<script lang="ts">
	import type { Method } from '$lib/types';
	import MethodCard from './MethodCard.svelte';

	export let methodsList: Array<Method>;
</script>

<section>
	{#each methodsList as method}
		<MethodCard {method} />
	{/each}
</section>

<style>
	/* your styles go here */
</style>
