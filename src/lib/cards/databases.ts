import { Tag, Position } from "./types";
import type { Card } from "./types";

export const databasesCards: Card[] = [
    {
        title: "MySQL",
        description: `MySQL is a mature open-source relational database.
        Today it is owned by Oracle, but remains a distinct technology completely apart from the Oracle database product. PostgreSQL and MySQL
        are quite similar, and many consider PostgresQL to be a better choice today.`,
        imageUrl: "/MySQL-Logo.png.webp",
        linkToSiteUrl: "https://www.mysql.com/",
        linkToSiteAnchor: "mysql.com",
        tags: [Tag.Backend, Tag.DevOps, Tag.Databases],
        position: Position.Zero,
    },
    {
        title: "PostgreSQL",
        description: `PostgreSQL is a powerful, open source object-relational database system 
        with over 35 years of active development. PostgresQL is typically scaled vertically, but can scale horizontally
        fairly well for read-only access with replicas.`,
        imageUrl: "/postgres-logo.png.webp",
        linkToSiteUrl: "https://www.postgresql.org/",
        linkToSiteAnchor: "postgresql.org",
        tags: [Tag.Backend, Tag.DevOps, Tag.Databases],
        position: Position.Zero,
    },
    {
        title: "SQLite",
        description: `SQLite is a C-language library that implements a small, fast, self-contained, high-reliability SQL database engine. 
        All mobile phones and most computers use it. SQLite stores an entire database in a single file on disk. It's ideal for lightweight use-cases,
        and typicaly not for large production servers.`,
        imageUrl: "/sqlite-logo.png.webp",
        linkToSiteUrl: "https://www.sqlite.org/index.html",
        linkToSiteAnchor: "sqlite.org",
        tags: [Tag.Backend, Tag.DevOps, Tag.Databases],
        position: Position.Zero,
    },
    {
        title: "MongoDB",
        description: `MongoDB is a document database. It's well-suited for general purpose use, 
        and scales horizontally in a distrubuted fashion. As a NoSQL database, it has a loose schema
        and trades some data integrity and normalization for speed.`,
        imageUrl: "/mongo_logo.jpeg.webp",
        linkToSiteUrl: "https://www.mongodb.com/home",
        linkToSiteAnchor: "mongodb.com",
        tags: [Tag.Backend, Tag.DevOps, Tag.Databases],
        position: Position.Zero,
    },
    {
        title: "Redis",
        description: `Redis is an open source, in-memory data store used as a database, 
        cache, streaming engine, and message broker. It's generally not used as a persistent data store,
        and is commonly used for caching alongside a more general-purpose storage layer.`,
        imageUrl: "/redis.png.webp",
        linkToSiteUrl: "https://redis.io/",
        linkToSiteAnchor: "redis.io",
        tags: [Tag.Backend, Tag.DevOps, Tag.Databases],
        position: Position.Zero,
    },
    {
        title: "ElasticSearch",
        description: `Elasticsearch is a horizontally scalable search and analytics engine. 
        It does especially well with free-text search and aggregation queries.
        Elasticsearch is built on Apache Lucene, and is famous for it's simple JSON API over HTTP.`,
        imageUrl: "/elasticsearch.svg.webp",
        linkToSiteUrl: "https://www.elastic.co/",
        linkToSiteAnchor: "elastic.co",
        tags: [Tag.Backend, Tag.DevOps, Tag.Databases],
        position: Position.Zero,
    },
];

