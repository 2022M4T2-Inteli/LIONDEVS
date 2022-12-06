import { Button, Typography } from "@mui/material";
import NavigationBar from "../components/navbar";
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function AdicionarDispositivo() {
    return (
        <>
        <NavigationBar></NavigationBar>
            <Typography sx={{height:'1.75rem', width:'19.94rem', mt:'5rem', ml:'35rem', fontFamily: 'Inter', fontSize: '1.875rem', fontWeight: '400', lineHeight: '2.25rem', letterSpacing: '0em', align: 'left'}}>
                Registro de dispositivo
            </Typography>

            <Typography sx={{height:'1.75rem', width:'19.94rem', mt:'5rem', ml:'12rem', fontFamily: 'Inter', fontSize: '1.5rem', fontWeight: '400', lineHeight: '2.25rem', letterSpacing: '0em', align: 'left'}}>
                Tipo do dispositivo:
            </Typography>

            <FormControl sx={{ minWidth: 515 , ml: '450px', mt: '-30px'}} size="small">
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
            
            <Typography sx={{height:'2.4rem', width:'19.94rem', mt:'3.688rem', ml:'12rem', fontFamily: 'Inter', fontSize: '1.5rem', fontWeight: '400', lineHeight: '2.25rem', letterSpacing: '0em', align: 'left'}}>
                ID do dispositivo:
            </Typography>
            <TextField size="small" label="ID" variant="outlined" sx={{ width:'514px', height:'55px', ml:'450px', mt: '-40px'}} />

            <Typography sx={{height:'1.75rem', width:'19.94rem', mt:'3.125rem', ml:'12rem', fontFamily: 'Inter', fontSize: '1.5rem', fontWeight: '400', lineHeight: '2.25rem', letterSpacing: '0em', align: 'left'}}>
                Tag do dispositivo:
            </Typography>
            <TextField  size="small" label="Tag" variant="outlined" sx={{width:'514px', height:'55px', ml:'450px', mt:'-35px'}} />

            <Button sx={{width:'188px', height:'56.93px', mt:'7rem', ml:'16.063rem', backgroundColor:'#34C471', color:'#FFFFFF', borderRadius:'36px', display:'inline'}}>Adicionar</Button>
            <Button sx={{width:'188px', height:'56.93px', mt:'-5rem', ml:'5.5rem', backgroundColor:'#0082AF', color:'#FFFFFF', borderRadius:'36px', display:'inline'}}>Alterar Tag</Button>
            <Button sx={{width:'188px', height:'56.93px', mt:'-5rem', ml:'5.5rem', backgroundColor:'#E64747', color:'#FFFFFF', borderRadius:'36px', display:'inline'}}>Remover</Button>
        </>
    );
  }
  
  export default AdicionarDispositivo;