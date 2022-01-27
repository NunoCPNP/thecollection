<script>
	export let band;
	export let album;
</script>

<div class="container">
	<div class="band">
		<h3>{band}</h3>
	</div>
	<div class="album">
		<h4>{album}</h4>
	</div>
</div>

<style>
	.container {
		margin-top: 1rem;
	}

	.band {
		text-transform: uppercase;
		font-size: var(--heading-5);
		font-weight: 700;
		background-color: var(--blackCoral);
		padding: 0.4rem;
		margin-bottom: 1rem;
		border-radius: 0.4rem;
	}

	.album {
		padding: 0 0.5rem;
		text-transform: uppercase;
		font-size: var(--heading-5);
		font-weight: 700;
	}
</style>
