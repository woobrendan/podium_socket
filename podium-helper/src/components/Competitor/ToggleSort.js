import { FormControl, InputLabel, Select, Box, MenuItem } from "@mui/material";
import { useState } from "react";

const ToggleSort = ({ getOption, component }) => {
  const [sortOption, setSortOption] = useState("");

  const getSortOption = (component) => {
    const competitorSortOptions = [
      "Number",
      "Manufacturer",
      "Vehicle Type",
      "Class",
    ];
    const resultSortOptions = ["Event", "Series"];
    const option =
      component === "competitor" ? competitorSortOptions : resultSortOptions;
    return option;
  };

  const handleToggle = (event) => {
    setSortOption(event.target.value);
    getOption(event.target.value);
  };

  const mappedOptions = getSortOption(component).map((option) => (
    <MenuItem key={option} value={option}>
      {option}
    </MenuItem>
  ));

  return (
    <Box className="sort-option-selector">
      <FormControl color="error">
        <InputLabel>
          {component === "competitor" ? "Sort By" : "Filter"}
        </InputLabel>
        <Select
          name="sort-by"
          label="Sort By"
          value={sortOption}
          onChange={handleToggle}
        >
          {mappedOptions}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ToggleSort;
