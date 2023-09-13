import { configureStore } from "@reduxjs/toolkit";
import resultsSlice from "./resultsSlice.js";

const store = configureStore({
    reducer: {
        results: resultsSlice.reducer,
    },
});

export default store;
