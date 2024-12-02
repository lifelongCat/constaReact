import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        username: ''
    },
    reducers: {
        setUser: (state, action) => {
            state.token = action.payload.token;
            state.username = action.payload.username;
        },
        clearUser: (state) => {
            state.token = null;
            state.username = '';
        },
    },
});


export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
