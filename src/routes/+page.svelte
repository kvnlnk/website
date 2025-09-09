<script>
	// Import sections of the main page
	import Landing from '$lib/components/sections/landing.svelte';
	import Projects from '$lib/components/sections/projects.svelte';
	import GitHub from '$lib/components/sections/github.svelte';
</script>

<div class="h-full w-full overflow-y-auto bg-green-500">
	<div class="h-screen bg-surface-950 p-4"><Landing /></div>
	<div class="h-fit bg-surface-900 p-4"><Projects /></div>
	<div class="h-fit bg-surface-950 p-4"><GitHub /></div>
</div>
