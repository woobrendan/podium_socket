import { MenuItem } from "@mui/material";
import WinnerPodium from "../components/Podium_Creation/WinnerPodium";

//determine if entry is single or two drivers and return corresponding menu item
const numOfDriverMenuItem = (entry, index) => {
  const { driver1, driver2, driver3, number } = entry;
  let driverStr = `#${number} - ${driver1.name}`;
  driverStr += driver2 ? ` & ${driver2.name}` : "";
  driverStr += driver3 ? ` & ${driver3.name}` : "";

  return (
    <MenuItem key={index} value={entry}>
      {driverStr}
    </MenuItem>
  );
};

//dynamically render appropriate amount of WinnerPodium components based on need per series class requirements
const numOfPodiumDisplays = (series, submit, results, entries) => {
  const mappedSeries = series.class.map((classification, index) => (
    <WinnerPodium
      key={classification}
      seriesName={series.name}
      onClick={submit}
      results={results}
      classification={classification}
      resultNum={index + 1}
      entries={entries}
    />
  ));
  return mappedSeries;
};

//take in entry object and get every single driver into list. List is used for Fast Lap component
const singleDrivers = (entryArray, series) => {
  const drivers = [];
  const seriesFilteredDrivers = entryArray.filter(
    (entry) => entry.series === series.name,
  );
  for (const entry of seriesFilteredDrivers) {
    drivers.push({
      number: entry.number,
      driver: entry.driver1.name,
      vehicle: entry.vehicle,
    });
    if (entry.driver2) {
      drivers.push({
        number: entry.number,
        driver: entry.driver2.name,
        vehicle: entry.vehicle,
      });
    }
    if (entry.driver3) {
      drivers.push({
        number: entry.number,
        driver: entry.driver3.name,
        vehicle: entry.vehicle,
      });
    }
  }
  return drivers.sort((a, b) => a.number - b.number);
};

export { numOfDriverMenuItem, numOfPodiumDisplays, singleDrivers };
