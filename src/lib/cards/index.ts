import { langCards } from "./langs";
import { containerCards } from "./containers";
import { infraCards } from "./infra";
import { Tag, Position } from "./types";
import type { Card } from "./types";

export {
    Tag,
    Position,
    Card
}

export const cards: Card[] = [
    ...infraCards,
    ...langCards,
    ...containerCards
];

