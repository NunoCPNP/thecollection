<script>
	import { fade } from 'svelte/transition';

	import AlbumCover from './AlbumCover.svelte';
	import AlbumInfo from './AlbumInfo.svelte';

	export let item;
</script>

<div class="container" in:fade>
	<AlbumCover
		cover={item.basic_information.cover_image}
		alt={item.basic_information.title}
		year={item.basic_information.year}
		id={item.id}
	/>
	<AlbumInfo band={item.basic_information.artists[0].name} album={item.basic_information.title} />
</div>

<style>
	.container {
		text-align: center;
	}
</style>
