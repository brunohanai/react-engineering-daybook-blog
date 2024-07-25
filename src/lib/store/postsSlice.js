import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: "posts",
    initialState: [
        {
            id: "6e0a4854-a52d-4627-9125-5fc6ca93e0b8",
            slug: "engineering-daybook",
            title: "Engineering Daybook",
            content: `
**[191--192][The Pragmatic Programmer]:**
> _"... they'd been trained to keep an engineering daybook, a kind of journal in which they recorded what they did, things they'd learned, sketches of ideas,
readings from meters: basically anything to do with their work. When the notebook became full, they'd write the date range on the spine, then stick it on the shelf
next to previous daybooks. There may have been a gentle competition going on for whose set of books took the most shelf space."_

> _"So, try keeping an engineering daybook. Use paper, not a file or a wiki: there's something special about the act of writing compared to typing. Give it a month,
and see if you're getting any benefits."_
            `,
            status: "Published", //TODO: Enum
            category: "Learning", // TODO: Enum?
            tags: ["practices", "books"], // TODO: Enum?
            created_at: new Date("2024-07-14T13:22:46.000Z"),
            updated_at: NaN,
            likes: 0,
        },
    ],
    reducers: {
        addPost: posts => {
            // TODO: Lógica do add
        },
    }
});

export const { addPost, incrementLikes } = postsSlice.actions;

export const fetchPosts = state => state.posts;

export default postsSlice.reducer;