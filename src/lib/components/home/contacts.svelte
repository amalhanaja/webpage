<script lang="ts">
	import type { Contact } from '$lib/model';

	export let contacts: Contact[];
</script>

{#snippet contactItem(contact: Contact)}
	<a
		class="flex flex-row items-center gap-3 bg-green-100 px-6 py-4 border-4 border-green-700 shadow-md shadow-green-700 transition-all duration-200 hover:shadow-xl hover:shadow-black hover:bg-white hover:border-black"
		href={contact.url}
	>
		<img src={contact.icon} class="size-8" alt={contact.label} />
		<div class="text-black">
			<div class="font-bold text-xl">{contact.label}</div>
			<div class="text-sm text-stone-700">{contact.username}</div>
		</div>
	</a>
{/snippet}

<section class="py-24 px-6">
	<div class="max-w-screen-xl mx-auto">
		<h3 class="text-5xl font-black italic mb-10">Let's Connect</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each contacts as contact}
				{@render contactItem(contact)}
			{/each}
		</div>
	</div>
</section>
