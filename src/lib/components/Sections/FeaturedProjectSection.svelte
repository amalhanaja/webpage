<script lang="ts">
	import type { FeaturedProjectModel } from '$lib/models/ProjectModel';
	import FeaturedProject from '../FeaturedProject.svelte';
	import SectionHeader from '../SectionHeader.svelte';

	export let projects: FeaturedProjectModel[];
</script>

<section class="py-8">
	<SectionHeader title="Projects" />
	<h3 class="mt-4 font-medium">A glimpse into my work</h3>
	<section class="mt-6 grid grid-cols-1 gap-4">
		{#each projects as project}
			<FeaturedProject {project} />
		{/each}
	</section>
</section>
