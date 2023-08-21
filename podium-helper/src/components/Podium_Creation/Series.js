import { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, Box, MenuItem } from "@mui/material";
import axios from "axios";
import { sortSeriesNames } from "../../functions/sortFuncs";

const Series = ({ getValue, comp }) => {
  const [seriesName, setSeriesName] = useState("");
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const getAndSetSeries = async () => {
      try {
        const seriesList = await axios.get("http://localhost:2020/api/series");
        const sortedSeries = seriesList.data.series.sort(sortSeriesNames);
        const list =
          comp === "entryManager" ? ["All", ...sortedSeries] : sortedSeries;
        setSeries(list);
      } catch (err) {
        console.error(err);
      }
    };
    getAndSetSeries();
  }, []);

  const handleChange = (event) => {
    setSeriesName(event.target.value);
    getValue(event);
  };

  return (
    <Box data-testid="series_dropdown">
      <FormControl className="series_dropdown">
        <InputLabel>Series</InputLabel>
        <Select
          name="series"
          label="Series"
          value={seriesName}
          onChange={(e) => handleChange(e)}
        >
          {series.map((serie, index) => (
            <MenuItem key={index} value={serie} data-testid={serie.name}>
              {serie === "All" ? "All" : serie.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Series;
