<script>
	import { EMAIL, GITHUB, LINKEDIN } from '$lib/config.js';
	let year = new Date().getFullYear();
</script>

<div class="flex flex-col items-center gap-y-6 py-4" id="contact">
	<div class="flex flex-row gap-4">
		<a
			target="_blank"
			href="mailto:{EMAIL}"
			class="text-white transition-colors hover:text-success-500">E-Mail</a
		>
		<a target="_blank" href={GITHUB} class="text-white transition-colors hover:text-success-500"
			>GitHub</a
		>
		<a target="_blank" href={LINKEDIN} class="text-white transition-colors hover:text-success-500"
			>LinkedIn</a
		>
	</div>
	<div>
		<p class="text-center text-sm text-white">
			&copy; {year} kvnlnk. Created with lots of coffee.
		</p>
	</div>
</div>
