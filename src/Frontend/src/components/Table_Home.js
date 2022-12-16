import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

function createData(ID, Localizacao, RFID, Tipo) {
  return { ID, Localizacao, RFID, Tipo };
}

const rows = [
  createData(908, 'Sala 2', 390219312, 'Notebook'),
];

export default function DenseTable({ filtrado }) {
  async function getDevices() {
    await axios.get('http://Testeapi-env.eba-x4bgfctn.us-east-1.elasticbeanstalk.com/product/all').then(async res => {
      setData(res.data.products);
      console.log(res.data.products);
    });
  }

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getDevices();
  }, []);

  return (
    <TableContainer component={Paper} style={{
      border: '0.5px solid rgba(0,0,0,0.2)',
      width: '75%',
      margin: 'auto',
    }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'bold'}} align="center">Id</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="center">Tipo</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="center">Localização</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="center">RFID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filtrado && filtrado.length ? filtrado.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" align='center' scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.Tipo}</TableCell>
              <TableCell align="center">{row.localizacao || "Não fornecido"}</TableCell>
              <TableCell align="center">{row.rfid}</TableCell>
            </TableRow>
          )) : data && data.length > 0 ? data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" align='center' scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.Tipo}</TableCell>
              <TableCell align="center">{row.localizacao || "Não fornecido"}</TableCell>
              <TableCell align="center">{row.rfid}</TableCell>
            </TableRow>
          )) : <TableRow>
            <TableCell component="th" scope="row">
              Sem dados
            </TableCell>
          </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
} 