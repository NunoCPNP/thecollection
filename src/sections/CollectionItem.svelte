<script>
	import { onMount } from 'svelte';

    import API from "../services/api"

    import Loading from "../components/Loading.svelte"
    import AlbumCover from "../components/AlbumCover.svelte"
    import AlbumDescription from "../components/AlbumDescription.svelte"
    
    import { collection, collectionItemId } from '../store/store';

    const item = $collection.filter((item) => item.id == $collectionItemId)[0]

    let loading = true
    let data = undefined

    onMount(async () => {
		const response = await API.get(`/releases/${$collectionItemId}`);

        loading = false
        data = response
	});
</script>
    <div class="container">
        <AlbumCover 
            cover={item.basic_information.cover_image}
            alt={item.basic_information.title}
        />
        {#if loading}
            <Loading />
        {:else}
            <AlbumDescription data={data}/>
        {/if}
</div>

<style>
	.container {
		display: grid;
        grid-gap: 2rem;
		grid-template-columns: 1fr 2fr;
        margin-top: 2rem;
	}

    @media only screen and (max-width: 480px) {
		.container {
			grid-template-columns: 1fr;
		}
	}
</style>