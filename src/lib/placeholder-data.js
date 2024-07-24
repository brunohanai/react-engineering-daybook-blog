import slugify from "slugify";

export const posts = [
    {
        id: "2608955a-ac69-412e-8d62-d9c8b5e84db8",
        slug: slugify("Some title - 1?", {"lower": true}),
        title: "Some title - 1",
        headline: "Some headline - 1",
        content: `
### Situação

Os *"[Text Replacement](https://www.digitaltrends.com/computing/how-to-add-and-use-text-replacements-on-mac/)"* configurados no teclado do *macOS* não funcionam em um aplicativo específico ([The Archive](https://zettelkasten.de/the-archive/)), mas funcionam em outros aplicativos.

### Solução

Fonte: https://discussions.apple.com/thread/255359649?sortBy=rank

Abrir o *The Archive* e habilitar a opção do menu: *"Edit → Substitutions → Text Replacement"*.
        `,
        status: "Published", //TODO: Enum
        category: "MacOS", // TODO: Enum?
        tags: ["keyboard", "productivity"], // TODO: Enum?
        created_at: new Date("2024-07-23T20:37:46.000Z"),
        updated_at: NaN,
    },
    {
        id: "6e0a4854-a52d-4627-9125-5fc6ca93e0b8",
        slug: slugify("Some title - 2", {"lower": true}),
        title: "Some title - 2",
        headline: "Some headline - 2",
        content: "Some long content\nwith\nbreaklines - 2",
        status: "Draft", //TODO: Enum
        category: "Swift", // TODO: Enum?
        tags: ["CC", "techniques"], // TODO: Enum?
        created_at: new Date("2024-07-23T19:05:00.000Z"),
        updated_at: NaN,
    }
]