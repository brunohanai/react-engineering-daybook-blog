import { createSlice, current } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        currentUser: null
    },
    reducers: {
        setUser: (users, action) => {
            const currentUser = users.currentUser ?? {} // TODO: CC
            const currentId = 'id' in currentUser ? currentUser.id : 0

            const newUser = action.payload ?? {}
            const newId = 'id' in newUser ? newUser.id : -1

            if (currentId != newId) { // TODO: Isso está evitando um loop infinito :õ(
                users.currentUser = action.payload;
            }
        }
    }
});

export const { setUser } = usersSlice.actions;

export const fetchUsers = state => state.users;

export default usersSlice.reducer;