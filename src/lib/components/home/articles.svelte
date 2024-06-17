<script lang="ts">
	import type { ArticleSummary } from '$lib/model';

	const { articles } = $props<{ articles: ArticleSummary[] }>();
</script>

{#snippet articleItem(article: ArticleSummary)}
	<a
		data-aos="fade-up"
		href={article.link}
		class="flex flex-col bg-white border-black border-4 p-6 shadow-2xl shadow-blue-700 hover:shadow-3xl transition-all duration-200 hover:cursor-pointer ease-in-out"
	>
		<img src={article.coverImageUrl} class="h-60 object-cover mb-5" alt={article.title} />
		<div>
			<h3 class="text-2xl font-semibold">{article.title}</h3>
			<p class="text-base mt-2">{article.brief}</p>
		</div>
		<div class="flex flex-row flex-wrap gap-2 mt-4">
			{#each article.tags as tag}
				<span class="text-xs bg-black p-2 rounded-lg border-2 border-black text-white"
					>{tag.name}</span
				>
			{/each}
		</div>
	</a>
{/snippet}

<section class="py-24 px-6">
	<div class="max-w-screen-xl mx-auto flex flex-col">
		<h2
			data-aos="fade-up"
			class="italic font-black text-5xl uppercase mb-10 px-6 py-5 border-4 border-black bg-white w-fit"
		>
			Articles
		</h2>
		<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each articles as article}
				{@render articleItem(article)}
			{/each}
		</div>
		<a
			class="btn-neobrutalism mx-auto mt-10 uppercase bg-blue-700 text-white transition-all hover:bg-black duration-200"
			href="https://amalhanaja.hashnode.dev/"
			target="_blank">More Articles</a
		>
	</div>
</section>

<style>
	section {
		background: theme(backgroundColor.sky.200) 50% / cover no-repeat
			url('/images/bg-pattern-grid-curved.svg');
		background-attachment: fixed;
	}
</style>
