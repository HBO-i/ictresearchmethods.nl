<script lang="ts">
	import { isMenuOpen } from '$lib/stores';
	import { removeNoScroll } from '$lib/utils/timeouts';

	function toggleIsOpen() {
		isMenuOpen.set(!$isMenuOpen);
		removeNoScroll();
	}
</script>

<button class="hamburger" on:click={toggleIsOpen}>{$isMenuOpen ? '✕' : '='}</button>

<style lang="scss">
	.hamburger {
		position: fixed;
		height: 1.25em;
		width: 1.25em;
		background-color: var(--color-black);
		opacity: 0.9;
		bottom: 2.5%;
		right: 2.5%;
		padding: 0.75em;
		border-radius: 50%;
		color: var(--color-white);
		font-size: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.2s ease-out;
		z-index: 2; // @TODO: z-index.scss
		border: none;

		@include desktop-small {
			display: none;
		}

		&:active {
			transform: scale(0.9);
		}
	}
</style>
