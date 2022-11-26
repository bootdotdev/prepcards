export enum Tag {
    Backend,
    DevOps,
    Languages
}

export enum Position {
    Zero,
    One,
    Two,
    Three
}

export type Card = {
    title: string,
    description: string,
    imageUrl: string,
    linkToSiteUrl: string,
    linkToSiteAnchor: string,
    tags: Array<Tag>,
    position: Position
} | null;
