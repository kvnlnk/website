<script>
	import { EMAIL } from '$lib/config.js';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitted = $state(false);
	let error = $state('');

	function handleSubmit(e) {
		const form = e.target;
		const data = new FormData(form);

		fetch('https://formsubmit.co/kevin.lingk@proton.me', {
			method: 'POST',
			body: data
		})
			.then((res) => {
				if (res.ok) {
					submitted = true;
					error = '';
					name = '';
					email = '';
					message = '';
				} else {
					error = 'Something went wrong. Please try again or email me directly.';
				}
			})
			.catch(() => {
				error = 'Network error. Please email me directly at ' + EMAIL;
			});

		// Prevent default redirect
		e.preventDefault();
	}
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-6 px-4 py-12" id="contact">
	<h2
		class="bg-gradient-to-r from-white via-success-500 to-success-500 bg-clip-text p-4 text-2xl
		font-bold whitespace-nowrap text-success-500 text-transparent sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
	>
		Get in touch
	</h2>
	<p class="max-w-xl text-center text-sm text-surface-300 sm:text-base md:text-lg">
		Have a question, idea, or just want to say hi? Drop me a message.
	</p>

	<div class="w-full max-w-lg">
		{#if submitted}
			<div class="rounded-lg border border-success-500/30 bg-success-500/10 p-6 text-center">
				<p class="text-lg text-success-400">Message sent! 🎉</p>
				<p class="mt-2 text-sm text-surface-400">I'll get back to you as soon as possible.</p>
			</div>
		{:else}
			<form onsubmit={handleSubmit} class="flex flex-col gap-4">
				<input type="hidden" name="_subject" value="Portfolio Contact" />
				<input type="hidden" name="_captcha" value="true" />
				<input type="text" name="_honey" class="hidden" style="display:none" />

				<div class="flex flex-col gap-2">
					<label for="name" class="text-sm text-surface-400">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						bind:value={name}
						required
						class="w-full rounded-lg border border-surface-700 bg-surface-800 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-surface-500 focus:border-success-500 focus:ring-1 focus:ring-success-500/50"
						placeholder="Your name"
					/>
				</div>

				<div class="flex flex-col gap-2">
					<label for="email" class="text-sm text-surface-400">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						bind:value={email}
						required
						class="w-full rounded-lg border border-surface-700 bg-surface-800 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-surface-500 focus:border-success-500 focus:ring-1 focus:ring-success-500/50"
						placeholder="your@email.com"
					/>
				</div>

				<div class="flex flex-col gap-2">
					<label for="message" class="text-sm text-surface-400">Message</label>
					<textarea
						id="message"
						name="message"
						bind:value={message}
						required
						rows="5"
						class="w-full resize-none rounded-lg border border-surface-700 bg-surface-800 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-surface-500 focus:border-success-500 focus:ring-1 focus:ring-success-500/50"
						placeholder="Your message..."
					></textarea>
				</div>

				{#if error}
					<p class="text-sm text-error-500">{error}</p>
				{/if}

				<div class="flex items-center justify-between gap-4">
					<p class="text-xs text-surface-500">Or email me directly at <a href="mailto:{EMAIL}" class="text-success-500 underline transition-colors hover:text-success-400">{EMAIL}</a></p>
					<button
						type="submit"
						class="b rounded px-6 py-3 text-sm transition-colors sm:px-8 sm:py-3 sm:text-base"
					>
						<span class="text">Send</span>
					</button>
				</div>
			</form>
		{/if}
	</div>
</div>

<style>
	.b {
		background: linear-gradient(to right, white 50%, var(--color-success-600) 50%);
		background-size: 200% 100%;
		background-position: right bottom;
		transition: all 0.5s ease-out;
		flex-shrink: 0;
	}

	.b:hover {
		background-position: left bottom;
		box-shadow: 0 2px 16px var(--color-success-500);
	}

	.text {
		color: white;
	}

	.b:hover .text {
		color: var(--color-success-500);
	}
</style>
