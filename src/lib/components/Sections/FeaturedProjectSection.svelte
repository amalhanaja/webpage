<script lang="ts">
	import FeaturedProject from '../FeaturedProject.svelte';
	import SectionHeader from '../SectionHeader.svelte';
</script>

<section class="py-8">
	<SectionHeader title="Projects" />
	<h3 class="mt-4 font-medium">A glimpse into my work</h3>
	<FeaturedProject
		project={{
			title: 'DyahAcademy',
			shortDescription: 'E-learning Application, Quizzes, and asdf',
			imgSrc: 'https://placehold.co/400',
			tags: ['Android', 'Typescript', 'PostgreSQL']
		}}
	/>
</section>
