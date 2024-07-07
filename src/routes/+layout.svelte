<script lang="ts">
	import Footer from '$lib/components/shared/footer.svelte';
	import 'aos/dist/aos.css';
	import '../app.css';

	import AOS from 'aos';
	$effect(() => {
		AOS.init();
	});
</script>

<main>
	<slot />
</main>
<Footer />
