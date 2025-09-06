<script>
    import { AppBar } from '@skeletonlabs/skeleton-svelte';
</script>

<AppBar classes="px-10" trailClasses="space-x-4 items-center">
   {#snippet lead()}
        <h2 class="h2">Portfolio</h2>
    {/snippet}

    {#snippet trail()}
        <a href="/" class="hover:text-success-500 transition-colors">Home</a>
        <a href="/projects" class="hover:text-success-500 transition-colors">Projects</a>
        <a href="/github" class="hover:text-success-500 transition-colors">GitHub</a>
        <a href="/contact" class="hover:text-success-500 transition-colors">Contact</a>
    {/snippet}
</AppBar>
