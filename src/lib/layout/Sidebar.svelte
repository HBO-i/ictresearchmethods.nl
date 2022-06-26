<script>
	import Dashboard from '$lib/icons/dashboard.svelte';
	import Person from '$lib/icons/person.svelte';
	import Star from '$lib/icons/star.svelte';
</script>

<aside>
	<ul>
		<li>
			<a class="active" href="/">
				<Dashboard />
				Methods
			</a>
		</li>
		<li>
			<a href="/">
				<Person />
				About
			</a>
		</li>
		<li>
			<a href="/">
				<Star />
				Saved Methods
			</a>
		</li>
	</ul>
</aside>

<style lang="scss">
	aside {
		width: 250px;
		background-color: var(--color-white);
		padding: 1em 0;
		min-height: 100%;
		display: none;

		ul {
			display: flex;
			flex-direction: column;

			li {
				padding: 0 1em;

				a {
					text-decoration: none;
					color: var(--color-text-secondary);
					font-weight: 700;
					display: flex;
					align-items: center;
					gap: 1em;
					padding: 1em 2em;
					border-radius: 0.75em;
				}
			}
		}

		.img {
			height: 24px;
			width: 24px;
			border: 1px solid palegoldenrod;
			border-radius: 50%;
		}

		.active {
			background-color: var(--color-primary);
			color: var(--color-white);
		}
	}

	@media screen and (min-width: 1200px) {
		aside {
			display: block;
		}
	}
</style>
