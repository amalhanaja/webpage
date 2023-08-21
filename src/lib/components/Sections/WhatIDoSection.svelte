<script lang="ts">
	import { Techs } from '$lib/models/Tech';
	import SectionHeader from '../SectionHeader.svelte';
	import Tech from '../Tech.svelte';
</script>

<section class="py-8">
	<SectionHeader title="What I do" />
	<h3 class="mt-4">Creative Android developer who loves to experiment with new technologies.</h3>

	<section class="techs my-8 flex flex-wrap justify-center gap-x-2 gap-y-[0.5rem]">
		{#each Techs as t}
			<Tech tech={t} />
		{/each}
	</section>
	<article class="ml-4">
		<ul class="list-disc">
			<li>Build high-quality Android / Web Applications.</li>
			<li>Work collaboratively with team members.</li>
			<li>Stay up-to-date on the latest technologies and trends.</li>
			<li>Deliver high-quality results on time and within budget.</li>
			<li>Integration of third party services such as Firebase, Supabase, Mixpanel, etc.</li>
		</ul>
	</article>
</section>

<style>
</style>
