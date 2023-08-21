import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const createData = (name, nationality, rating) => {
  return { name, nationality, rating };
};

const DriverTable = ({ drivers }) => {
  const tableRows = (drivers) => {
    const { driver1, driver2, driver3 } = drivers;
    const data = [
      createData(driver1.name, driver1.nationality, driver1.rating),
    ];
    if (drivers.driver2) {
      data.push(createData(driver2.name, driver2.nationality, driver2.rating));
    }
    if (drivers.driver3) {
      data.push(createData(driver3.name, driver3.nationality, driver3.rating));
    }
    return data;
  };

  return (
    <TableContainer component={Paper} className="driver-table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Driver</TableCell>
            <TableCell align="right">Nat.</TableCell>
            <TableCell align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows(drivers).map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.nationality}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DriverTable;
