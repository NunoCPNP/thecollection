<script>
	import { collectionItemId } from "../store/store"

	export let cover;
	export let alt;
	export let year = undefined;
	export let id = undefined;
</script>

<div class="image-container">
	<img src={cover} alt={`${alt} album cover`} on:click={() => collectionItemId.set(id)} />
	{#if year}
		<div class="year">{year}</div>
	{/if}
</div>

<style>	
	.image-container {
		position: relative;
	}
	
	.image-container img {
		cursor: pointer;
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
