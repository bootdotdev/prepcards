<script lang="ts">
	import {
		deckAllCards,
		deckBackend,
		deckDevOps,
		deckDatabases,
		deckLanguages,
		Position
	} from './cards/index';
	import type { Card } from './cards';
	import FlipCard from './FlipCard.svelte';

	const maxRenderedCards = 10;

	type CardState = {
		card: Card;
		index: number;
	};

	let cardStates: CardState[] = [];
	$: canUndo = cardStates.length > 0;

	const deckOptions = [
		{ text: `All Cards`, deck: deckAllCards },
		{ text: `Backend Deck`, deck: deckBackend },
		{ text: `DevOps Deck`, deck: deckDevOps },
		{ text: `Languages Deck`, deck: deckLanguages },
		{ text: `Databases Deck`, deck: deckDatabases }
	];

	let selectedDeckOption = deckOptions[0];

	let shuffledCards = selectedDeckOption.deck;
	reset();

	let indexToRenderStart = 0;
	let indexToRenderEnd = maxRenderedCards;
	$: {
		indexToRenderStart = 0;
		indexToRenderEnd = maxRenderedCards;
		for (const card of shuffledCards) {
			if (card?.position === Position.Three) {
				indexToRenderStart++;
				indexToRenderEnd = indexToRenderStart + maxRenderedCards;
			} else {
				break;
			}
		}
	}

	function reset() {
		shuffledCards = selectedDeckOption.deck;
		cardStates = [];
		const newCards = JSON.parse(JSON.stringify(shuffledCards));
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

<div class="flex flex-col items-center">
	<div class="w-full mb-8">
		<button
			class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
			on:click={reset}
		>
			Restart
		</button>
		{#if canUndo}
			<button
				class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
				on:click={undoCard}
			>
				Undo
			</button>
		{/if}
	</div>
	<div class="w-full flex justify-center h-96 mb-16">
		{#each shuffledCards as shuffledCard, i}
			{#if i >= indexToRenderStart && i < indexToRenderEnd}
				<button
					on:click={() => {
						next(i);
					}}
					class="absolute slide-card"
					style="z-index: {1000 - (i - indexToRenderStart)}; transform: translateY({i -
						indexToRenderStart}%)"
				>
					<FlipCard card={shuffledCard} />
				</button>
			{/if}
		{/each}
	</div>

	<select bind:value={selectedDeckOption} on:change={reset} class="py-2 px-3 rounded bg-cyan-700">
		{#each deckOptions as deckOption}
			<option value={deckOption}>
				{deckOption.text}
			</option>
		{/each}
	</select>
</div>

<style>
	.slide-card {
		transition: transform 500ms;
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
