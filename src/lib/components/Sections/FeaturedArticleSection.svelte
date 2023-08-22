<script lang="ts">
	import type { PostModel } from '$lib/models/PostModel';
	import FeaturedArticle from '../FeaturedArticle.svelte';
	import SectionHeader from '../SectionHeader.svelte';

	export let posts: PostModel[];
	export let allPostUrl: string;
</script>

<section class="py-8 w-full">
	<SectionHeader title="Articles" href={allPostUrl} />
	<h3 class="mt-4 font-medium">I love to share my knowledge through writing.</h3>
	<section class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
		{#each posts as post}
			<FeaturedArticle {post} />
		{/each}
	</section>
</section>
