<script>
    import { onMount } from "svelte"
    
    import API from "../services/api"
    import Header from "../sections/Header.svelte"
    import Footer from "../sections/Footer.svelte"
    import Loading from "../components/Loading.svelte"
    import CollectionList from "../sections/CollectionList.svelte"

    import { collection } from "../store/store"

    let loading = true

    onMount(async () => {
        const response = await API.get("/users/nunocpereira/collection/folders/0/releases?token=QdmYHANUrrzjZEMfqWSSgbsUhrScCWDTRTtIrhGk&sort=artist")
        
        collection.set(response.releases)
        loading = false
    })
</script>

<svelte:head>
	<title>TheCollection - Vinyl Records Collection</title>
</svelte:head>

<Header />
<main>
    {#if loading}
        <Loading />
    {:else}
        <CollectionList />
    {/if}
</main>
<Footer />

<style>
    :global(:root) {
        --richBlack: #0D1321;
        --prussianBlue: #1D2D44;
        --blackCoral: #3E5C76;
        --shadowBlue: #748CAB;
        --eggShell: #F0EBD8;
        --white: #FEFFFE;

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
</style>