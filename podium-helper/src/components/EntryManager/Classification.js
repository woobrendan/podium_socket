import axios from "axios";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, Box, MenuItem } from "@mui/material";

const Classification = ({ onInputChange, classification, series }) => {
  const [seriesList, setSeriesList] = useState([]);
  const [className, setClassName] = useState(
    classification ? classification : "",
  );

  useEffect(() => {
    const getClasses = async () => {
      try {
        const series = await axios.get("http://localhost:2020/api/series");
        setSeriesList(series.data.series);
      } catch (error) {
        console.log("Error fetching series", error);
      }
    };

    getClasses();
  }, []);

  const getSeriesClasses = (seriesList) => {
    // if series prop exists, then take that name and only return the class list for that series
    if (series) {
      for (const serie of seriesList) {
        if (serie.name === series) {
          return serie.class;
        }
      }
    }
    //loop through each series and push all classes togeher, then filter out duplicates
    const classList = [];
    for (const series of seriesList) {
      classList.push(...series.class);
    }
    return classList
      .filter((className, index) => classList.indexOf(className) === index)
      .sort();
  };

  const handleChange = (event) => {
    setClassName(event.target.value);
    onInputChange(event);
  };

  return (
    <Box id="class_dropdown">
      <FormControl>
        <InputLabel>Class</InputLabel>
        <Select
          className="form-control"
          name="classification"
          label="Class"
          value={className}
          onChange={handleChange}
        >
          {getSeriesClasses(seriesList).map((classification, index) => (
            <MenuItem
              key={index}
              value={classification}
              data-testid={classification}
            >
              {classification}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Classification;
