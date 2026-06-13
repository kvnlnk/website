<script>
	import { GITHUB, GITHUB_USERNAME } from '$lib/config.js';
	import { onMount } from 'svelte';

	let repos = $state(0);
	let stars = $state(0);
	let totalCommits = $state(0);
	let followers = $state(0);
	let loading = $state(true);

	onMount(async () => {
		try {
			// Fetch user info
			const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
			const userData = await userRes.json();
			followers = userData.followers ?? 0;
			repos = userData.public_repos ?? 0;

			// Fetch repos to calculate stars
			const reposRes = await fetch(
				`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
			);
			const reposData = await reposRes.json();
			if (Array.isArray(reposData)) {
				repos = reposData.length;
				stars = reposData.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
			}

			// Estimate commits via GitHub search
			const commitRes = await fetch(
				`https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}&per_page=1`
			);
			if (commitRes.ok) {
				const commitData = await commitRes.json();
				totalCommits = commitData.total_count ?? 500;
			}
		} catch (_) {
			// Fallback to static values on rate limit
			repos = 12;
			stars = 0;
			followers = 1;
			totalCommits = 500;
		} finally {
			loading = false;
		}
	});
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-4" id="github">
	<h2
		class="bg-gradient-to-r from-white via-success-500 to-success-500 bg-clip-text p-4 text-2xl
		font-bold whitespace-nowrap text-success-500 text-transparent sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
	>
		Discover my code
	</h2>
	<p class="max-w-xl text-center text-sm text-surface-300 sm:text-base md:text-lg">
		I share all my open-source projects, contributions, and experiments on GitHub. Feel free to
		explore and let's build something together!
	</p>
	<div class="flex w-full flex-col items-center">
		<!-- Stats -->
		<div class="mt-8 grid w-full max-w-xl grid-cols-4 gap-6 text-center">
			<div class="flex flex-col items-center gap-2">
				<p class="text-2xl text-success-500 sm:text-3xl md:text-4xl">
					{#if loading}
						<span class="animate-pulse text-surface-600">--</span>
					{:else}
						{repos}+
					{/if}
				</p>
				<p class="text-xs text-surface-400 sm:text-sm">Repos</p>
			</div>
			<div class="flex flex-col items-center gap-2">
				<p class="text-2xl text-success-500 sm:text-3xl md:text-4xl">
					{#if loading}
						<span class="animate-pulse text-surface-600">--</span>
					{:else}
						{totalCommits.toLocaleString()}+
					{/if}
				</p>
				<p class="text-xs text-surface-400 sm:text-sm">Commits</p>
			</div>
			<div class="flex flex-col items-center gap-2">
				<p class="text-2xl text-success-500 sm:text-3xl md:text-4xl">
					{#if loading}
						<span class="animate-pulse text-surface-600">--</span>
					{:else}
						{stars}
					{/if}
				</p>
				<p class="text-xs text-surface-400 sm:text-sm">Stars</p>
			</div>
			<div class="flex flex-col items-center gap-2">
				<p class="text-2xl text-success-500 sm:text-3xl md:text-4xl">
					{#if loading}
						<span class="animate-pulse text-surface-600">--</span>
					{:else}
						{followers}
					{/if}
				</p>
				<p class="text-xs text-surface-400 sm:text-sm">Followers</p>
			</div>
		</div>

		<!-- Button -->
		<div class="mt-8 mb-8">
			<a
				target="_blank"
				href={GITHUB}
				class="b rounded px-4 py-3 text-sm transition-colors sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg"
			>
				<span class="text">View GitHub Profile</span>
			</a>
		</div>
	</div>
</div>

<style>
	.b {
		background: linear-gradient(to right, white 50%, var(--color-success-600) 50%);
		background-size: 200% 100%;
		background-position: right bottom;
		transition: all 0.5s ease-out;
	}

	.b:hover {
		background-position: left bottom;
	}

	.text {
		color: white;
	}
	.b:hover {
		box-shadow: 0 2px 16px var(--color-success-500);
	}

	.b:hover .text {
		color: var(--color-success-500);
	}
</style>
