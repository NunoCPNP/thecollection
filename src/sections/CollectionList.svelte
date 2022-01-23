<script>
    import { onMount } from "svelte"

    import CollectionItem from "../components/CollectionItem.svelte"
    import Loading from "../components/Loading.svelte"

    let collection = []
    let loading = true

    onMount(async () => {
        let cenas = await fetch("https://api.discogs.com/users/nunocpereira/collection/folders/0/releases?token=QdmYHANUrrzjZEMfqWSSgbsUhrScCWDTRTtIrhGk&sort=artist") 
        let data = await cenas.json()

        collection = data.releases
        loading = false
    })
</script>

<main>
    {#if loading}
        <Loading />
    {:else}
        <div class="container">
            {#each collection as item}
                <CollectionItem  item={item} />
            {/each}
        </div>
    {/if}
</main>

<style>
    .container {
        margin: auto;
        padding: 2rem 2rem 8rem 2rem;
        min-height: 100vh;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        max-width: 120rem;
        grid-gap: 2rem;
    }
</style>
