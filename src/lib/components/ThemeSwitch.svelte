<script lang="ts">
	import { isJavaScriptDisabled } from '$lib/stores';
	import Moon from '$lib/assets/icons/theme/moon.svelte';
	import Sun from '$lib/assets/icons/theme/sun.svelte';
	import { isDarkMode, themeState } from '$lib/stores/themeStore';

	const toggleDarkMode = () => {
		themeState.set($themeState === 'dark' ? 'light' : 'dark');
	};
</script>

{#if !$isJavaScriptDisabled}
	<div
		on:click={toggleDarkMode}
		class="toggle"
		class:dark={$isDarkMode}
		class:light={!$isDarkMode}
		data-testid="themeToggle"
	>
		<div class="toggle-switch" class:right={$isDarkMode} class:left={!$isDarkMode}>
			{#if $isDarkMode}
				<Moon />
			{:else}
				<Sun />
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	.toggle {
		border-radius: 10px;
		width: 175px;
		box-sizing: border-box;
		display: flex;

		&:hover {
			cursor: pointer;
		}
	}

	.light {
		background: linear-gradient(346.78deg, #f7fcfc 0%, #fafcfa 100%);
		border: 1px solid rgba(0, 0, 0, 0.04);
		box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.1);
	}

	.dark {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: inset 0 5px 10px rgba(255, 255, 255, 0.1);
	}

	.toggle-switch {
		margin: 2px;
		padding: 15px 35px;
		border-radius: 8px;
		background-color: var(--color-white);
		transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	}

	.left {
		transform: translateX(0%);
	}

	.right {
		transform: translateX(90%);
	}
</style>
