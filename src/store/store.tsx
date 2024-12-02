import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer.ts';
import newsReducer from "./reducers/newsReducer.ts";

const store = configureStore({
    reducer: {
        user: userReducer,
        news: newsReducer,
        // services: servicesReducer
    },
});


export default store;
export type RootState = ReturnType<typeof store.getState>
