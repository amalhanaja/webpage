<script lang="ts">
	import MetaTags from '$lib/components/MetaTags.svelte';
	import FeaturedArticleSection from '$lib/components/Sections/FeaturedArticleSection.svelte';
	import FeaturedProjectSection from '$lib/components/Sections/FeaturedProjectSection.svelte';
	import HeroSection from '$lib/components/Sections/HeroSection.svelte';
	import WhatIDoSection from '$lib/components/Sections/WhatIDoSection.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<MetaTags
	content={{
		title: 'Alfian Akmal Hanantio - Software Engineer',
		description: `I'm Alfian Akmal Hanantio. a software engineer specializing in android development based in Sidoarjo, Indonesia 🇮🇩`,
		url: data.url,
		siteUrl: data.siteUrl
	}}
/>
<HeroSection socials={data.socials} />
<WhatIDoSection />
<FeaturedProjectSection projects={data.projects} />
<FeaturedArticleSection posts={data.posts} allPostUrl={data.allPostUrl} />
