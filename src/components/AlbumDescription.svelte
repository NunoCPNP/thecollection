<script>
    export let data 

    console.log("DATA: ", data)
</script>

<div>

    <div class="band-title">
        <h2>{data.artists[0].name}</h2>
        <h3>{data.title}</h3>
    </div>
    
    <div class="container">
    
        <div class="container-item">
            <div class="label">Label :</div>
            <div>
                {#each data.labels as label}
                    <div>{label.name} - {label.catno}</div>
                {/each}
            </div>
        </div>
        
        <div class="container-item">
            <div class="label">Format :</div>
            <div class="format">
                <span>{data.formats[0].name}</span>
                {#each data.formats[0].descriptions as description}
                    <span>{description}</span>
                {/each}
                {#if data.formats[0].text}
                    <span>{data.formats[0].text}</span>
                {/if}
            </div>
        </div>

        <div class="container-item">
            <div class="label">Country :</div>
            <div>{data.country}</div>
        </div>
        
        <div class="container-item">
            <div class="label">Released :</div>
            <div>{data.year}</div>
        </div>

        <div class="container-item">
            <div class="label">Genre :</div>
            <div>
                {#each data.genres as genre}
                    <span>{genre}</span>
                {/each}
            </div>
        </div>

        <div class="container-item">
            <div class="label">Style :</div>
            <div>
                {#each data.styles as style}
                    <span>{style}</span>
                {/each}
            </div>
        </div>

    </div>
        
</div>

<style>
    .container {
        display: grid;
        grid-gap: 0.8rem;
        padding: 1rem;
    }

    .container-item {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 1rem;
        align-items: center;
    }

    .band-title h2 {
        background-color: var(--blackCoral);
        padding: 0.2rem 1rem;
        border-radius: 0.5rem;
    }

    .band-title h3 {
        padding: 1rem;
    }

    .label {
        color: var(--shadowBlue);
        font-weight: 700;
    }

    .format span  {
        padding-right: 0.5rem;    
    }
</style>