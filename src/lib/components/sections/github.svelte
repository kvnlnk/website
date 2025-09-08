<script>
	import { GITHUB } from '$lib/config.js';
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-4" id="github">
	<h2
		class="bg-gradient-to-r from-white via-success-500 to-success-500 bg-clip-text p-4 text-5xl font-bold whitespace-nowrap text-transparent"
	>
		Discover my code
	</h2>
	<p class="max-w-xl text-center text-lg text-surface-300">
		I share all my open-source projects, contributions, and experiments on GitHub. Feel free to
		explore and let's build something together!
	</p>
	<a target="_blank" href={GITHUB} class="b rounded px-4 py-2 transition-colors">
		<span class="text">View GitHub Profile</span>
	</a>
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
