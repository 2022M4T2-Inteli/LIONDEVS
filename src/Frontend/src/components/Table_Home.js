import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(ID, Localizacao, RFID, Tipo) {
  return { ID, Localizacao, RFID, Tipo };
}

const rows = [
  createData(908 , 'Sala 2', 390219312, 'Notebook'),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Localização</TableCell>
            <TableCell align="right">RFID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" align='right' scope="row">
                {row.ID}
              </TableCell>
              <TableCell align="right">{row.Tipo}</TableCell>
              <TableCell align="right">{row.Localizacao}</TableCell>
              <TableCell align="right">{row.RFID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}