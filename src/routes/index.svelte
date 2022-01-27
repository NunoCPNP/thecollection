<script>
	import { onMount } from 'svelte';

	import API from '../services/api';
	import Loading from '../components/Loading.svelte';
	import CollectionList from '../sections/CollectionList.svelte';

	import { collection } from '../store/store';

	let loading = true;

	onMount(async () => {
		const response = await API.get(
			'/users/nunocpereira/collection/folders/0/releases?token=QdmYHANUrrzjZEMfqWSSgbsUhrScCWDTRTtIrhGk&sort=artist'
		);

		collection.set(response.releases);
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
