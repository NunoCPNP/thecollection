<script>
    import { onMount } from "svelte"
    
    import CollectionList from "../sections/CollectionList.svelte"
    import Loading from "../components/Loading.svelte"
    import API from "../services/api"

    let collection = []
    let loading = true

    onMount(async () => {
        const response = await API.get("/users/nunocpereira/collection/folders/0/releases?token=QdmYHANUrrzjZEMfqWSSgbsUhrScCWDTRTtIrhGk&sort=artist")
        
        collection = response.releases
        loading = false
    })
</script>

<main>
    {#if loading}
        <Loading />
    {:else}
        <CollectionList collection={collection} />
    {/if}
</main>