<script>
	import { page } from '$app/stores';
	import { collection } from '../store/store';

	let id = $page.params.id;

	let item =  $collection.filter(item => item.id == id)
</script>

<h1>{JSON.stringify(item, null, 2)}</h1>
