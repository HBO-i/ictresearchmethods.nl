<script>
	import PaginationNav from './PaginationNav.svelte';
</script>

<div class="light-pagination-nav pagination-nav">
	<PaginationNav {...$$props} on:setPage />
</div>

<style lang="scss">
	.light-pagination-nav {
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
			color: hsl(200, 90%, 10%);
		}

		:global(.option.number),
		:global(.option.ellipsis) {
			padding: 10px 15px;
		}
		:global(.option:hover) {
			background: rgba(0, 0, 0, 0.1);
			cursor: pointer;
		}
		:global(.option.active) {
			color: hsl(200, 70%, 50%);
		}
	}
</style>
