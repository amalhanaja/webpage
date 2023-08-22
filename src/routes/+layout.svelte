<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<AppBar />
<main class="margin flex max-w-screen-md flex-col items-center px-4 m-auto">
	<slot />
</main>
<Footer />
