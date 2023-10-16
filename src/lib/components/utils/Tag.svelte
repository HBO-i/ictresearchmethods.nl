<script lang="ts">
	import InfoIcon from '$lib/assets/icons/utils/InfoIcon.svelte';

	export let value: string;
	export let tooltipText: string | null = null;
	export let theme: string = 'primary'

	$: tagColor = `var(--color-${theme})`;
</script>

<span class="tag" style="background: {tagColor}">{value}
	<div class="info">{#if tooltipText}<InfoIcon/>{/if}</div>
	{#if tooltipText}
	
		<span class="tag-tooltip">{tooltipText}</span>
	{/if}
</span>

<style lang="scss">

	
	.tag {
		color: white;
		width: max-content;
		font-size: 0.9em;
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem;
		text-transform: uppercase;
		margin: 0.25em 0.5em 0.25em 0;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.25em;

		@include desktop-small {
			font-size: 0.8em;
		}
	}

	.tag-tooltip {
		display: none;

		@include desktop-small {
			text-transform: none;
			visibility: hidden;
			position: absolute;
			background-color: var(--color-tooltip-bg);
			color: var(--color-white);
			width: max-content;
			max-width: 15em;
			padding: 0.5em 1.5em;
			height: max-content;
			right: 50%;
			transform: translateX(50%);
			top: 140%;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			font-size: 1.15em;
			border-radius: 0.5em;
			z-index: 2;
		}
	}

	.tag:hover .tag-tooltip {
		@include desktop-small {
			visibility: visible;
			cursor: not-allowed;

			&::after {
				content: '';
				position: absolute;
				top: -60%;
				left: 50%;
				margin-left: -5px;
				border-width: 0.75em;
				border-style: solid;
				border-color: transparent transparent var(--color-tooltip-bg) transparent;
			}
		}
	}

	.info {
		display: none;

		@include desktop-small {
			display: flex;
		}

		fill: white;
	}
</style>
