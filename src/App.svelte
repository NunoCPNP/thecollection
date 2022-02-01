<script>
	import { onMount } from 'svelte';

	import API from './services/api';
	import Loading from './components/Loading.svelte';
	import CollectionList from './sections/CollectionList.svelte';
	import CollectionItem from "./sections/CollectionItem.svelte";
    import Header from './sections/Header.svelte';
	import Footer from './sections/Footer.svelte';

	import { collection, collectionItemId } from './store/store';

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

<Header />
<main>
	{#if loading}
		<Loading />
	{:else}
		{#if $collectionItemId}
			<CollectionItem />
		{:else}
			<CollectionList />
		{/if}
	{/if}
</main>
<Footer />

<style>
	:global(:root) {
		--richBlack: #0d1321;
		--prussianBlue: #1d2d44;
		--blackCoral: #3e5c76;
		--shadowBlue: #748cab;
		--eggShell: #f0ebd8;
		--white: #fefffe;

		--heading-1: 3.125rem;
		--heading-2: 2.5rem;
		--heading-3: 2rem;
		--heading-4: 1.6rem;
		--heading-5: 1.28rem;
		--heading-6: 1.024rem;
		--heading-7: 0.819rem;
	}

	:global(body) {
		background-color: var(--richBlack);
		color: var(--white);
	}

	:global(input[type="text"]) {
		font-size: inherit;
	}

	main {
		max-width: 120rem;
		margin: auto;
		padding: 0 2rem;
	}
</style>