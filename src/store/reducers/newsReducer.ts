import { createSlice } from '@reduxjs/toolkit';


const newsSlice = createSlice({
    name: "news",
    initialState: {
        list: []
    },
    reducers: {
        setNews: (state, action) => {
            state.list = action.payload;
        }
    },
});


export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
