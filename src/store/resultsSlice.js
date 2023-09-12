import { createSlice } from "@reduxjs/toolkit";
import { results } from "./results.js";
import { compareResultDates } from "../functions/sortFuncs.js";

// Return results with most recent first
const sortedResults = results.sort(compareResultDates);

const resultsSlice = createSlice({
    name: "results",
    initialState: {
        resultsArray: [...sortedResults],
        recentPodium: sortedResults[0],
    },
    reducers: {
        addResults(state, action) {
            state.resultsArray.push({ ...action.payload });
            state.recentPodium = action.payload;
        },

        setRecentPodium(state, action) {
            state.recentPodium = action.payload;
        },
        editresults(state, action) {},
    },
});

export const resultsActions = resultsSlice.actions;

export default resultsSlice;
