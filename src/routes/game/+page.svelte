<script lang="ts">
	import { cards, Position } from '../../lib/assets/cards';
	import type { Card } from '../../lib/assets/cards';
	import FlipCard from '../../lib/FlipCard.svelte';

	type CardState = {
		card: Card;
		index: number;
	};

	let cardStates: CardState[] = [];
	$: canUndo = cardStates.length > 0;

	let shuffledCards = cards;
	reset();

	function reset() {
		cardStates = [];
		const newCards = JSON.parse(JSON.stringify(cards));
		shuffledCards = newCards.sort(function () {
			return Math.random() - 0.5;
		});
	}

	function updateCard(newCard: Card, i: number) {
		cardStates = [
			...cardStates,
			{
				card: newCard,
				index: i
			}
		];
		shuffledCards[i] = newCard;
	}

	function undoCard() {
		if (cardStates.length === 0) {
			return;
		}
		const lastState = cardStates.pop();
		// re-assign for reactivity
		cardStates = cardStates;

		if (!lastState) {
			return;
		}
		const card = lastState.card;
		const i = lastState.index;
		if (!card) {
			return;
		}

		switch (card.position) {
			case Position.One:
				card.position = Position.Zero;
				shuffledCards[i] = card;
				break;
			case Position.Three:
				card.position = Position.Two;
				shuffledCards[i] = card;
				setTimeout(() => {
					if (card === null) {
						return;
					}
					card.position = Position.One;
					shuffledCards[i] = card;
				}, 10);
				break;
		}
	}

	async function next(i: number) {
		let card = shuffledCards[i];
		if (card === null) {
			return;
		}
		switch (card.position) {
			case Position.Zero:
				card.position = Position.One;
				updateCard(card, i);
				break;
			case Position.One:
				card.position = Position.Two;
				shuffledCards[i] = card;
				// when animation is over,
				// step rendering the card
				setTimeout(() => {
					if (card === null) {
						return;
					}
					card.position = Position.Three;
					updateCard(card, i);
				}, 500);
				break;
		}
	}
</script>

<svelte:head>
	<title>Flashcard Game - Prepcards.Dev</title>
</svelte:head>

<div class="flex flex-col min-h-screen items-center py-8">
	<div class="w-full px-16">
		<button
			class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-32"
			on:click={reset}
		>
			Shuffle & Reset
		</button>
		{#if canUndo}
			<button
				class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-32"
				on:click={undoCard}
			>
				Undo
			</button>
		{/if}
	</div>

	<div class="w-full flex justify-center">
		{#each shuffledCards as shuffledCard, i}
			{#if shuffledCard?.position !== Position.Three}
				<button
					on:click={() => {
						next(i);
					}}
					class="absolute"
					style="z-index: {1000 - i}; transform: translateY({i}%)"
				>
					<FlipCard card={shuffledCard} />
				</button>
			{/if}
		{/each}
	</div>
</div>
