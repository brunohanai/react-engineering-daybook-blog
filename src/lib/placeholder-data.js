import slugify from "slugify";

export const posts = [
    {
        id: "6e0a4854-a52d-4627-9125-5fc6ca93e0b8",
        slug: "engineering-daybook",
        title: "Engineering Daybook",
        content: `
[191--192][The Pragmatic Programmer]:

> "... they'd been trained to keep an engineering daybook, a kind of journal in which they recorded what they did, things they'd learned, sketches of ideas,
readings from meters: basically anything to do with their work. When the notebook became full, they'd write the date range on the spine, then stick it on the shelf
next to previous daybooks. There may have been a gentle competition going on for whose set of books took the most shelf space."

> "So, try keeping an engineering daybook. Use paper, not a file or a wiki: there's something special about the act of writing compared to typing. Give it a month,
and see if you're getting any benefits."
        `,
        status: "Published", //TODO: Enum
        category: "Learning", // TODO: Enum?
        tags: ["practices", "books"], // TODO: Enum?
        created_at: new Date("2024-07-14T13:22:46.000Z"),
        updated_at: NaN,
    },
    {
        id: "2608955a-ac69-412e-8d62-d9c8b5e84db8",
        slug: "text-replacement-nao-estava-funcionando-macos",
        title: "Text Replacement nãoo estava funcionando (MacOS)",
        content: `
Os *"[Text Replacement](https://www.digitaltrends.com/computing/how-to-add-and-use-text-replacements-on-mac/)"* configurados no teclado do *macOS* não funcionam em um aplicativo específico ([The Archive](https://zettelkasten.de/the-archive/)), mas funcionam em outros aplicativos.

A [solução que encontrei](https://discussions.apple.com/thread/255359649?sortBy=rank) foi: abrir o *The Archive* e habilitar a opção do menu: *"Edit → Substitutions → Text Replacement"*.
        `,
        status: "Published", //TODO: Enum
        category: "MacOS", // TODO: Enum?
        tags: ["keyboard", "productivity"], // TODO: Enum?
        created_at: new Date("2024-07-23T20:37:46.000Z"),
        updated_at: NaN,
    },
]