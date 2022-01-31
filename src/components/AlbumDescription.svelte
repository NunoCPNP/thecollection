<script>
    export let data 

    console.log("DATA: ", data)
</script>

<div>

    <div class="container">

        <div>
            <h2>{data.artists[0].name}</h2>
            <h3>{data.title}</h3>
        </div>
    
        <div>

            <div>
                <div>Label</div>
                <div>
                    {#each data.labels as label}
                        <div>{label.name} - {label.catno}</div>
                    {/each}
                </div>
            </div>
            
            <div>
                <div>Format :</div>
                <div>
                    <span>{data.formats[0].name}</span>
                    {#each data.formats[0].descriptions as description}
                        <span>{description}</span>
                    {/each}
                    <span>{data.formats[0].text}</span>
                </div>
            </div>

            <div>
                <div>Country :</div>
                <div>{data.country}</div>
            </div>
            
            <div>
                <div>Released :</div>
                <div>{data.year}</div>
            </div>

            <div>
                <div>Genre :</div>
                <div>
                    {#each data.genres as genre}
                        <span>{genre}</span>
                    {/each}
                </div>
            </div>

            <div>
                <div>Style :</div>
                <div>
                    {#each data.styles as style}
                        <span>{style}</span>
                    {/each}
                </div>
            </div>

        </div>
        
        
        


    </div>
</div>

<style>
</style>