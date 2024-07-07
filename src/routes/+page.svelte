<script lang="ts">
	import Activities from '$lib/components/home/activities.svelte';
	import Articles from '$lib/components/home/articles.svelte';
	import Contacts from '$lib/components/home/contacts.svelte';
	import Hero from '$lib/components/home/hero.svelte';
	import Projects from '$lib/components/home/projects.svelte';
	import Marquee from '$lib/components/shared/marquee.svelte';

	export let data;

	let skills = Object.entries(data.profile.skills).map((entry) => entry[1].name);
</script>

<svelte:head>
	<title>{data.profile.name} | {data.profile.headline}</title>
	<meta name="description" content={data.profile.shortBio} />
</svelte:head>

<Hero
	name={data.profile.name.toUpperCase()}
	headline={data.profile.headline}
	shortBio={data.profile.shortBio}
	profilePicture={data.profile.profilePicture}
/>
<Marquee duration={20_000} classname="py-6 bg-black text-white font-bold text-xl">
	{#each skills as skill}
		<span class="px-4">⏺</span>
		<span class="px-4 uppercase">{skill}</span>
	{/each}
</Marquee>
<Activities activities={data.activities} />
<div class="h-2 bg-black"></div>
<Articles articles={data.lastArticles} />
<Marquee duration={20_000} classname="py-6 bg-black text-white font-bold text-xl">
	{#each skills as skill}
		<span class="px-4">⏺</span>
		<span class="px-4 uppercase">{skill}</span>
	{/each}
</Marquee>
<Projects projects={data.featuredProjects} skills={data.profile.skills} />
<div class="h-2 bg-black"></div>
<Contacts contacts={data.contacts} />
