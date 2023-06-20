<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} - Something went wrong</title>
</svelte:head>

{#if $page.status === 404}
	<h1>404 - This page doesn't exist</h1>
	<p>We're sorry, but we can't find it. Are you sure you are on the right page?</p>

	<a href="/"> Back to home</a>
{:else}
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
