import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function UsersTable(props) {

  const { usersData,handleSelectedUser } = props;
  const GenerateTableRows = () => {
    return usersData.map((row) => (
      <TableRow
        key={row.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        onClick={()=>handleSelectedUser(row)}
      >
        <TableCell component="th" scope="row">
          {row.nombres}
        </TableCell>
        <TableCell align="left">{row.apellidoPaterno}</TableCell>
        <TableCell align="left">{row.apellidoMaterno}</TableCell>
        <TableCell align="left">{row.rol}</TableCell>
        <TableCell align="left">{row.fechaRegistro}</TableCell>
      </TableRow>
    ));
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre(s)</TableCell>
            <TableCell align="left">Apellido Paterno</TableCell>
            <TableCell align="left">Apellido Materno</TableCell>
            <TableCell align="left">Rol</TableCell>
            <TableCell align="left">Fecha de registro</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <GenerateTableRows />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
