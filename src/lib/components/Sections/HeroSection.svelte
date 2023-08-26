<script lang="ts">
	import type { SocialMediaInfo } from '$lib/models/SocialMediaModel';
	import IlHero from '../Illustrations/IlHero.svelte';
	import SocialMedia from '../SocialMedia.svelte';
	export let socials: SocialMediaInfo[];
</script>

<section class="flex items-center gap-8 py-4">
	<article>
		<div class="text-sm">Welcome to my site</div>
		<h1 class="mt-1 text-4xl font-bold">
			I'm <span class="text-primary">Alfian</span> <span class="text-secondary">Hanantio</span>
		</h1>
		<h2 class="text-2xl font-medium">Software Engineer</h2>

		<div class="my-5 text-sm">
			<p>
				I love writing code that takes things to the next level by creating highly performant
				applications, automated API integrations, building my own dev-tools, and creating stunning
				user experiences that make you feel WOW!
			</p>
			<p class="mt-5">
				I am always keen to learn and explore new technologies, frameworks, and programming
				languages. Currently, I am exploring SvelteKit and Rust.
			</p>
		</div>

		<div class="flex gap-2">
			{#each socials as s}
				<SocialMedia href={s.url} key={s.key}></SocialMedia>
			{/each}
		</div>
	</article>
	<figure class="hidden sm:inline">
		<IlHero />
	</figure>
</section>
