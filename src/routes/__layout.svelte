<script>
    import Header from '../sections/Header.svelte';
	import Footer from '../sections/Footer.svelte';
</script>

<Header />
<slot></slot>
<Footer />

<style>
	:global(:root) {
		--richBlack: #0d1321;
		--prussianBlue: #1d2d44;
		--blackCoral: #3e5c76;
		--shadowBlue: #748cab;
		--eggShell: #f0ebd8;
		--white: #fefffe;

		--heading-1: 3.125rem;
		--heading-2: 2.5rem;
		--heading-3: 2rem;
		--heading-4: 1.6rem;
		--heading-5: 1.28rem;
		--heading-6: 1.024rem;
		--heading-7: 0.819rem;
	}

	:global(body) {
		background-color: var(--richBlack);
		color: var(--white);
	}
</style>