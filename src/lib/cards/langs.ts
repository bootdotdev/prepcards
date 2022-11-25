import { Tag, Position } from "./types";
import type { Card } from "./types";

export const langCards: Card[] = [
    {
        title: "Go",
        description: `Go, also known as Golang, is an open-source, compiled, and statically typed programming 
        language designed by Google. It is built to be simple, high-performing, readable, and efficient.
        `,
        imageUrl: "/golang-logo.png.webp",
        linkToSiteUrl: "https://go.dev/",
        linkToSiteAnchor: "go.dev",
        tags: [Tag.Backend],
        position: Position.Zero,
    },
    {
        title: "Python",
        description: `Python is a dynamic programming language that specializes in being easy to read and write.
        Python is commonly used in back-end, devops, and machine learning contexts.
        `,
        imageUrl: "/python-logo.png.webp",
        linkToSiteUrl: "https://www.python.org/",
        linkToSiteAnchor: "python.org",
        tags: [Tag.Backend],
        position: Position.Zero,
    },
    {
        title: "JavaScript",
        description: `JavaScript is a lightweight, interpreted programming language.
        It is most well-known as the scripting language for Web pages, but many non-browser environments also use it, such as Node.js and Deno.
        `,
        imageUrl: "/javascript-logo.png.webp",
        linkToSiteUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        linkToSiteAnchor: "mozilla.org",
        tags: [Tag.Backend],
        position: Position.Zero,
    },
    {
        title: "Java",
        description: `Java is a programming language and virtual runtime first released by Sun Microsystems in 1995.
        It compiles to bytecode that runs on the Java virtual machine. It's often used in back-end, mobile, and game development.
        `,
        imageUrl: "/Java-Emblem.jpeg.webp",
        linkToSiteUrl: "https://www.java.com/en/download/help/whatis_java.html",
        linkToSiteAnchor: "java.com",
        tags: [Tag.Backend],
        position: Position.Zero,
    },
    {
        title: "Rust",
        description: `Rust is a blazingly fast and memory-efficient programming language. With no runtime or garbage collector,
        it can power performance-critical services, run on embedded devices, and easily integrate with other languages.
        `,
        imageUrl: "/rust-logo-blk.svg.webp",
        linkToSiteUrl: "https://www.rust-lang.org/",
        linkToSiteAnchor: "rust-lang.org",
        tags: [Tag.Backend],
        position: Position.Zero,
    },
    {
        title: "TypeScript",
        description: `TypeScript is a strongly typed programming language that's a superset of JavaScript.
        It transpiles to Javacript in order to run in the browser.
        `,
        imageUrl: "/typescript-logo.webp.webp",
        linkToSiteUrl: "https://www.typescriptlang.org/",
        linkToSiteAnchor: "typescriptlang.org",
        tags: [Tag.Backend],
        position: Position.Zero,
    }
];

