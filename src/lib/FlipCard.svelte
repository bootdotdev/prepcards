<script lang="ts">
	import type { Card } from './assets/cards';
	import { Position } from './assets/cards';
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
			class="border-blue-500 border-8 shadow-xl bg-blue-700 absolute w-full h-full rounded overflow-hidden p-4 flex flex-col justify-between"
		>
			<h2 class="text-2xl">{card?.title}</h2>
			<div class="bg-white rounded p-4">
				<img alt="technology logo" src={card?.squareImageUrl} />
			</div>
		</div>
		<div
			class="flip-card-back border-blue-300 border-8 bg-blue-900 absolute w-full h-full rounded overflow-hidden p-4"
		>
			<p>{card?.description}</p>
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

	.flip-card-back {
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.flip-card-back {
		transform: rotateY(180deg);
	}
</style>
