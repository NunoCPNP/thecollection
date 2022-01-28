<script>
    import AlbumCover from "../components/AlbumCover.svelte"
    import { collection, collectionItemId } from '../store/store';

    const item = $collection.filter((item) => item.id == $collectionItemId)[0]

    let labels = item.basic_information.labels

</script>

<div class="container">
    <AlbumCover 
        cover={item.basic_information.cover_image}
        alt={item.basic_information.title}
    />
    <div>
        <div class="main-info">
            <h2>{item.basic_information.artists[0].name}</h2>
            <h3>{item.basic_information.title}</h3>
            <div>{item.basic_information.year}</div>
        </div>
        <div>
            {#each labels as label}
                <div>{label.name} - {label.catno}</div>
            {/each}
        </div>
    </div>
</div>

<style>
	.container {
		display: grid;
        grid-gap: 2rem;
		grid-template-columns: 1fr 2fr;
        margin-top: 2rem;
	}

    @media only screen and (max-width: 480px) {
		.container {
			grid-template-columns: 1fr;
		}
	}

    .main-info {
        margin-bottom: 2rem;
    }
</style>