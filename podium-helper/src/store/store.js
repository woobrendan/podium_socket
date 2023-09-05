import { configureStore } from "@reduxjs/toolkit";
import entrySlice from "./entry_slice.js";
import resultsSlice from "./resultsSlice.js";

const store = configureStore({
    reducer: {
        entry: entrySlice.reducer,
        results: resultsSlice.reducer,
    },
});

export default store;
