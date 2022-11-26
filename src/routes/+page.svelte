<script lang="ts">
	import Game from '../lib/Game.svelte';
</script>

<svelte:head>
	<title>Prepcards.dev - Programming Interview Flashcards</title>
	<meta
		name="description"
		content="This open-source flash-card game will familiarize you with popular programming technologies to
	help prepare you for interviews."
	/>

	<meta property="og:title" content="Prepcards.dev - Programming Interview Flashcards" />
	<meta property="og:image" content="https://i.imgur.com/Uh4bODY.png" />
	<meta property="og:url" content="https://prepcards.dev" />

	<meta name="twitter:title" content="Prepcards.dev - Programming Interview Flashcards" />
	<meta
		name="twitter:description"
		content="This open-source flash-card game will familiarize you with popular programming technologies to
	help prepare you for interviews."
	/>
	<meta name="twitter:image" content="https://i.imgur.com/Uh4bODY.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="flex justify-center">
	<div class="flex flex-col py-8 px-4 items-center max-w-xl">
		<h1 class="text-4xl mb-8 font-bold">PrepCards<span class="text-indigo-500">.dev</span></h1>

		<hr class="h-px bg-gray-200 border-0 w-full mb-8" />

		<div class="mb-24 w-full">
			<Game />
		</div>

		<hr class="h-px bg-gray-200 border-0 w-full mb-8" />

		<div class="text-gray-400">
			<p class="mb-8">
				This open-source flash-card game will familiarize you with popular programming technologies
				to help prepare you for interviews. It's common for different technologies to crop up in
				conversation, and it helps to be able to nod along without needing to constantly ask "Wait,
				what's a Kubernetes?"
			</p>

			<p class="mb-8">
				If you want to contribute to this game, or just add cards to the deck, submit a pull request
				on the <a
					class="underline text-blue-500 hover:text-blue-300 cursor-pointer"
					href="https://github.com/wagslane/prepcards"
					target="_blank"
					rel="noreferrer">GitHub repo.</a
				>
			</p>
		</div>
	</div>
</div>
