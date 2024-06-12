<script lang="ts">
	import clsx from 'clsx';

	const now = new Date();
	now.setMinutes(0);
	now.setHours(0);
	now.setSeconds(0);
	now.setMilliseconds(0);
	const lastYear = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
	lastYear.setDate(lastYear.getDate() - lastYear.getDay());
	const diff = now.getTime() - lastYear.getTime();
	const dateDiff = diff / (1000 * 60 * 60 * 24) + 1;
</script>

<section class="flex flex-col py-12">
	<div class="activity-card max-w-screen-xl w-full mx-auto px-6 py-9 border-black border-4">
		<h2 class="text-5xl font-black uppercase">Activities</h2>
		<div class="activity-container grid grid-flow-col-dense gap-[0.125rem] mx-auto mt-8">
			{#each Array(dateDiff) as d}
				<div class="size-5 bg-green-400 border-black border-2 mx-auto"></div>
			{/each}
		</div>
	</div>
</section>

<style>
	.activity-container {
		grid-template-rows: repeat(7, 20px);
	}
</style>
