<script lang="ts">
	const highlight = ['font-semibold', 'transition-all', 'duration-150'];
	const highlightPrimary = [...highlight, 'hover:text-primary'].join(' ');
	const highlightSecondary = [...highlight, 'hover:text-secondary'].join(' ');
</script>

<footer class="bg-surface px-4 py-8 flex justify-center">
	<div class="max-w-md">
		Loosely designed in <span class={highlightPrimary}>Figma</span> and coded in
		<span class={highlightSecondary}>Visual Studio Code</span> by
		<span class={highlightPrimary}>Alfian Akmal Hanantio</span>. Built with
		<span class={highlightSecondary}>Svelte</span> and
		<span class={highlightPrimary}>Tailwind CSS</span>, deployed with
		<span class={highlightSecondary}>Vercel</span>. All text is set in the Outfit typeface.
	</div>
</footer>
