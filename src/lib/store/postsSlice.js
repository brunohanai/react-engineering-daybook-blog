import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, query, where, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: "idle",
    },
    reducers: {
        addPost: posts => {
            // TODO: Lógica do add
        },
    },
    extraReducers(builder) {
        builder
            // fetchPosts:
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
                console.log("Error", action.error.message);
            })
            // incrementLikes:
            .addCase(incrementLikes.fulfilled, (state, action) => {
                state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        post.likes = action.payload.likesCount;
                    }
                });
            })
            .addCase(incrementLikes.rejected, (state, action) => {
                state.status = "failed";
                console.log("Error", action.error.message);
            })
    }
});

export const { addPost } = postsSlice.actions;

export const selectPosts = state => state.posts;

export default postsSlice.reducer;

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const q = query(collection(db, "posts"), where("published", "==", true));
    const querySnapshot = await getDocs(q);
    let posts = [];
    querySnapshot.forEach((post) => {
        posts.push({id: post.id, ...post.data()});
    });
    return posts;
});

export const incrementLikes = createAsyncThunk('posts/incrementLikes', async (payload) => {
    const postRef = doc(db, "posts", payload.postId);
    const newLikesCount = payload.likesCount + 1;
    await updateDoc(postRef, {
        likes: newLikesCount,
    });
    return {postId: payload.postId, likesCount: newLikesCount};
});