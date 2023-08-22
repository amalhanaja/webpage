<script lang="ts">
	import FeaturedArticleSection from '$lib/components/Sections/FeaturedArticleSection.svelte';
	import FeaturedProjectSection from '$lib/components/Sections/FeaturedProjectSection.svelte';
	import HeroSection from '$lib/components/Sections/HeroSection.svelte';
	import WhatIDoSection from '$lib/components/Sections/WhatIDoSection.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<HeroSection socials={data.socials} />
<WhatIDoSection />
<FeaturedProjectSection projects={data.projects} />
<FeaturedArticleSection posts={data.posts} />
