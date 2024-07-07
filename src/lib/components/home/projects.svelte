<script lang="ts">
	import type { Project, Skill } from '$lib/model';
	import github from '$lib/assets/images/icons/github.svg';
	import externalLink from '$lib/assets/images/icons/external-link.svg';
	import { getRandomNumberInRange } from '$lib/helpers/randomizer';
	import clsx from 'clsx';

	const { projects, skills } = $props<{ projects: Project[]; skills: Record<string, Skill> }>();

	const getProjectSkills = (project: Project): Skill[] => {
		return project.skills.map((tag) => skills[tag]);
	};

	const getRandomColor = (): string => {
		const colors = [
			'bg-green-600',
			'bg-red-600',
			'bg-amber-600',
			'bg-blue-600',
			'bg-violet-600',
			'bg-stone-600',
			'bg-rose-600',
			'bg-sky-600',
			'bg-lime-600'
		];
		const index = getRandomNumberInRange(0, colors.length - 1);
		return colors[index];
	};
</script>

{#snippet skillItem(skill: Skill)}
	<span class={clsx('border-black border-2 px-2 py-1 shadow-sm text-white', getRandomColor())}
		>{skill.name}</span
	>
{/snippet}

{#snippet projectItem(project: Project)}
	<div data-aos="fade-up">
		<div
			class="grid grid-cols-1 border-black border-4 shadow-xl hover:shadow-3xl transition-all duration-200 lg:grid-cols-6 bg-white"
		>
			<div
				class="border-black border-b-4 flex flex-col-reverse lg:col-span-4 lg:flex-col lg:border-b-0 lg:border-r-4"
			>
				<img
					class="object-cover h-96 w-full border-black"
					src={project.imageUrl}
					alt={project.name}
				/>
				<div
					class="px-6 h-20 align-middle border-b-4 border-black flex items-center lg:border-b-0 lg:border-t-4"
				>
					<h3 class="text-2xl font-bold w-full text-center lg:text-start">{project.name}</h3>
				</div>
			</div>
			<div class="border-black flex flex-col lg:col-span-2">
				<p class="p-4 flex-1 font-light">{project.description}</p>
				<div
					class="flex flex-row gap-2 flex-wrap px-4 py-4 border-t-4 border-black uppercase font-semibold"
				>
					{#each getProjectSkills(project) as skill}
						{@render skillItem(skill)}
					{/each}
				</div>
				<div class="flex flex-row px-4 h-20 items-center gap-4 border-t-4 border-black justify-end">
					{#if project.repoUrl}
						<a
							href={project.repoUrl}
							class="btn-neobrutalism flex-1 flex py-2 px-3 gap-2 justify-center items-center"
						>
							<img src={github} alt="Github" class="size-8" />
							<span>Github</span>
						</a>
					{/if}
					{#if project.link}
						<a
							href={project.link}
							class="btn-neobrutalism flex py-3 px-3 gap-2 justify-center items-center"
						>
							<img src={externalLink} alt="Github" class="size-5" />
						</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/snippet}

<section class="py-24 overflow-hidden px-6 relative">
	<div class="max-w-screen-xl mx-auto">
		<h2 data-aos="fade-up" class="text-5xl font-black mb-10 italic">Featured Projects</h2>
		<div class="flex flex-col gap-6">
			{#each projects as project}
				{@render projectItem(project)}
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		background: theme(backgroundColor.yellow.200) 50% / cover no-repeat
			url('/images/bg-pattern-grid-skew.svg');
		background-attachment: fixed;
	}
</style>
