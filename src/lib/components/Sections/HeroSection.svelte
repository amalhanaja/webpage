<script lang="ts">
	import type { SocialMediaInfo, SocialMediaType } from '$lib/models/SocialMediaModel';
	import type { ComponentType } from 'svelte';
	import Github from '../Icons/Github.svelte';
	import Instagram from '../Icons/Instagram.svelte';
	import LinkedIn from '../Icons/LinkedIn.svelte';
	import TwitterX from '../Icons/TwitterX.svelte';
	import Youtube from '../Icons/Youtube.svelte';
	import TikTok from '../Icons/TikTok.svelte';
	import SocialMedia from '../SocialMedia.svelte';
	export let socials: SocialMediaInfo[];

	function socialMediaIcon(socialMediaType: SocialMediaType): ComponentType {
		switch (socialMediaType) {
			case 'linkedin':
				return LinkedIn;
			case 'youtube':
				return Youtube;
			case 'twitter':
				return TwitterX;
			case 'tiktok':
				return TikTok;
			case 'github':
				return Github;
			case 'instagram':
				return Instagram;
		}
	}
</script>

<section class="py-4">
	<div class="text-sm">Welcome to My Site</div>
	<h1 class="mt-1 text-4xl font-bold">
		I'm <span class="text-primary">Alfian</span> <span class="text-secondary">Hanantio</span>
	</h1>
	<h2 class="text-2xl font-medium">Software Engineer</h2>
	<p class="mt-4 text-sm">
		I love writing code that takes things to the next level by creating highly performant
		applications, automated API integrations, building my own dev-tools, and creating stunning user
		experiences that make you feel WOW!
	</p>

	<p class="mt-5 text-sm">
		I am always keen to learn and explore new technologies, frameworks, and programming languages.
		Currently, I am exploring SvelteKit and Rust.
	</p>

	<div class="mt-5 flex gap-2">
		{#each socials as s}
			<SocialMedia href={s.url}>
				<svelte:component this={socialMediaIcon(s.key)}></svelte:component>
			</SocialMedia>
		{/each}
	</div>
</section>
