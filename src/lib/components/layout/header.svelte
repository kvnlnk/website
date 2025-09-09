<script>
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="flex h-full w-full flex-row items-center justify-between md:px-10">
	<div class="w-full text-center md:text-left lg:w-auto">
		<h2
			class="h2 text-2xl text-success-500 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl"
		>
			dev.portfolio
		</h2>
	</div>
	<div class="hidden md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-2 lg:flex lg:flex-row lg:space-x-4">
		<a href="#home" class="text-white transition-colors hover:text-success-500">Home</a>
		<a href="#projects" class="text-white transition-colors hover:text-success-500">Projects</a>
		<a href="#github" class="text-white transition-colors hover:text-success-500">GitHub</a>
		<a href="#contact" class="text-white transition-colors hover:text-success-500">Contact</a>
	</div>
</div>

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
