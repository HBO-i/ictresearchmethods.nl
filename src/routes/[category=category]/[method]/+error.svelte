<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} - Something went wrong</title>
</svelte:head>

{#if $page.status === 404}
	<iframe
		src="https://giphy.com/embed/m12EDnP8xGLy8"
		width="240"
		height="192"
		frameBorder="0"
		allowFullScreen
		title="not found giphy"
	/>

	<h1>404 - The method '{$page.params.method}' does not exist</h1>
	<p>We're sorry, but we can't find it. Are you sure you are looking for the right method?</p>

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
	<h1>{$page.status} - Whoopsie...</h1>

	<p>
		We're so sorry. Something went wrong. PANIC! But jokes aside, I hope the following error will
		make it more clear for you:
	</p>

	<p>{$page.error.message}</p>

	{#if $page.error.stack}
		<pre>{$page.error.stack}</pre>
	{/if}

	<p>If not, please contact us via GitHub and send us the error stack</p>
	<p>For now you can go back to <a href="/">home</a>.</p>
{/if}
