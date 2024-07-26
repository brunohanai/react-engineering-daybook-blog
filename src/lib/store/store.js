import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import usersReducer from "./usersSlice";

export default configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
    }
})