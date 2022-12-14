import { Button, Typography } from "@mui/material";
import NavigationBar from "../components/navbar";
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import axios from 'axios';

function AdicionarDispositivo() {

    const [user, createUser] = useState('')
    const [id, createId] = useState('')
    const [tipo, createTipo] = useState('')

    const onSubmit = async (e) => {
      e.preventDefault()
      const post = { 
        User: user,
        id: id,
        Tipo: tipo
     }
      try {
        const res = await axios.post('http://Testeapi-env.eba-x4bgfctn.us-east-1.elasticbeanstalk.com/product/', post);
        console.log(res.data)
      } catch (e) {
        alert(e)
      }
    }
  
    const handleRemove = async (e) => {
      e.preventDefault()
      const idDelete = {id};
      const url = `http://Testeapi-env.eba-x4bgfctn.us-east-1.elasticbeanstalk.com/product/`;
      e.preventDefault();
      axios.delete(url + idDelete)
          .then(res => {
              console.log(res.data);
          })
          .catch((err) => {
              console.log(err);
          })
  }


    return (
        <>
        <NavigationBar></NavigationBar>
            <Typography sx={{height:'1.75rem', width:'19.94rem', mt:'5rem', ml:'35rem', fontFamily: 'Inter', fontSize: '1.875rem', fontWeight: '400', lineHeight: '2.25rem', letterSpacing: '0em', align: 'left'}}>
                Registro de dispositivo
            </Typography>

            <Typography sx={{height:'1.75rem', width:'19.94rem', mt:'5rem', ml:'12rem', fontFamily: 'Inter', fontSize: '1.5rem', fontWeight: '400', lineHeight: '2.25rem', letterSpacing: '0em', align: 'left'}}>
                Tipo do dispositivo:
            </Typography>


            <form onSubmit={onSubmit}>
                
                <FormControl sx={{ minWidth: 515 , ml: '450px', mt: '-30px'}} size="small">
                <InputLabel 
                    id="demo-select-small">
                  Tipo
                </InputLabel>
                  <Select 
                   onChange={(event) => {
                    createTipo(event.target.value)
                    }}
                    value={tipo} 

                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Categoria" >

                    <MenuItem value="None">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Notebook">Notebook</MenuItem>
                    <MenuItem value="Tablet">Tablet</MenuItem>
                    <MenuItem value="Cadeiras">Cadeiras</MenuItem>
                    <MenuItem value="Mesas">Mesas</MenuItem>

                  </Select>
                </FormControl>

              
                <Typography sx={{height:'2.4rem', width:'19.94rem', mt:'3.688rem', ml:'12rem', fontFamily: 'Inter', fontSize: '1.5rem', fontWeight: '400', lineHeight: '2.25rem', letterSpacing: '0em', align: 'left'}}>
                    ID do dispositivo:
                </Typography>
                <TextField onChange={(event) => {
                        createUser(event.target.value)
                    }}
                    value={user} 
                    size="small" label="ID" variant="outlined" sx={{ width:'514px', height:'55px', ml:'450px', mt: '-40px'}} />

                <Typography sx={{height:'1.75rem', width:'19.94rem', mt:'3.125rem', ml:'12rem', fontFamily: 'Inter', fontSize: '1.5rem', fontWeight: '400', lineHeight: '2.25rem', letterSpacing: '0em', align: 'left'}}>
                    Tag do dispositivo:
                </Typography>
                <TextField  onChange={(event) => {
                        createId(event.target.value)
                    }}
                    value={id} 
                    size="small" label="Tag" variant="outlined" sx={{width:'514px', height:'55px', ml:'450px', mt:'-35px'}} />

                <Button type="submit" sx={{width:'188px', height:'56.93px', mt:'7rem', ml:'16.063rem', backgroundColor:'#34C471', color:'#FFFFFF', borderRadius:'36px', display:'inline'}}>Adicionar</Button>
                
            </form>
            
            <Button sx={{width:'188px', height:'56.93px', mt:'-5rem', ml:'5.5rem', backgroundColor:'#0082AF', color:'#FFFFFF', borderRadius:'36px', display:'inline'}}>Alterar Tag</Button>
            <Button sx={{width:'188px', height:'56.93px', mt:'-5rem', ml:'5.5rem', backgroundColor:'#E64747', color:'#FFFFFF', borderRadius:'36px', display:'inline'}}  onClick={handleRemove}>Remover</Button>

            
        </>
    );
  }
  
  export default AdicionarDispositivo;