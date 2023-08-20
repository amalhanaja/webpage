<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	target="_blank"
	class="h-8 w-8 transition-all duration-150 hover:scale-125 hover:text-primary ease-in"><slot /></a
>
