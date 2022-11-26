import { langCards } from "./langs";
import { containerCards } from "./containers";
import { infraCards } from "./infra";
import { Tag, Position } from "./types";
import type { Card } from "./types";

const deckAllCards: Card[] = [
    ...infraCards,
    ...langCards,
    ...containerCards
];

const deckBackend: Card[] = deckAllCards.filter((card) => {
    return card?.tags.includes(Tag.Backend)
})

const deckDevOps: Card[] = deckAllCards.filter((card) => {
    return card?.tags.includes(Tag.DevOps)
})

export {
    Tag,
    Position,
    Card,
    deckAllCards,
    deckBackend,
    deckDevOps
}
