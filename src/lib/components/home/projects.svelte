<script lang="ts">
	import type { Project, Skill } from '$lib/model';
	import github from '$lib/assets/images/icons/github.svg';

	export let projects: Project[];
	export let skills: Record<string, Skill>;

	const getProjectSkills = (project: Project): Skill[] => {
		return project.skills.map((tag) => skills[tag]);
	};
</script>

{#snippet skillItem(skill: Skill)}
	<span class="border-black border-2 px-2 py-2">{skill.name}</span>
{/snippet}

{#snippet projectItem(project: Project)}
	<div class="grid grid-cols-6 border-black border-4 shadow-xl hover:shadow-3xl transition-all duration-200">
		<div class="col-span-4 border-r-2 border-black">
			<img class="object-cover h-96 w-full" src={project.imageUrl} alt={project.name} />
			<div class="px-6 h-20 align-middle border-t-4 border-black flex items-center">
				<h3 class="text-2xl font-bold">{project.name}</h3>
			</div>
		</div>
		<div class="text-base col-span-2 border-l-2 border-black flex flex-col">
			<p class="text-base p-4 flex-1">{project.description}</p>
			<div class="flex flex-row gap-2 flex-wrap px-4 py-4 border-t-4 border-black uppercase font-semibold">
				{#each getProjectSkills(project) as skill}
					{@render skillItem(skill)}
				{/each}
			</div>
			<div class="flex flex-row px-4 h-20 items-center gap-4 border-t-4 border-black bg-red-300">
				<a
					href={project.repoUrl}
					class="btn-neobrutalism flex-1 flex py-2 px-3 gap-2 justify-center items-center"
				>
					<img src={github} alt="Github" class="size-8" />
					<span>Github</span>
				</a>
			</div>
		</div>
	</div>
{/snippet}

<section class="py-24">
	<div class="max-w-screen-xl mx-auto">
		<h2 class="text-5xl font-black mb-8 italic">Featured Projects</h2>
		<div class="flex flex-col gap-6">
			{#each projects as project}
				{@render projectItem(project)}
			{/each}
		</div>
	</div>
</section>
