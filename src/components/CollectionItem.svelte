<script>
    import { fade } from "svelte/transition";

    export let item
</script>

<div class="container" in:fade>
    <div class="image-container">
        <img src={item.basic_information.cover_image} alt={`${item.basic_information.title} album cover`}/>
    </div>
    <div class="text-container">
        <div class="band">{item.basic_information.artists[0].name}</div>
        {#if item.basic_information.year}
            <div class="album">{item.basic_information.title}, {item.basic_information.year}</div>
        {:else}
            <div class="album">{item.basic_information.title}</div>
        {/if}
    </div>
</div>

<style>
    .container {
        text-align: center;
    }

    .image-container img {
        cursor: pointer;
        width: 100%;
        border-radius: 0.4rem;
    }

    .text-container {
        margin-top: 1rem;
    }

    .band {
        text-transform: uppercase;;
        background-color: var(--blackCoral);
        padding: 0.4rem;
        margin-bottom: 1rem;
        border-radius: 0.4rem;
    }
</style>