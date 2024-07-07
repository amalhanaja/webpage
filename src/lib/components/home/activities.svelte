<script lang="ts">
	import { getLastYear } from '$lib/helpers/date';
	import { formatDuration, formatToyyyyMMdd } from '$lib/helpers/formatter';
	import { rateActivity } from '$lib/helpers/rater';
	import { ActivityType, type Activity } from '$lib/model';
	import clsx from 'clsx';

	type ActivityDetailState = {
		date: Date;
		x: number;
		y: number;
	};
	const { activities } = $props<{ activities: Map<string, Activity[]> }>();

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
	let hoveredActivity = $state<ActivityDetailState | null>(null);

	const onActivityItemMouseOver = (
		e: MouseEvent & { currentTarget: EventTarget & HTMLDivElement },
		date: Date
	) => {
		if (hoveredActivity?.date == date) return;
		let x: number;
		switch (true) {
			case e.pageX < 100:
				x = 108;
				break;
			case e.pageX + 120 > document.body.clientWidth:
				x = e.pageX - 112;
				break;
			default:
				x = e.pageX;
				break;
		}
		hoveredActivity = {
			date: date,
			x,
			y: e.pageY - 20
		};
	};

	const onActivityItemMouseLeave = (
		e: MouseEvent & { currentTarget: EventTarget & HTMLDivElement }
	) => {
		hoveredActivity = null;
	};
</script>

{#snippet activityDetaiTooltip(state: ActivityDetailState)}
	<div
		class="tooltip w-[200px] -ml-20 text-sm absolute bg-white text-black shadow-md border-2 border-black shadow-black z-10 py-2 px-2 flex flex-col gap-1 transition-all duration-150 ease-in-out"
		style="top:{state.y}px;left:{state.x}px"
	>
		<table border="1">
			<thead>
				<tr>
					<th colspan="3" class="font-bold text-base text-start">{state.date.toDateString()}</th>
				</tr>
			</thead>
			<tbody class="text-sm">
				{#each getActivities(state.date) as activity}
					<tr>
						<td>{getActivityTypeName(activity.activityType)}</td>
						<td class="px-1">:</td>
						<td class="font-semibold w-full text-end">{formatActivityValue(activity)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/snippet}

{#snippet activityItem(date: Date)}
	<div class="activity-item relative">
		<div
			class={clsx(
				'rate-box size-5 border-black border-1 hover:border-2 mx-auto relative hover:shadow-sm transition-all duration-200',
				getColorLevel(date)
			)}
			role="contentinfo"
			onmouseover={(e) => onActivityItemMouseOver(e, date)}
			onmouseleave={onActivityItemMouseLeave}
			onfocus={(e) => {}}
		></div>
	</div>
{/snippet}

<section class="flex flex-col py-6 px-6 md:py-12 bg-green-400">
	{#if hoveredActivity}
		{@render activityDetaiTooltip(hoveredActivity)}
	{/if}
	<div
		data-aos="fade-up"
		class="activity-card max-w-screen-xl w-full mx-auto px-6 py-9 border-black border-4 flex flex-col bg-white"
	>
		<h2 class="text-4xl font-black uppercase mb-8 italic sm:text-5xl">Activities</h2>
		<span class="self-start">Last year</span>
		<div
			class="grid grid-flow-col-dense grid-rows-[repeat(7,_20px)] gap-[0.125rem] overflow-x-scroll"
		>
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
	.tooltip {
		transform: translateY(-100%);
	}
</style>
