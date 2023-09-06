import { TableBody, TableCell, TableRow, TableHead } from "@mui/material";
import "../../Styling/result.scss";

const createDriverData = (
  place,
  number,
  driver1,
  team,
  car,
  driver2 = null,
  driver3 = null,
) => {
  const data = { place, number, driver1, team, car };
  if (driver2) {
    data.driver2 = driver2;
  }

  if (driver3) {
    data.driver3 = driver3;
  }

  return data;
};

const ResultTableBody = ({ results }) => {
  const { firstPlace, secondPlace, thirdPlace } = results;

  const checkPodium = () => {
    const allResults = [];
    const getPlaceString = (num) => {
      if (num === 0) return "1st";
      if (num === 1) return "2nd";
      if (num === 2) return "3rd";
    };

    //** Loop through each placemnt, if that place exists create the data and push that arr */
    const placements = [firstPlace, secondPlace, thirdPlace];
    placements.forEach((placement, index) => {
      if (placement) {
        const placementInfo = [
          getPlaceString(index),
          placement.number,
          placement.driver1,
          placement.team,
          placement.vehicle,
          placement.driver2 ? placement.driver2 : null,
          placement.driver3 ? placement.driver3 : null,
        ];
        allResults.push(createDriverData(...placementInfo));
      }
    });

    return allResults;
  };

  const placementRows = checkPodium().map((row, index) => {
    const { place, number, driver1, driver2, driver3, team, car } = row;
    return (
      <TableRow
        key={index}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {place}
        </TableCell>
        <TableCell align="left">{number}</TableCell>
        <TableCell align="right">{driver1}</TableCell>
        <TableCell align="right">{driver2 ? driver2 : ""}</TableCell>
        {driver3 && <TableCell align="right">{driver3}</TableCell>}
        <TableCell align="right">{team}</TableCell>
        <TableCell align="right">{car}</TableCell>
      </TableRow>
    );
  });

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell colSpan={7} align="center">
            {results.class}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{placementRows}</TableBody>
    </>
  );
};

export default ResultTableBody;
