<script lang="ts">
	import InfoIcon from '$lib/assets/icons/utils/InfoIcon.svelte';
	import AlertIcon from '$lib/assets/icons/utils/AlertIcon.svelte';
	import AlertTriangleIcon from '$lib/assets/icons/utils/AlertTriangleIcon.svelte';
	import CheckCircleIcon from '$lib/assets/icons/utils/CheckCircleIcon.svelte';

	export let type: 'error' | 'warn' | 'info' | 'success' | 'primary' = 'info';
	export let title: string = type[0].toUpperCase() + type.slice(1).toLocaleLowerCase();
	// Optional: overwrite icon by passing Icon component, or disable icon all together by passing null
	export let icon: Function | null = getIcon();

	function getIcon(): Function {
		switch (type) {
			case 'error':
				return AlertIcon;
			case 'warn':
				return AlertTriangleIcon;
			case 'info':
				return InfoIcon;
			case 'success':
				return CheckCircleIcon;
			default:
				return InfoIcon;
		}
	}
</script>

<div class="alert-wrapper">
	<div class="alert alert-{type}">
		<div class="alert-icon">
			{#if icon != null}
				<svelte:component this={icon} />
			{/if}
		</div>
		<div class="alert-content">
			<div class="alert-title">{title}</div>
			<div class="alert-message">
				<p>
					<slot class="slot" />
				</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.alert-wrapper {
		width: inherit;
		background-color: white;
		margin: 0 1rem 1rem 0;
		border-radius: 0.75rem;
		& .alert {
			height: 100%;
			padding: 1rem 0 1rem 1rem;
			border-radius: inherit;
			border: solid 2px;
			&-icon {
				float: left;
				margin-right: 0.5rem;
				& :global(svg) {
					width: 1.5rem;
					height: 1.5rem;
					fill: currentColor;
				}
			}
			&-content {
				color: inherit;
				& .alert-title {
					font-weight: bold;
					font-size: 1rem;
					margin-bottom: 0.5rem;
				}
				& .alert-message {
					font-size: 0.9rem;
					& p {
						margin: 0;
						color: inherit;
						& :global(*) {
							color: inherit;
						}
					}
				}
			}
			/* Theming */
			&-error {
				color: rgb(170, 30, 30);
				background-color: rgba(255, 30, 30, 0.1);
			}
			&-warn {
				color: rgb(170, 100, 30);
				background-color: rgba(255, 150, 30, 0.1);
			}
			&-info {
				color: rgb(30, 100, 170);
				background-color: rgba(30, 150, 255, 0.1);
			}
			&-success {
				color: rgb(30, 170, 30);
				background-color: rgba(30, 255, 30, 0.1);
			}
			/* Custom themes */
			&-primary {
				color: rgb(61, 78, 207);
				background-color: rgba(69, 88, 232, 0.1);
			}
		}
	}
</style>
