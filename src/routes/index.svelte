<script>
	import { onMount } from 'svelte';

	import API from '../services/api';
	import Loading from '../components/Loading.svelte';
	import CollectionList from '../sections/CollectionList.svelte';

	import { collection } from '../store/store';

	let loading = true;

	onMount(async () => {
		if(sessionStorage.getItem("collection-data")) {
			collection.set(JSON.parse(sessionStorage.getItem("collection-data")))
			loading = false

			return
		}

		const response = await API.get(
			'/users/nunocpereira/collection/folders/0/releases?token=QdmYHANUrrzjZEMfqWSSgbsUhrScCWDTRTtIrhGk&sort=artist'
		);

		collection.set(response.releases);
		sessionStorage.setItem("collection-data", JSON.stringify(response.releases))
		loading = false;
	});
</script>

<svelte:head>
	<title>TheCollection - Vinyl Records Collection</title>
</svelte:head>

<main>
	{#if loading}
		<Loading />
	{:else}
		<CollectionList />
	{/if}
</main>

<style>
	main {
		padding: 2rem 2rem 8rem 2rem;
		max-width: 120rem;
		margin: 0 auto;
	}
</style>