# Prepcards.dev

A simple flash card game, intended to help you prepare for coding interviews by familiarizing you with popular technologies. Hosted officially at [prepcards.dev](https://prepcards.dev). Hit the project with a star if you find it useful ⭐

## Motivation

I had never used TypeScript or Svelte before for an entire project, so I wanted to give it a shot.

## 🚀 Contributing

I would *love* for you to help make this game better! Feel free to open pull requests. In particular, I'd love to have you add new cards and decks. Here's the quick start guide to contributing to this project.

1. Clone the repo.

```bash
git clone https://github.com/wagslane/prepcards
cd prepcards
```

2. Use the proper node version. You can use nvm or install the version in `.nvmrc` manually.

```bash
nvm use
```

3. Install dependencies

```bash
npm install
```

4. Make sure that you use the configured prettier formatting, I won't accept pull requests that fail to pass the lint checks in the CI.

### Adding new cards

Cards are stored in the `/src/lib/cards` directory. You can add cards to the existing files, or make new files if the existing ones aren't of the correct category. Cards are organized into decks in `/src/lib/cards/index.ts` according to their tags. Feel free to use the existing tags and decks, or add new ones if necessary.

Thanks for helping out!
