<script>
	import { AppBar } from '@skeletonlabs/skeleton-svelte';

	let menuOpen = $state(false);
</script>

<div class="flex h-full w-full flex-row items-center justify-between md:px-10">
	<div class="w-full text-center md:text-left lg:w-auto">
		<h2
			class="h2 text-2xl text-success-500 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl"
		>
			dev.portfolio
		</h2>
	</div>

	<!-- Desktop Nav -->
	<div class="hidden items-center gap-4 md:flex lg:gap-6">
		<a href="#home" class="text-white transition-colors hover:text-success-500">Home</a>
		<a href="#projects" class="text-white transition-colors hover:text-success-500">Projects</a>
		<a href="#github" class="text-white transition-colors hover:text-success-500">GitHub</a>
		<a href="#contact" class="text-white transition-colors hover:text-success-500">Contact</a>
	</div>

	<!-- Hamburger (Mobile) -->
	<button
		class="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-surface-800 md:hidden"
		onclick={() => (menuOpen = !menuOpen)}
		aria-label={menuOpen ? 'Close menu' : 'Open menu'}
	>
		{#if menuOpen}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
		{/if}
	</button>
</div>

<!-- Mobile Nav Overlay -->
{#if menuOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-surface-950/98 backdrop-blur-sm md:hidden"
		onclick={() => (menuOpen = false)}
	>
		<button
			class="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-surface-800"
			onclick={() => (menuOpen = false)}
			aria-label="Close menu"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
		</button>
		<a
			href="#home"
			class="text-3xl text-white transition-colors hover:text-success-500"
			onclick={() => (menuOpen = false)}
		>Home</a>
		<a
			href="#projects"
			class="text-3xl text-white transition-colors hover:text-success-500"
			onclick={() => (menuOpen = false)}
		>Projects</a>
		<a
			href="#github"
			class="text-3xl text-white transition-colors hover:text-success-500"
			onclick={() => (menuOpen = false)}
		>GitHub</a>
		<a
			href="#contact"
			class="text-3xl text-white transition-colors hover:text-success-500"
			onclick={() => (menuOpen = false)}
		>Contact</a>
	</div>
{/if}

<style>
	/* Credit: https://stackoverflow.com/questions/62867788/text-underline-animation-in-css-the-simplest-way */
	a {
		background: linear-gradient(currentColor 0 0) bottom left/ var(--underline-width, 0%) 0.1em
			no-repeat;
		display: inline-block;
		padding: 0 0.5em 0.2em;
		text-decoration: none;
		transition: background-size 0.5s;
	}

	a:hover {
		--underline-width: 100%;
	}
</style>
