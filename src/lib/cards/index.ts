import { langCards } from "./langs";
import { containerCards } from "./containers";
import { infraCards } from "./infra";
import { databasesCards } from "./databases";
import { Tag, Position } from "./types";
import type { Card } from "./types";

const deckAllCards: Card[] = [
    ...infraCards,
    ...langCards,
    ...containerCards,
    ...databasesCards,
];

const deckBackend: Card[] = deckAllCards.filter((card) => {
    return card?.tags.includes(Tag.Backend)
})

const deckDevOps: Card[] = deckAllCards.filter((card) => {
    return card?.tags.includes(Tag.DevOps)
})

const deckLanguages: Card[] = deckAllCards.filter((card) => {
    return card?.tags.includes(Tag.Languages)
})

const deckDatabases: Card[] = deckAllCards.filter((card) => {
    return card?.tags.includes(Tag.Databases)
})

export {
    Tag,
    Position,
    Card,
    deckAllCards,
    deckBackend,
    deckDevOps,
    deckLanguages,
    deckDatabases
}
