<script>
	import CollectionItem from '../components/CollectionItem.svelte';

	import { collection } from '../store/store';

	let filter = '';
	let filteredCollection = $collection;

	const filterCollection = () =>
		(filteredCollection = $collection.filter((item) =>
			item.basic_information.artists[0].name.toLowerCase().includes(filter.toLowerCase())
		));
</script>

<div class="form-group">
	<input
		type="input"
		class="form-field"
		placeholder="Search"
		name="search"
		id="search"
		bind:value={filter}
		on:input={filterCollection}
		required
	/>
	<label for="search" class="form-label">SEARCH BY BAND</label>
</div>
<div class="container">
	{#each filteredCollection as item}
		<CollectionItem {item} />
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		grid-gap: 2rem;
	}

	.form-group {
		display: flex;
		position: relative;
		padding: 2rem 0;
		margin: 0 auto;
		width: 40%;
	}

	@media only screen and (max-width: 780px) {
		.form-group {
			width: 80%;
		}
	}

	.form-field {
		font-family: inherit;
		width: 100%;
		border: 0;
		border-bottom: 2px solid var(--eggShell);
		color: var(--white);
		outline: 0;
		font-size: 1.6rem;
		padding: 7px 0;
		background: transparent;
		transition: border-color 0.2s;
	}

	.form-field::placeholder {
		color: transparent;
	}

	.form-field:placeholder-shown ~ .form-label {
		font-size: 1.3rem;
		cursor: text;
		top: 20px;
	}

	.form-label {
		position: absolute;
		top: 0;
		display: block;
		transition: 0.2s;
		font-size: 1rem;
		color: var(--eggShell);
	}

	.form-field:focus {
		padding-bottom: 6px;
		font-weight: 700;
		border-width: 3px;
		border-image: linear-gradient(to right, var(--shadowBlue), var(--blackCoral));
		border-image-slice: 1;
	}

	.form-field:focus ~ .form-label {
		position: absolute;
		top: 0;
		display: block;
		transition: 0.2s;
		font-size: 1rem;
		color: var(--shadowBlue);
		font-weight: 700;
	}

	.form-field:required,
	.form-field:invalid {
		box-shadow: none;
	}
</style>
