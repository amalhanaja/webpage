<script lang="ts">
	import Hero from '$lib/components/home/hero.svelte';
	import Marquee from '$lib/components/shared/marquee.svelte';

	export let data;
</script>

<Hero />
<Marquee duration={11_000} classname="py-6 bg-black text-white font-bold text-xl">
	{#each data.techStacks as ts (ts)}
		<span class="px-4">⏺</span>
		<span class="px-4">{ts}</span>
	{/each}
</Marquee>
