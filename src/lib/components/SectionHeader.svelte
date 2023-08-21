<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ArrowRight from './Icons/ArrowRight.svelte';

	export let title: string;
	export let href: string = '';
</script>

<section class="flex justify-between">
	<div class="rotate-2">
		<h2 class="text-4xl font-bold text-primary">{title}</h2>
		<div class="h-1 w-28 rounded-sm bg-secondary"></div>
	</div>
	{#if href}
		<a {href} class="flex items-center justify-center text-base font-semibold text-primary gap-1"
			>See More<span class="h-6 w-6"><ArrowRight /></span></a
		>
	{/if}
</section>
