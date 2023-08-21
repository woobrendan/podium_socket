import { configureStore } from "@reduxjs/toolkit";
import entrySlice from "./entry_slice";
import resultsSlice from "./resultsSlice";

const store = configureStore({
  reducer: {
    entry: entrySlice.reducer,
    results: resultsSlice.reducer,
  },
});

export default store;
