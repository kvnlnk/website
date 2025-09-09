<script>
	export let title;
	export let description;
	export let link;
	export let imgSrc;
	export let tags = [];
</script>

<a
	target="_blank"
	href={link}
	class="preset-filled-surface-100-900 block w-full max-w-sm divide-y divide-surface-200-800 overflow-hidden card border-[1px]
	border-surface-200-800 shadow-lg card-hover hover:shadow-lg hover:shadow-green-500/50 sm:max-w-md lg:max-w-lg"
>
	<header>
		<img src={imgSrc} class="aspect-[21/9] w-full object-cover" alt="banner" />
	</header>

	<article class="space-y-2 p-3 sm:space-y-4 sm:p-4">
		<div>
			<h3 class="text-lg font-bold sm:text-xl lg:text-2xl">{title}</h3>
		</div>
		<p class="text-sm opacity-60 sm:text-base">
			{description}
		</p>
	</article>

	<footer class="flex flex-wrap items-center gap-2 p-3 sm:gap-4 sm:p-4">
		{#each tags as tag}
			<span class="rounded bg-success-500/10 px-2 py-1 text-xs text-success-500 sm:px-3 sm:text-sm"
				>{tag}</span
			>
		{/each}
	</footer>
</a>
