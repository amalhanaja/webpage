<script lang="ts">
	import HeroSection from '$lib/components/Sections/HeroSection.svelte';
	import WhatIDoSection from '$lib/components/Sections/WhatIDoSection.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<HeroSection socials={data.socials} />
<WhatIDoSection />
