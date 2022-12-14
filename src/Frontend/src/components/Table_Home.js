import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Localizacao', headerName: 'Localizacao', width: 130 },
  { field: 'Dispositivo', headerName: 'Dispositivo', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'ultima_atualizacao',
    headerName: 'Tempo de Atualização (seg)',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
  },
];

const rows = [
  { id: 1, Dispositivo: 'VL PC', Localizacao: 'Sala 01', ultima_atualizacao: 3 },
  { id: 2, Dispositivo: 'Notebook', Localizacao: 'Sala 03', ultima_atualizacao: 42 },
  { id: 3, Dispositivo: 'Notebook', Localizacao: 'Refeitorio', ultima_atualizacao: 45 },
  { id: 4, Dispositivo: 'iPad', Localizacao: 'Sala 05', ultima_atualizacao: 16 },
  { id: 5, Dispositivo: 'Chromebook', Localizacao: 'Auditorio', ultima_atualizacao: 28 },
  { id: 6, Dispositivo: 'Chromebook', Localizacao: null, ultima_atualizacao: 150 },
  { id: 7, Dispositivo: 'Chromebook', Localizacao: 'Sala 01', ultima_atualizacao: 44 },
  { id: 8, Dispositivo: 'iPad', Localizacao: 'Sala 02', ultima_atualizacao: 36 },
  { id: 9, Dispositivo: 'iPad', Localizacao: 'Sala 03', ultima_atualizacao: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}