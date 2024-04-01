<script lang="ts">
	export let label: string;
	export let fontSize = 16;
	export let checked = true;

	const uniqueID = Math.floor(Math.random() * 100);

	function handleClick(event: MouseEvent) {
		const target = event.target;

		const state = target.getAttribute('aria-checked');

		checked = state === 'true' ? false : true;
	}
</script>

<div class="switch" style="font-size:{fontSize}px">
	<label for="switch" id={`switch-${uniqueID}`}>{label}</label>
	<button
		id="switch"
		role="switch"
		aria-checked={checked}
		aria-labelledby={`switch-${uniqueID}`}
		on:click={handleClick}
	/>
</div>

<style>
	.switch {
		display: flex;
		align-items: center;
	}

	.switch button {
		width: 3em;
		height: 1.6em;
		position: relative;
		margin: 0 0 0 0.5em;
		background: var(--color-grey);
		border: none;
	}

	.switch button::before {
		content: '';
		position: absolute;
		width: 1.3em;
		height: 1.3em;
		background: #fff;
		top: 0.13em;
		right: 1.5em;
		transition: transform 0.3s;
	}

	.switch button[aria-checked='true'] {
		background-color: var(--color-primary);
	}

	.switch button[aria-checked='true']::before {
		transform: translateX(1.3em);
		transition: transform 0.3s;
	}

	.switch button:focus {
		box-shadow: 0 0px 0px 1px var(--color-primary);
	}

	.switch label {
		font-weight: bold;
	}

	.switch button {
		border-radius: 1.5em;
	}

	.switch button::before {
		border-radius: 100%;
	}

	.switch button:focus {
		box-shadow: 0 0px 8px var(--color-primary);
		border-radius: 1.5em;
	}
</style>
