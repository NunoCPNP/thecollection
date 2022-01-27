<script>
	export let cover;
	export let alt;
	export let year = undefined;
	export let id = undefined;
</script>

<div class="image-container">
	{#if id}
	<a href={id}>
		<img src={cover} alt={`${alt} album cover`} />
		{#if year}
			<div class="year">{year}</div>
		{/if}
	</a>
	{:else}
		<img src={cover} alt={`${alt} album cover`} />
		{#if year}
			<div class="year">{year}</div>
		{/if}
	{/if}
</div>

<style>
	a {
		color: inherit;
		cursor: pointer;
	} 

	.image-container {
		position: relative;
	}

	.image-container img {
		width: 100%;
		border-radius: 0.4rem;
	}

	.year {
		background-color: var(--richBlack);
		position: absolute;
		top: 1.5rem;
		right: 1rem;
		padding: 0.4rem 1rem;
		border-radius: 1rem;
		font-size: var(--heading-5);
		font-weight: 700;
	}
</style>
