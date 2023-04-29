<script lang="ts">
	export let link: string;
	export let text: string;
</script>

<p class="detail__details">
	<a href={link}>{'<'}</a>{text}
</p>

<style lang="scss">
	.detail {
		&__details {
			color: var(--color-black);
			font-size: 1.5em;
			font-weight: 500;
			display: flex;
			gap: 0.75em;
			align-items: center;

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
</style>
