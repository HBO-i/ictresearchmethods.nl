<script lang="ts">
	export let link: string;
	export let text: string;
	export let isClickable = false;
</script>

{#if !isClickable}
	<p class="detail__details">
		<a href={link}>{'<'}</a>{text}
	</p>
{:else}
	<p class="detail__details clickable">
		<a href={link}>{'< '}<span>{text}</span></a>
	</p>
{/if}

<style lang="scss">
	.detail {
		&__details {
			color: var(--color-black);
			font-size: 1.5em;
			font-weight: 500;
			display: flex;
			gap: 0.75em;
			align-items: center;
			margin: 0;

			a {
				text-decoration: none;
				font-size: 1.5em;
				color: var(--color-black);
				font-weight: normal;

				&:hover {
					transform: scale(1.15);
				}
			}
		}
	}

	.clickable {
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 8px;
			span {
				font-size: 0.6em;
			}
			&:hover {
				transform: scale(1);
				color: var(--color-primary);
			}
		}
	}
</style>
