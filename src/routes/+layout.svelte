<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<AppBar />
<main class="px-4">
	<slot />
</main>
<Footer />
