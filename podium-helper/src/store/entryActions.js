import axios from "axios";
import { entryActions } from "./entry_slice";

export const fetchEntry = () => {
  return async (dispatch) => {
    try {
      const entries = await axios.get("http://localhost:2020/entries");
      dispatch(entryActions.setEntries(entries.data.entry));
    } catch (err) {
      console.error(err);
    }
  };
};

export const updateEntry = async (entry) => {
  try {
    axios.patch(`http://localhost:2020/entries/${entry._id}`, entry);
  } catch (error) {
    console.log("Error updating Entry", error);
  }
};

export const deleteEntry = async (entry) => {
  try {
    axios.delete(`http://localhost:2020/entries/${entry._id}`);
  } catch (error) {
    console.log("Error deleting Entry", error);
  }
};
