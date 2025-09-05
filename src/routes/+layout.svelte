<script>
	import '../app.css';
	export let title = 'SvelteKit App';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="h-screen w-screen flex flex-col">
	<header class="p-4 border-b border-base-300 text-center">
		<h1 class="text-3xl font-bold">My SvelteKit App</h1>
	</header>
	<main class="flex-grow p-4 text-center flex flex-col justify-center items-center">
		<slot />
	</main>
	<footer class="p-4 border-t border-base-300 text-center">
		<p>&copy; 2024 My SvelteKit App</p>
	</footer>
</div>