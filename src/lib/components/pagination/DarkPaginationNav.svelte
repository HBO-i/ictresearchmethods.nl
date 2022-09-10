<script>
	import PaginationNav from './PaginationNav.svelte';
</script>

<div class="dark-pagination-nav pagination-nav">
	<PaginationNav {...$$props} on:setPage />
</div>

<style lang="scss">
	.dark-pagination-nav {
		:global(.pagination-nav) {
			display: flex;
			justify-content: center;
			background: var(--color-white);
			border-radius: 3px;
			box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
		}

		:global(.option) {
			padding: 10px;
			display: flex;
			align-items: center;
			justify-content: center;
			transition: 0.2s all ease-out;
			user-select: none;
			color: hsl(200, 90%, 90%);
		}

		:global(.option svg path) {
			fill: hsl(200, 90%, 90%);
		}

		:global(.option:first-child) {
			border-radius: 3px 0 0 3px;
		}

		:global(.option:last-child) {
			border-radius: 0 3px 3px 0;
		}

		:global(.option.number),
		:global(.option.ellipsis) {
			padding: 10px 15px;
		}

		:global(.option:hover) {
			background: var(--color-bg);
			cursor: pointer;
		}
	}
</style>
