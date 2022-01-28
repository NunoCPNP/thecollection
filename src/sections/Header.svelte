<script>
	import { collectionItemId } from '../store/store';

</script>

<header>
	<nav>
		<div class="title" on:click={() => collectionItemId.set(undefined)}>
			<h1>The Collection</h1>
		</div>
	</nav>
</header>

<style>
	header {
		background-color: var(--blackCoral);
		margin-bottom: 1rem;
	}

	nav {
		padding: 1rem 2rem;
	}

	.title {
		text-transform: uppercase;
		font-size: var(--heading-5);
		cursor: pointer;
	}
</style>
