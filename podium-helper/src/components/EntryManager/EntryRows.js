import { TableRow, TableCell, Button } from "@mui/material";
import { useState } from "react";
import { shortenName } from "../../functions/helperFunc";
import EditModal from "./EditModal";

const EntryRows = ({ entry }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {shortenName(entry.series)}
        </TableCell>
        <TableCell align="right">{entry.number}</TableCell>
        <TableCell align="right">{entry.team}</TableCell>
        <TableCell align="right">{entry.driver1.name}</TableCell>
        <TableCell align="right">
          {entry.driver2 ? entry.driver2.name : ""}
        </TableCell>
        <TableCell align="right">
          {entry.driver3 ? entry.driver3.name : ""}
        </TableCell>
        <TableCell align="right">{entry.vehicle}</TableCell>
        <TableCell align="right">{entry.classification}</TableCell>
        <TableCell align="right">
          <Button variant="contained" onClick={() => setShowModal(!showModal)}>
            Edit
          </Button>
        </TableCell>
      </TableRow>
      {showModal && (
        <EditModal
          handleToggle={() => setShowModal(!showModal)}
          show={showModal}
          entry={entry}
        />
      )}
    </>
  );
};

export default EntryRows;
