<script>
	export let title;
	export let description;
	export let link;
	export let imgSrc;
	export let tags = [];
	//const imgSrc = 'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<a
	target="_blank"
	href={link}
	class="preset-filled-surface-100-900 block max-w-md divide-y divide-surface-200-800 overflow-hidden
    card border-[1px] border-surface-200-800 shadow-lg card-hover hover:shadow-lg hover:shadow-green-500/50"
>
	<header>
		<img src={imgSrc} class="aspect-[21/9] w-full" alt="banner" />
	</header>

	<article class="space-y-4 p-4">
		<div>
			<h3 class="h3">{title}</h3>
		</div>
		<p class="opacity-60">
			{description}
		</p>
	</article>

	<footer class="flex flex-wrap items-center gap-4 p-4">
		{#each tags as tag}
			<span class="rounded bg-success-500/10 px-3 py-1 text-sm text-success-500">{tag}</span>
		{/each}
	</footer>
</a>
