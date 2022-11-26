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
        tags: [Tag.Backend, Tag.Languages],
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
        tags: [Tag.Backend, Tag.Languages],
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
        tags: [Tag.Backend, Tag.Languages],
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
        tags: [Tag.Backend, Tag.Languages],
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
        tags: [Tag.Backend, Tag.Languages],
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
        tags: [Tag.Backend, Tag.Languages],
        position: Position.Zero,
    },
    {
        title: "HTML",
        description: `HyperText Markup Language is a markup language and that is the building block
        of the Web. It defines the meaning and structure of web content. 
        Other technologies besides HTML are generally used to describe a web page's
        appearance/presentation (CSS) or functionality/behavior (JavaScript).
        `,
        imageUrl: "/html-logo.png.webp",
        linkToSiteUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        linkToSiteAnchor: "developer.mozilla.org",
        tags: [Tag.Languages],
        position: Position.Zero,
    },
    {
        title: "CSS",
        description: `Cascading Style Sheets is a stylesheet language used 
        to describe the presentation of a document. CSS describes how elements should be
        rendered.
        `,
        imageUrl: "/css-logo.png.webp",
        linkToSiteUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        linkToSiteAnchor: "developer.mozilla.org",
        tags: [Tag.Languages],
        position: Position.Zero,
    },
    {
        title: "C#",
        description: `C# is an object-oriented, and type-safe programming language.
        It enables developers to build many apps that run in .NET. C# has its roots in the C 
        family of languages and will be immediately familiar to C++, Java, and JavaScript programmers.
        `,
        imageUrl: "/csharp-logo.svg.webp",
        linkToSiteUrl: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
        linkToSiteAnchor: "learn.microsoft.com",
        tags: [Tag.Backend, Tag.Languages],
        position: Position.Zero,
    },
    {
        title: "C++",
        description: `C++ is a compiled, general-purpose programming language. C++ is essentially C with classes.
        The language has expanded significantly over time, and modern C++ now has object-oriented, generic,
        and functional features as well.
        `,
        imageUrl: "/cplusplus.png.webp",
        linkToSiteUrl: "https://en.wikipedia.org/wiki/C%2B%2B",
        linkToSiteAnchor: "wikipedia.org",
        tags: [Tag.Backend, Tag.Languages],
        position: Position.Zero,
    },
    {
        title: "C",
        description: `C is a general-purpose computer programming language. By design, C's features
        cleanly reflect the capabilities of the targeted CPUs. It has found lasting use in operating systems,
        device drivers, protocol stacks, though decreasingly for application software. 
        `,
        imageUrl: "/clang.png.webp",
        linkToSiteUrl: "https://en.wikipedia.org/wiki/C_(programming_language)",
        linkToSiteAnchor: "wikipedia.org",
        tags: [Tag.Backend, Tag.Languages],
        position: Position.Zero,
    },
    {
        title: "PHP",
        description: `PHP is a popular general-purpose scripting language that is suited to web development.
        PHP is well known for template-rendering HTML pages. Wordpress runs on PHP.
        `,
        imageUrl: "/php-logo.png.webp",
        linkToSiteUrl: "https://www.php.net/",
        linkToSiteAnchor: "php.net",
        tags: [Tag.Backend, Tag.Languages],
        position: Position.Zero,
    },
    {
        title: "Haskell",
        description: `Haskell is a statically-typed, purely functional programming language with type inference and lazy evaluation.
        Designed for teaching, research and industrial applications, Haskell has pioneered a number of programming language features such as type classes,
        which enable type-safe operator overloading, and monadic IO.
        `,
        imageUrl: "/haskell-logo.png.webp",
        linkToSiteUrl: "https://www.haskell.org/",
        linkToSiteAnchor: "haskell.org",
        tags: [Tag.Languages],
        position: Position.Zero,
    }
];

