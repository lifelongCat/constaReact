import { createSlice } from '@reduxjs/toolkit';


const servicesSlice = createSlice({
    name: "services",
    initialState: {
        list: []
    },
    reducers: {
        setServices: (state, action) => {
            state.list = action.payload;
        }
    },
});


export const { setServices } = servicesSlice.actions;
export default servicesSlice.reducer;
