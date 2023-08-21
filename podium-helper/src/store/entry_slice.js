import { createSlice } from "@reduxjs/toolkit";
import { deleteEntry, updateEntry } from "./entryActions";

const entrySlice = createSlice({
  name: "entries",
  initialState: {
    entriesArray: [],
  },
  reducers: {
    setEntries(state, action) {
      state.entriesArray = action.payload;
    },

    addEntry(state, action) {
      state.entriesArray = [...state.entriesArray, action.payload];
    },

    removeEntry(state, action) {
      const entries = [...state.entriesArray];
      const adjusted = entries.filter(
        (entry) => entry._id !== action.payload._id,
      );
      state.entriesArray = adjusted;
      deleteEntry(action.payload);
    },

    updateEntry(state, action) {
      updateEntry(action.payload);
      const entries = [...state.entriesArray];
      const newEntries = entries.map((entry) =>
        entry._id === action.payload._id ? { ...action.payload } : entry,
      );

      state.entriesArray = [...newEntries];
    },
  },
});

export const entryActions = entrySlice.actions;

export default entrySlice;
