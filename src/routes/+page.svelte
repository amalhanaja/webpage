<script lang="ts">
	import Activities from '$lib/components/home/activities.svelte';
	import Hero from '$lib/components/home/hero.svelte';
	import Marquee from '$lib/components/shared/marquee.svelte';

	export let data;

	let skills = Object.entries(data.skills).map((entry) => entry[1].name.toUpperCase());
</script>

<Hero
	name={data.name.toUpperCase()}
	headline={data.headline}
	shortBio={data.shortBio}
	profilePicture={data.profilePicture}
/>
<Marquee duration={20_000} classname="py-6 bg-black text-white font-bold text-xl">
	{#each skills as skill}
		<span class="px-4">⏺</span>
		<span class="px-4">{skill}</span>
	{/each}
</Marquee>
<Activities />
