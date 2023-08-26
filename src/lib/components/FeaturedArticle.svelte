<script lang="ts">
	import type { PostModel } from '$lib/models/PostModel';

	export let post: PostModel;

	const formattedDate = (date: Date): string => {
		return date.toLocaleDateString('default', { year: 'numeric', month: 'short' });
	};
</script>

<a
	href={post.link}
	target="_blank"
	class="flex gap-4 rounded-lg bg-surface p-4 shadow-sm hover:bg-primary-hover hover:bg-opacity-20"
>
	<article class="overflow-hidden">
		<h4 class="text-base font-semibold">{post.title}</h4>
		<p class="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
			{post.brief}
		</p>
		<div class="mt-1 text-xs text-neutral">
			{formattedDate(post.publishedAt)} • {post.readTime} min
		</div>
	</article>
	<img class="h-[72px] w-16" src={post.thumbnailUrl} alt={post.title} loading="lazy" />
</a>
