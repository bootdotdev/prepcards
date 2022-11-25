import { Tag, Position } from "./types";
import type { Card } from "./types";

export const infraCards: Card[] = [
    {
        title: "Terraform",
        description: `Automate infrastructure on any cloud. Terraform is an open-source
        tool used to provision, change, and version resources on any environment.
        `,
        imageUrl: "/terraform-logo.png.webp",
        linkToSiteUrl: "https://www.terraform.io/",
        linkToSiteAnchor: "terraform.io",
        tags: [Tag.Backend],
        position: Position.Zero,
    },
    {
        title: "Ansible",
        description: `Ansible is an open source, command-line IT automation software application written in Python.
        It's most often used to configure systems, deploy software, and orchestrate advanced workflows to support application deployment and system updates.
        `,
        imageUrl: "/ansible-logo.png.webp",
        linkToSiteUrl: "https://www.ansible.com/",
        linkToSiteAnchor: "ansible.com",
        tags: [Tag.Backend],
        position: Position.Zero,
    },
];

