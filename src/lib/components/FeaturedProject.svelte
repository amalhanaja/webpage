<script lang="ts">
	import type { FeaturedProjectModel } from '$lib/models/ProjectModel';

	export let project: FeaturedProjectModel;
</script>

<div
	class="hover:bg-primary-hover flex gap-4 rounded-lg bg-surface p-4 shadow-sm hover:bg-opacity-20"
>
	<img class="h-[72px] w-16" src={project.imgSrc} alt={project.title} />
	<div class="overflow-hidden">
		<h4 class="text-base font-semibold">{project.title}</h4>
		<div class="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
			{project.shortDescription}
		</div>
		<div class="mt-1 flex items-center gap-1">
			{#each project.tags as t, i (i)}
				{#if i == project.tags.length - 1}
					<a
						href={`/projects/tags/${t}`}
						class="overflow-hidden text-ellipsis text-xs font-medium text-primary"
					>
						{t}
					</a>
				{:else}
					<a href={`/projects/tags/${t}`} class="text-xs font-medium text-primary">{t}</a>
				{/if}

				{#if i !== project.tags.length - 1}
					<span class="text-neutral">•</span>
				{/if}
			{/each}
		</div>
	</div>
</div>
