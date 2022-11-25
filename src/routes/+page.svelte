<svelte:head>
	<title>Programming Interview Flashcards - Prepcards.Dev</title>
</svelte:head>

<div class="flex flex-col py-8 px-4 items-center">
	<h1 class="text-3xl mb-8 font-bold">PrepCards.dev</h1>

	<div class="max-w-xl mb-8">
		<p>
			This open-source flash-card game will familiarize you with popular programming technologies.
			It's common in programming interviews for various technologies to crop up in conversation, and
			you get bonus points for being able to nod along and follow the conversation without needing
			to constantly ask "Wait, what's a Kubernetes?"
		</p>
	</div>

	<div class="mb-16">
		<a href="/game">
			<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Start Playing
			</button>
		</a>
	</div>

	<div class="max-w-xl mb-8 text-gray-400">
		<p>If you want to add to the card collection, just submit a pull request on the GitHub repo.</p>
	</div>

	<div>
		<a
			class="underline text-blue-500 hover:text-blue-400 cursor-pointer"
			href="https://github.com/wagslane/prepcards"
			target="_blank"
			rel="noreferrer"
		>
			Contribute on Github
		</a>
	</div>
</div>
