<script>
    import { onMount } from "svelte"

    import API from "../services/api"
    
    import CollectionItem from "../components/CollectionItem.svelte"
    import Loading from "../components/Loading.svelte"

    let filter = ""
    let collection = []
    let filteredCollection = []
    let loading = true

    onMount(async () => {
        const response = await API.get("/users/nunocpereira/collection/folders/0/releases?token=QdmYHANUrrzjZEMfqWSSgbsUhrScCWDTRTtIrhGk&sort=artist")
        
        collection = response.releases
        filteredCollection = collection
        
        loading = false
    })

    const filterCollection = () => filteredCollection = collection.filter((item) =>  item.basic_information.artists[0].name.toLowerCase().includes(filter.toLowerCase()))
</script>

<main>
    {#if loading}
        <Loading />
    {:else}
        <div class="form__group field">
            <input type="input" class="form__field" placeholder="Search" name="search" id='search' bind:value={filter} on:input={filterCollection} required />
            <label for="search" class="form__label">SEARCH BY BAND</label>
        </div>
        <div class="container">
            {#each filteredCollection as item}
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

    .form__group {
        display:flex;
        position: relative;
        padding: 2rem 0;
        margin: 0 auto;
        width: 40%;
    }

    .form__field {
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid var(--eggShell);
        color: var(--white);
        outline: 0;
        font-size: 1.3rem;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
    }

    .form__field::placeholder {
        color: transparent;
    }

    .form__field:placeholder-shown ~ .form__label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
    }

    .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: var(--eggShell);
    }

    .form__field:focus {
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, var(--shadowBlue), var(--blackCoral));
        border-image-slice: 1;
    }

    .form__field:focus ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: var(--shadowBlue);
        font-weight: 700;
    }

    .form__field:required, .form__field:invalid {
        box-shadow: none;
    }
</style>
