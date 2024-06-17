<script lang="ts">
	import { clsx } from 'clsx';
	import type { Snippet } from 'svelte';
	const {
		children,
		duration = 10_000,
		classname = ''
	} = $props<{
		children: Snippet;
		duration: number;
		classname: string;
	}>();
	let isPaused = $state(false);
</script>

<div class={clsx('overflow-hidden', classname)}>
	<div class="marquee-track">
		{#each Array(5) as _, i}
			<div
				role="marquee"
				class="marquee-item"
				class:paused={isPaused}
				onmouseover={() => (isPaused = true)}
				onmouseout={() => (isPaused = false)}
				onfocus={() => {}}
				onblur={() => {}}
				style={`animation-duration: ${duration}ms`}
			>
				{@render children()}
			</div>
		{/each}
	</div>
</div>

<style>
	@keyframes marquee-animation {
		100% {
			transform: translateX(-100%);
		}
	}
	.marquee-track {
		width: 100000px;
	}
	.marquee-item {
		animation-name: marquee-animation;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		float: left;
	}
	.paused {
		animation-play-state: paused;
	}
</style>
