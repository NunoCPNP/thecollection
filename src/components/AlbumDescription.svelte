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
            <div>Label</div>
            <div>
                {#each data.labels as label}
                    <div>{label.name} - {label.catno}</div>
                {/each}
            </div>
        </div>
        
        <div class="container-item">
            <div>Format :</div>
            <div>
                <span>{data.formats[0].name}</span>
                {#each data.formats[0].descriptions as description}
                    <span>{description}</span>
                {/each}
                <span>{data.formats[0].text}</span>
            </div>
        </div>

        <div class="container-item">
            <div>Country :</div>
            <div>{data.country}</div>
        </div>
        
        <div class="container-item">
            <div>Released :</div>
            <div>{data.year}</div>
        </div>

        <div class="container-item">
            <div>Genre :</div>
            <div>
                {#each data.genres as genre}
                    <span>{genre}</span>
                {/each}
            </div>
        </div>

        <div class="container-item">
            <div>Style :</div>
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
        grid-gap: 0.5rem;
    }

    .container-item {
        display: grid;
        grid-template-columns: auto 1fr;
    }

    .band-title h2 {
        background-color: var(--blackCoral);
        padding: 0.2rem 1rem;
        border-radius: 0.5rem;
    }
</style>