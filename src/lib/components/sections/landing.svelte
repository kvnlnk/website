<div class="flex h-full w-full" id="home">
    <div class="m-auto h-3/4 w-2/3 rounded-lg p-4 flex">
        <div class="flex-1">
            <p
                class="bg-gradient-to-r from-white via-success-500 to-success-500 bg-clip-text p-4 text-9xl font-bold text-transparent whitespace-nowrap"
            >
                Kevin Lingk
            </p>
            <div
            class="animate-semi-rotate pointer-events-none absolute flex w-fit items-center justify-center text-success-500 p-4 text-5xl  opacity-10"
            style="--rotate-start: -15deg; --rotate-middle: 180deg; --rotate-end: -30deg;  --origin-x:55%; --origin-y:45%;"
        >
            {'{}'}
        </div>
            <p class="mt-4 p-4 text-3xl text-surface-400">Computer Science Student</p>
            <p class="mt-4 p-4 text-xl">
                I enjoy developing applications <br />
                and creating solutions that are efficient,<br />
                user-friendly, and maintainable.
            </p>
<div
  class="animate-semi-rotate pointer-events-none absolute flex w-fit items-center translate-x-50 justify-center text-success-500 p-4 text-5xl opacity-10"
  style="--rotate-start: 180deg; --rotate-middle: 360deg; --rotate-end: 170deg; --origin-x:55%; --origin-y:45%;"
>
  {'λ'}
</div>

            <!-- Add buttons for navigation -->
            <div class="mt-8 flex flex-row gap-4 p-4">
                <a href="#projects" class="b1 rounded px-4 py-2 transition-colors">
                    <span class="text1">View Projects</span>
                </a>
                <a href="#github" class="b2 rounded px-4 py-2 transition-colors">
                    <span class="text2">View GitHub</span>
                </a>
            </div>
        </div>
        <div class="flex-1 flex items-end justify-center">
            <div
            class="animate-semi-rotate pointer-events-none flex w-fit items-center justify-center text-success-500 p-4 text-5xl opacity-10"
            style="--rotate-start: 15deg; --rotate-middle: -180deg; --rotate-end: 55deg; --origin-x:45%; --origin-y:55%;"
            >
            <span class="font-mono text-5xl font-light tracking-wider">{'</>'}</span>
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
