<script>
	import ProjectTile from '../ui/projectTile.svelte';
	import { PROJECTS } from '$lib/config';
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-4" id="projects">
	<h2 class="short-underline p-4 text-5xl font-bold whitespace-nowrap text-white">My Projects</h2>
	<div class="flex w-full flex-row flex-wrap items-stretch justify-center gap-8">
		{#each PROJECTS as project}
			<ProjectTile {...project} />
		{/each}
	</div>
</div>

<style>
	/* Credit: https://stackoverflow.com/questions/23502675/css-underline-less-than-width-of-headline */
	.short-underline {
		display: inline-block;
		position: relative;
	}

	.short-underline::after {
		content: '';
		position: absolute;
		left: 25%;
		bottom: -0.125rem;
		width: 50%;
		height: 0.3rem;
		background: var(--color-success-500);
	}
</style>
