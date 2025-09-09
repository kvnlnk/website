<div class="flex h-full w-full" id="home">
	<div class="m-auto flex h-3/4 w-full rounded-lg md:w-2/3">
		<div class="min-w-full flex-1">
			<p
				class="bg-gradient-to-r from-white via-success-500 to-success-500 bg-clip-text
				text-2xl font-bold text-transparent sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl 2xl:text-9xl"
			>
				Kevin Lingk
			</p>
			<div
				class="animate-semi-rotate pointer-events-none absolute flex w-fit items-center justify-center text-5xl text-success-500 opacity-10"
				style="--rotate-start: -15deg; --rotate-middle: 180deg; --rotate-end: -30deg;  --origin-x:55%; --origin-y:45%;"
			>
				<span
					class="font-mono text-3xl font-light tracking-wider whitespace-nowrap sm:text-4xl md:text-5xl"
					>{'{}'}</span
				>
			</div>
			<p class="mt-4 text-lg text-surface-400 sm:text-xl md:text-2xl lg:text-3xl">
				Computer Science Student
			</p>
			<p class="mt-4 w-full max-w-md text-sm sm:text-base md:text-lg">
				I enjoy developing applications and creating solutions that are efficient, user-friendly,
				and maintainable.
			</p>
			<div
				class="animate-semi-rotate pointer-events-none absolute right-10 flex w-fit items-center justify-center text-5xl text-success-500 opacity-10 sm:right-50"
				style="--rotate-start: -90deg; --rotate-middle: 90deg; --rotate-end: -120deg; --origin-x:50%; --origin-y:50%;"
			>
				<span
					class="font-mono text-3xl font-light tracking-wider whitespace-nowrap sm:text-4xl md:text-5xl"
				>
					{'λ'}
				</span>
			</div>

			<!-- Add buttons for navigation -->

			<div class="mt-8 flex gap-4">
				<a href="#projects" class="b1 rounded px-4 py-2 text-center transition-colors">
					<span class="text1">View Projects</span>
				</a>
				<a href="#github" class="b2 rounded px-4 py-2 text-center transition-colors">
					<span class="text2">View GitHub</span>
				</a>
			</div>
			<div
				class="animate-semi-rotate pointer-events-none absolute bottom-20 flex w-fit items-center text-3xl text-success-500 opacity-10 sm:p-4 sm:text-4xl md:text-5xl"
				style="--rotate-start: 15deg; --rotate-middle: -180deg; --rotate-end: 55deg; --origin-x:45%; --origin-y:55%;"
			>
				<span
					class="font-mono text-3xl font-light tracking-wider whitespace-nowrap sm:text-4xl md:text-5xl"
					>{'</>'}</span
				>
			</div>
		</div>
	</div>
</div>

<style>
	/* Credit: https://codepen.io/kay8/pen/azKbjN*/
	.b1 {
		background: linear-gradient(to right, var(--color-success-600) 50%, white 50%);
		background-size: 200% 100%;
		background-position: right bottom;
		transition: all 0.5s ease-out;
	}

	.b2 {
		background: linear-gradient(to right, white 50%, var(--color-success-600) 50%);
		background-size: 200% 100%;
		background-position: right bottom;
		transition: all 0.5s ease-out;
	}

	.b1:hover,
	.b2:hover {
		background-position: left bottom;
	}

	.text1,
	.text2 {
		text-align: center;
		font-size: 16px;
		line-height: 30px;
		transition: all 0.6s ease-out;
	}

	.text1 {
		color: var(--color-success-500);
	}

	.text2 {
		color: white;
	}

	.b1:hover .text1 {
		color: white;
	}

	.b1:hover {
		box-shadow: 0 2px 16px white;
	}

	.b2:hover {
		box-shadow: 0 2px 16px var(--color-success-500);
	}

	.b2:hover .text2 {
		color: var(--color-success-500);
	}
</style>
