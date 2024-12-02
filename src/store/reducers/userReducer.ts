import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: "user",
    initialState: {
        id: 0,
        token: null,
        username: "",
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        image: ""
    },
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem("token", action.payload.accessToken);
            state.id = action.payload.id;
            state.token = action.payload.accessToken;
            state.username = action.payload.username;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.gender = action.payload.gender;
            state.email = action.payload.email;
            state.image = action.payload.image;
        },
        clearUser: (state) => {
            localStorage.removeItem("token");
            state.id = 0;
            state.token = null;
            state.username = "";
            state.firstName = "";
            state.lastName = "";
            state.gender = "";
            state.email = "";
            state.image = "";
        },
    },
});


export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
