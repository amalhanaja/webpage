<script lang="ts">
	import { getLastYear } from '$lib/helpers/date';
	import { formatDuration, formatToyyyyMMdd } from '$lib/helpers/formatter';
	import type { Activity } from '$lib/model';
	import clsx from 'clsx';
	export let activities: Map<string, Activity[]>;
	export let activityDuration: Map<string, number>;

	const lastYear = getLastYear();

	const getActivities = (date: Date): Activity[] => {
		const formattedDate = formatToyyyyMMdd(date);
		return activities.get(formattedDate) ?? [];
	};

	const getFormattedDuration = (date: Date): string => {
		const formattedDate = formatToyyyyMMdd(date);
		const duration = activityDuration.get(formattedDate);
		if (!duration) return '';
		return formatDuration(duration);
	};

	const getColorLevel = (date: Date): string => {
		const contributionsCount = getActivities(date)
			.map((v) => v.count)
			.reduce((prev, current) => prev + current, 0);
		switch (true) {
			case contributionsCount == 0:
				return 'bg-white';
			case contributionsCount < 5:
				return 'bg-green-200';
			case contributionsCount < 10:
				return 'bg-green-400';
			case contributionsCount < 15:
				return 'bg-green-600';
			default:
				return 'bg-green-800';
		}
	};
</script>

{#snippet activityItem(date: Date)}
	<div
		class={clsx(
			'activity-item size-5 border-black border-1 hover:border-2 mx-auto relative hover:shadow-sm',
			getColorLevel(date)
		)}
	>
		<div
			class="tooltip w-48 -ml-20 text-sm absolute bg-black text-white z-10 py-1 px-2 flex flex-col gap-1"
		>
			<div class="font-semibold text-base">{date.toDateString()}</div>
			{#if getFormattedDuration(date)}
				<div class="font-semibold">⏳ Coding time: {getFormattedDuration(date)}</div>
			{/if}
		</div>
	</div>
{/snippet}

<section class="flex flex-col py-12">
	<div
		class="activity-card max-w-screen-xl w-full mx-auto px-6 py-9 border-black border-4 flex flex-col"
	>
		<h2 class="text-5xl font-black uppercase mb-8">Activities</h2>
		<span class="self-start">Last year</span>
		<div class="grid grid-flow-col-dense grid-rows-[repeat(7,_20px)] gap-[0.125rem]">
			{#each Array(lastYear.getDay()) as _}
				<div></div>
			{/each}
			{#each Array(365) as _, index}
				{@render activityItem(
					new Date(lastYear.getFullYear(), lastYear.getMonth(), lastYear.getDate() + index)
				)}
			{/each}
		</div>
		<span class="self-end">Now</span>
	</div>
</section>

<style>
	.activity-item .tooltip {
		visibility: hidden;
		bottom: 125%;
	}
	.activity-item:hover div {
		visibility: visible;
	}
</style>
