<script>
	import '../app.css';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';

	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	let title = 'SvelteKit App';
</script>

<div class="grid grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	<header class="sticky top-0 z-10 border-b border-gray-800 bg-surface-950 p-4 shadow-2xl">
		<Header />
	</header>

	<!-- Main -->
	<main class="w-full">
		<slot />
	</main>

	<!-- Footer -->
	<footer class="bg-surface-900 p-4 shadow-md">
		<Footer />
	</footer>
</div>
