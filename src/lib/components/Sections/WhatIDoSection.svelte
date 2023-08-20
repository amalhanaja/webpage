<script lang="ts">
	import { Techs } from '$lib/models/Tech';
	import Kotlin from '../Icons/Kotlin.svelte';
	import Tech from '../Tech.svelte';
</script>

<section class="py-8">
	<h2 class=" rotate-2 text-4xl font-bold text-primary">What I do</h2>
	<div class="h-1 w-[120px] rotate-2 rounded-sm bg-secondary"></div>
	<h3 class="mt-4 text-sm">
		Creative Android developer who loves to experiment with new technologies.
	</h3>

	<section class="flex flex-wrap">
		{#each Techs as t}
			<Tech tech={t} />
		{/each}
	</section>
</section>
