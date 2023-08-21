import EntryTable from "./EntryTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchEntry } from "../../store/entryActions";
import Series from "../Podium_Creation/Series";
import "../../Styling/entryManager.scss";
import { Button, TextField } from "@mui/material";
import AddEntry from "./AddEntry";
import searchAllEntries from "../../functions/searchAllEntries";

//take in entries from state, run a filter to change return of entries and pass down to table
const EntryManager = () => {
  const data = useSelector((state) => state.entry.entriesArray);
  const [entries, setEntries] = useState(data);
  const [series, setSeries] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setEntries(data);
  }, [data]);

  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  const sortEntries = (entries) => {
    const searchEntries = searchAllEntries(entries, searchValue);
    // sorting when no series is selected
    if (!series || series === "All") {
      const entryObj = {};
      const entryArr = [];

      // create hash map with key vals of series and value of entries
      searchEntries.forEach((entry) => {
        const series = entry.series;
        entryObj[series]
          ? entryObj[series].push(entry)
          : (entryObj[series] = [entry]);
      });

      for (const series in entryObj) {
        const sorted = entryObj[series].sort((a, b) => a.number - b.number);
        if (series !== "GT World Challenge America") entryArr.push(...sorted);
      }
      return entryObj["GT World Challenge America"]
        ? [...entryObj["GT World Challenge America"], ...entryArr]
        : entryArr;
    } else {
      //sort when series is selected
      const filtered = searchEntries.filter((entry) => entry.series === series);
      return filtered.sort((a, b) => a.number - b.number);
    }
  };

  return (
    <section id="entry_manager">
      <div className="entryManager_filter_container">
        <Button variant="outlined" onClick={() => setShowModal(!showModal)}>
          Add Entry
        </Button>
        <TextField
          className="entryManager__search"
          label="Search"
          variant="outlined"
          color="error"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <Series
          getValue={(e) => setSeries(e.target.value.name)}
          comp="entryManager"
        />
      </div>
      <EntryTable entries={sortEntries(entries)} />
      <AddEntry
        show={showModal}
        handleToggle={() => setShowModal(!showModal)}
      />
    </section>
  );
};

export default EntryManager;
