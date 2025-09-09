<script>
	import { GITHUB } from '$lib/config.js';
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
		<div class="mt-8 grid w-full max-w-xl grid-cols-3 gap-10 text-center">
			<div class="flex flex-col items-center gap-2">
				<p class="text-2xl text-success-500 sm:text-3xl md:text-4xl">3+</p>
				<p class="text-sm sm:text-base">Repos</p>
			</div>
			<div class="flex flex-col items-center gap-2">
				<p class="text-2xl text-success-500 sm:text-3xl md:text-4xl">500+</p>
				<p class="text-sm sm:text-base">Commits</p>
			</div>
			<div class="flex flex-col items-center gap-2">
				<p class="text-2xl text-success-500 sm:text-3xl md:text-4xl">0</p>
				<p class="text-sm sm:text-base">Stars</p>
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
