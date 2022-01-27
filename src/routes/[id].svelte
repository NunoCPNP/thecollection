<script>
	import { page } from '$app/stores';
	import { collection } from '../store/store';

	import CollectionItem from "../sections/CollectionItem.svelte"

	let id = $page.params.id;
	let item =  $collection.filter(item => item.id == id)[0]
</script>

<svelte:head>
	<title>TheCollection - Vinyl Records Collection</title>
</svelte:head>

<main>
	<CollectionItem item={item} />
</main>

<style>
	main {
		padding: 2rem 2rem 8rem 2rem;
		max-width: 120rem;
		margin: 0 auto;
	}
</style>