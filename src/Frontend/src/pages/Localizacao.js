import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import logo from '../images/mapa.png';
import NavigationBar from '../components/navbar';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';
import DataTable from '../components/Table_Home.js'

function Localizacao() {

  async function getDevices() {
    await axios.get('http://Testeapi-env.eba-x4bgfctn.us-east-1.elasticbeanstalk.com/product/all').then(async res => {
      setData(res.data.products);
      console.log(res.data.products);
    });
  }
  const filterId = (e) => {
    let filteredId = data.filter((collaborator) => {
      return collaborator.id
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });

    setFiltrado(filteredId);
    console.log(filteredId);
  };
  const [filtrado, setFiltrado] = useState([]);


  const [data, setData] = useState([]);

  useEffect(() => {
    getDevices();
  }, []);


  return (
    <>
      <NavigationBar></NavigationBar>
      <br></br>
      <br></br>

      <div sx={{ display: 'inline' }}>
        <Typography sx={{ ml: '13rem', fontSize: '24px', height: '10px', display: 'inline' }}>Pesquisa por ID</Typography>
      </div>

      <div sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

        <div sx={{ display: 'inline', height: '2px' }}>
          <Typography sx={{ ml: '13rem', mt: '2rem', fontSize: '24px', height: '10px', width: 'fit-content' }}>Pesquisa por tipo</Typography>
        </div>

        <TextField size="small" label="ID" variant="outlined" sx={{ width: '514px', height: '55px', ml: '450px', mt: '-80px' }} onChange={(e) => filterId(e)} />

        <FormControl sx={{ minWidth: 515, ml: '450px', mt: '-30px' }} size="small">
          <InputLabel id="demo-select-small">Tipo</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label="Categoria" >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Notebook</MenuItem>
            <MenuItem value={20}>Tablet</MenuItem>
            <MenuItem value={30}>Cadeiras</MenuItem>
            <MenuItem value={40}>Mesas</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ width: '140px', height: '50px', mt: '-5.8rem', ml: '65rem', backgroundColor: 'null', borderRadius: '25px' }}>
        <div>
          <Button sx={{ width: '150px', height: '40px', mt: '0.5rem', ml: '1rem', backgroundColor: '#34C471', color: '#FFFFFF', borderRadius: '36px', display: 'inline' }}>Pesquisar</Button>
        </div>
      </Box>
      </div>
      <br />
      <br />
      <br />
      <div>
        <DataTable />


        {/* {filtrado && filtrado.length ? filtrado.map((device, index) => (
          <>
          <p key={index}>{device.tipo}</p>
          <p key={index}>{device.id}</p>
          <p key={index}>{device.localizacao}</p>
          <p key={index}>{device.rfid}</p>
          </>
        )) : data.map((device, index) => ( <>
          <p key={index+'1'}>{device.tipo}</p>
          <p key={index+'1'}>{device.id}</p>
          <p key={index+'1'}>{device.localizacao}</p>
          <p key={index+'1'}>{device.rfid}</p>
          </>))}  */}
      </div>

      {/* <Box sx={{display:'flex', justifyContent:'center',position:'absolute', top:'400px', left:'300px'}}>
        <img src={logo} alt="Logo" width="600" height="300" />
      </Box> */}
    </>
  );
}

export default Localizacao;

