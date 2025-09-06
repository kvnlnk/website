<script>
	import '../app.css';
	import { Header } from "$lib/components/header.svelte"
	import { Footer } from "$lib/components/footer.svelte"

	let title = 'SvelteKit App';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	<header class="sticky top-0 z-10 bg-red-500/80 backdrop-blur-sm p-4">
		<Header/>
	</header>

	<!-- Main -->
	<main class="">
		<slot />
	</main>

	<!-- Footer -->
	<footer class="bg-blue-500 p-4">
		<Footer/>
	</footer>
</div>