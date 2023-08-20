<script lang="ts">
	import type { SocialMediaType } from '$lib/models/SocialMediaModel';
	import type { ComponentType } from 'svelte';
	import Github from '$lib/components/Icons/Github.svelte';
	import Instagram from '$lib/components/Icons/Instagram.svelte';
	import LinkedIn from '$lib/components/Icons/LinkedIn.svelte';
	import TwitterX from '$lib/components/Icons/TwitterX.svelte';
	import Youtube from '$lib/components/Icons/Youtube.svelte';
	import TikTok from '$lib/components/Icons/TikTok.svelte';

	export let href: string;
	export let key: SocialMediaType;

	function getIcon(socialMediaType: SocialMediaType): ComponentType {
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

<a
	{href}
	target="_blank"
	class="h-8 w-8 transition-all duration-150 ease-in hover:scale-125 hover:text-primary"
>
	<svelte:component this={getIcon(key)} />
</a>
