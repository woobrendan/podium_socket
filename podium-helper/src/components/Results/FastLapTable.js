import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../../Styling/result.scss";
import { grCup } from "../../functions/helperFunc";

const FastLapTable = ({ fastLap, series }) => {
  const fastTitle = series === grCup ? "Fast Lap" : "CrowdStrike Fast Lap";
  const { driver, laptime, entry } = fastLap;

  // Conditional render on entry for new results that use the entry value, whereas old results do not have entry value

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell colSpan={2}>Driver</TableCell>
          <TableCell colSpan={3} align="center">
            {fastTitle}
          </TableCell>
          <TableCell align="right" colSpan={2}>
            Lap Time
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row" colSpan={entry ? 1 : 3}>
            {driver}
          </TableCell>
          {entry && (
            <>
              <TableCell align="left" colSpan={1}>
                #{entry.number}
              </TableCell>
              <TableCell align="right" colSpan={2}>
                {entry.team}
              </TableCell>
              <TableCell align="right" colSpan={1}>
                {entry.vehicle}
              </TableCell>
            </>
          )}
          <TableCell align="right" colSpan={entry ? 1 : 3}>
            {laptime}
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default FastLapTable;
