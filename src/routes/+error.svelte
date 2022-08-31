<script context="module" lang="ts">
	export function load({ error, status }: { error: Record<symbol, symbol>; status: number }): {
		props: { error: Record<symbol, symbol>; status: number };
	} {
		return {
			props: { error, status }
		};
	}
</script>

<script lang="ts">
	export let status: number;
	export let error: Error;
</script>

<svelte:head>
	<title>{status} - Something went wrong</title>
</svelte:head>

{#if status === 404}
	<iframe
		src="https://giphy.com/embed/m12EDnP8xGLy8"
		width="240"
		height="192"
		frameBorder="0"
		allowFullScreen
		title="not found giphy"
	/>
	<h1>404 - This page doesn't exist</h1>
	<p>We're sorry, but we can't find it. Are you sure you are on the right page?</p>

	<a href="/"> Back to home</a>
{:else}
	<iframe
		src="https://giphy.com/embed/WpaVhEcp3Qo2TjwyI1"
		width="240"
		height="200"
		frameBorder="0"
		allowFullScreen
		title="error giphy"
	/>
	<h1>{status} - Whoopsie...</h1>

	<p>
		We're so sorry. Something went wrong. PANIC! But jokes aside, I hope the following error will
		make it more clear for you:
	</p>

	<p>{error.message}</p>

	{#if error.stack}
		<pre>{error.stack}</pre>
	{/if}

	<p>If not, please contact us via GitHub and send us the error stack</p>
	<p>For now you can go back to <a href="/">home</a>.</p>
{/if}
