import slugify from "slugify";

export const posts = [
    {
        id: "post-1",
        slug: slugify("Some title - 1?", {"lower": true}),
        title: "Some title - 1",
        headline: "Some headline - 1",
        content: "Some long content\nwith\nbreaklines - 1",
        status: "Published", //TODO: Enum
        category: "MacOS", // TODO: Enum?
        tags: ["keyboard", "productivity"], // TODO: Enum?
        created_at: new Date("2024-07-23T19:03:00.000Z"),
        updated_at: NaN,
    },
    {
        id: "post-2",
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