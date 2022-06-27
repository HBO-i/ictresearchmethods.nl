<script lang="ts">
	// Workaround component for using icons in routes array

	import Person from '$lib/icons/sidebar/person.svelte';
	import Dashboard from '$lib/icons/sidebar/dashboard.svelte';
	import Star from '$lib/icons/sidebar/star.svelte';

	export let icon: string;
</script>

{#if icon === 'dashboard'}
	<Dashboard />
{:else if icon === 'person'}
	<Person />
{:else if icon === 'star'}
	<Star />
{/if}
