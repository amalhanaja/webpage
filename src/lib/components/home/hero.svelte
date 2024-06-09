<script>
	import { fly } from 'svelte/transition';
</script>

<section class="relative border-2 border-black">
	<div class="h-full w-full absolute left-0 flex -z-10">
		<div class="flex-1 flex-grow bg-red-300"></div>
		<div class="border-r-2 border-black"></div>
		<div class="flex-1 flex-grow bg-green-700"></div>
	</div>
	<div class="flex items-stretch mx-auto max-w-screen-xl">
		<article class="flex-1 flex-grow px-6 py-20">
			<h1 on:change={(e) => console.log(e)} class="text-6xl font-bold mb-1">
				I'm Alfian Hanantio,
			</h1>
			<h2 class="text-6xl font-bold">Software Engineer</h2>
			<p class="text-xl font-light mt-6 mb-8">
				Software Engineer with a passion for learning and pushing boundaries. Specialized in android
				development and always evolving.
			</p>
			<div class="flex flex-row gap-4">
				<a class="btn-neobrutalism inline-flex items-center" href="/">Contact Me</a>
				<a class="btn-neobrutalism inline-flex items-center" href="/">Contact Me</a>
			</div>
		</article>
		<figure class="flex-1 flex-grow px-6 py-20 flex justify-center">
			<img
				src="https://peanut.to/_next/static/media/peanutman-happy.70722911.svg"
				alt="hero-img"
				class=" size-96"
			/>
		</figure>
	</div>
</section>
