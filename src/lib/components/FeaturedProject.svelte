<script lang="ts">
	import type { FeaturedProjectModel } from '$lib/models/ProjectModel';
	import ExternalLink from './Icons/ExternalLink.svelte';

	export let project: FeaturedProjectModel;
</script>

<div
	class="flex gap-4 rounded-lg bg-surface p-4 shadow-sm hover:bg-primary-hover hover:bg-opacity-20"
>
	<img class="h-16 w-16" src={project.imgSrc} alt={project.title} />
	<div class="overflow-hidden">
		<h4 class="text-base font-semibold">{project.title}</h4>
		<div class="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
			{project.shortDescription}
		</div>
		<div class="mt-1 flex items-center gap-1">
			{#each project.tags as t, i (i)}
				{#if i == project.tags.length - 1}
					<span class="overflow-hidden text-ellipsis text-xs font-medium text-primary">
						{t}
					</span>
				{:else}
					<span class="text-xs font-medium text-primary">{t}</span>
				{/if}

				{#if i !== project.tags.length - 1}
					<span class="text-neutral">•</span>
				{/if}
			{/each}
		</div>
		<div class="flex gap-1 text-sm">
			<a
				href={project.previewUrl}
				class="flex items-center gap-1 transition-all duration-150 hover:text-primary"
				><span class="inline-block h-4 w-4"><ExternalLink /></span>Preview</a
			>
		</div>
	</div>
</div>
