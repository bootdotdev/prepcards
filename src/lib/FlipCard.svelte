<script lang="ts">
	import type { Card } from './cards';
	import { Position } from './cards';
	export let card: Card;

	let percentTranslated = 0;
	let degreesRotated = 0;

	$: switch (card?.position) {
		case Position.Zero:
			percentTranslated = 0;
			degreesRotated = 0;
			break;
		case Position.One:
			percentTranslated = 0;
			degreesRotated = 180;
			break;
		case Position.Two:
			percentTranslated = screen.width;
			degreesRotated = 180;
			break;
	}
</script>

<div
	class="flip-card bg-transparent w-72 h-96"
	style="transform: translateX({percentTranslated}px)"
>
	<div
		class="flip-card-inner cursor-pointer w-full h-full relative"
		style="transform: rotateY({degreesRotated}deg)"
	>
		<div
			class="rounded-xl border-gray-300 bg-pink-900 border-8 shadow-xl absolute w-full h-full flip-card-face  p-4 flex flex-col justify-between"
		>
			<h2 class="text-2xl">{card?.title}</h2>
			<div class="bg-white rounded h-40 w-full flex justify-center items-center">
				<img alt="technology logo" class="w-1/2" src={card?.imageUrl} />
			</div>
		</div>
		<div
			class="rounded-xl border-gray-300 border-8 bg-cyan-900  flip-card-back flip-card-face absolute w-full h-full overflow-hidden p-4"
		>
			<p class="mb-4">{card?.description}</p>

			<a
				on:click|stopPropagation={() => {}}
				href={card?.linkToSiteUrl}
				class="underline text-cyan-500 hover:text-cyan-400 cursor-pointer"
				target="_blank"
				rel="noreferrer"
			>
				{card?.linkToSiteAnchor}
			</a>
		</div>
	</div>
</div>

<style>
	.flip-card {
		perspective: 1000px;
		transform: translateY(-100%);
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 500ms;
	}

	.flip-card-inner {
		transition: transform 0.5s;
		transform-style: preserve-3d;
	}

	.flip-card-face {
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.flip-card-back {
		transform: rotateY(180deg);
	}
</style>
