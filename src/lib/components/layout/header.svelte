<script>
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="flex h-full w-full flex-row items-center justify-between px-10">
	<div>
		<h2 class="h2 text-success-500">dev.portfolio</h2>
	</div>
	<div>
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
