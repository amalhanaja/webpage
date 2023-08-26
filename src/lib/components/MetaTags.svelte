<script lang="ts">
	type MetaContent = {
		url: string;
		title: string;
		description: string;
		imageUrl?: string;
		siteUrl: string;
	};
	export let content: MetaContent;
</script>

<svelte:head>
	<!-- Primary Tags  -->
	<link rel="canonical" href={content.url} />
	<meta name="title" content={content.title} />
	<meta name="description" content={content.description} />

	<!-- Open Graph - Facebook - Google -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={content.url} />
	<meta property="og:title" content={content.title} />
	<meta property="og:description" content={content.description} />
	<meta
		property="og:image"
		content={content.imageUrl ?? `${content.siteUrl}/assets/android-chrome-192x192.png`}
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={content.url} />
	<meta property="twitter:title" content={content.title} />
	<meta name="twitter:site" content="@amalhanaja" />
	<meta name="twitter:creator" content="@amalhanaja" />
	<meta property="twitter:description" content={content.description} />
	<meta
		property="twitter:image"
		content={content.imageUrl ?? `${content.siteUrl}/android-chrome-192x192.png`}
	/>
</svelte:head>
