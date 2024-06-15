<script lang="ts">
	import { getLastYear } from '$lib/helpers/date';
	import { formatDuration, formatToyyyyMMdd } from '$lib/helpers/formatter';
	import { rateActivity } from '$lib/helpers/rater';
	import { ActivityType, type Activity } from '$lib/model';
	import clsx from 'clsx';
	export let activities: Map<string, Activity[]>;

	const lastYear = getLastYear();

	const getActivities = (date: Date): Activity[] => {
		const formattedDate = formatToyyyyMMdd(date);
		return activities.get(formattedDate) ?? [];
	};

	const getActivityTypeName = (activityType: ActivityType): string => {
		switch (activityType) {
			case ActivityType.CODEWARS:
				return 'Codewars';
			case ActivityType.GITHUB:
				return 'Github';
			case ActivityType.WAKATIME:
				return 'Wakatime';
		}
	};

	const formatActivityValue = ({ value, activityType }: Activity): string => {
		switch (activityType) {
			case ActivityType.CODEWARS:
				return `${value} ` + (value > 1 ? 'katas' : 'kata');
			case ActivityType.GITHUB:
				return `${value} ` + (value > 1 ? 'contributions' : 'contribution');
			case ActivityType.WAKATIME:
				return formatDuration(value);
		}
	};

	const getColorLevel = (date: Date): string => {
		const activities = getActivities(date);
		const maxRate = Math.max(...activities.map((v) => rateActivity(v)));
		switch (maxRate) {
			case 4:
				return 'bg-emerald-900';
			case 3:
				return 'bg-emerald-700';
			case 2:
				return 'bg-emerald-500';
			case 1:
				return 'bg-emerald-300';
			default:
				return 'bg-white';
		}
	};
</script>

{#snippet activityItem(date: Date)}
	<div class="activity-item relative">
		<div
			class={clsx(
				'rate-box size-5 border-black border-1 hover:border-2 mx-auto relative hover:shadow-sm',
				getColorLevel(date)
			)}
		></div>
		<div
			class="tooltip w-48 -ml-20 text-sm absolute bg-white text-black shadow-md border-2 border-black shadow-black z-10 py-2 px-2 flex flex-col gap-1 transition-all duration-150 ease-in-out"
		>
			<table border="1">
				<thead>
					<tr>
						<th colspan="3" class="font-bold text-base text-start">{date.toDateString()}</th>
					</tr>
				</thead>
				<tbody class="text-sm">
					{#each getActivities(date) as activity}
						<tr>
							<td>{getActivityTypeName(activity.activityType)}</td>
							<td class="px-1">:</td>
							<td class="font-semibold w-full text-end">{formatActivityValue(activity)}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
{/snippet}

<section class="flex flex-col py-12">
	<div
		class="activity-card max-w-screen-xl w-full mx-auto px-6 py-9 border-black border-4 flex flex-col"
	>
		<h2 class="text-5xl font-black uppercase mb-8 italic">Activities</h2>
		<span class="self-start">Last year</span>
		<div class="grid grid-flow-col-dense grid-rows-[repeat(7,_20px)] gap-[0.125rem] overflow-scroll">
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
		opacity: 0;
		bottom: 125%;
	}
	.activity-item:hover .tooltip {
		visibility: visible;
		opacity: 1;
	}

	.activity-item:hover .tooltip:hover {
		visibility: hidden;
		opacity: 0;
	}
</style>
