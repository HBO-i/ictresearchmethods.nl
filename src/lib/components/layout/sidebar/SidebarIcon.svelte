<script lang="ts">
	// Workaround component for using icons in routes array

	import Person from '$lib/assets/icons/sidebar/person.svelte';
	import Dashboard from '$lib/assets/icons/sidebar/dashboard.svelte';
	import Star from '$lib/assets/icons/sidebar/star.svelte';

	export let icon: string;
</script>

<div class="sidebar-icon">
	{#if icon === 'dashboard'}
		<Dashboard />
	{:else if icon === 'person'}
		<Person />
	{:else if icon === 'star'}
		<Star />
	{/if}
</div>

<style lang="scss">
	.sidebar-icon {
		display: none;

		@include desktop-small {
			display: flex;
		}
	}
</style>
