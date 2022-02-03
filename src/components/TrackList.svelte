<script>
    export let data
</script>

<div class="title">TrackList</div>
<div class="container">
    {#each data.tracklist as track}
        {#if track.type_ === "track"}
            <div>{track.position}</div>
            <div>{track.title}</div>
            <div>{track.duration}</div>
        {/if}
    {/each}
</div>

<style>
    .title {
        background-color: var(--blackCoral);
        margin-top: 1rem;
        padding: 0.2rem 1rem;
        border-radius: 0.5rem;
    }

    .container {
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-gap: 0 1rem;
        padding: 1rem;
    }
</style>