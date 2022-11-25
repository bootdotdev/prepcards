enum Tag {
    Backend,
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

export const cards: Card[] = [
    {
        title: "Kubernetes",
        description: "Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.",
        imageUrl: "/k8s-logo.webp",
        linkToSiteUrl: "https://kubernetes.io/",
        linkToSiteAnchor: "kubernetes.io",
        tags: [Tag.Backend],
        position: Position.Zero,
    },
    {
        title: "Docker",
        description: `Docker manages containers, which are lightweight virtual machines.
        It takes away repetitive, mundane configuration tasks and is used throughout the development
        lifecycle for fast, easy and portable application development.`,
        imageUrl: "/docker-logo.png.webp",
        linkToSiteUrl: "https://www.docker.com/",
        linkToSiteAnchor: "docker.com",
        tags: [Tag.Backend],
        position: Position.Zero,
    },
    {
        title: "Helm",
        description: "The package manager for Kubernetes. Helm is the best way to find, share, and use software built for Kubernetes. Helm templates make managing Kubernetes configuration files much easier.",
        imageUrl: "/helm-logo.svg.webp",
        linkToSiteUrl: "https://helm.sh/",
        linkToSiteAnchor: "helm.sh",
        tags: [Tag.Backend],
        position: Position.Zero,
    }
];

