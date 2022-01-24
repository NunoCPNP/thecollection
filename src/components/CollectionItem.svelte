<script>
    import { fade } from "svelte/transition";

    import Band from "./Band.svelte"
    import Album from "./Album.svelte"
    import AlbumCover from "./AlbumCover.svelte"

    export let item
</script>

<div class="container" in:fade>
    <AlbumCover cover={item.basic_information.cover_image} alt={item.basic_information.title} year={item.basic_information.year}/>
    <div class="text-container">
        <Band band={item.basic_information.artists[0].name} />
        <Album album={item.basic_information.title} />
    </div>
</div>

<style>
    .container {
        text-align: center;
    }

    .text-container {
        margin-top: 1rem;
    }
</style>