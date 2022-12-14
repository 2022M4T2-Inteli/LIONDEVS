import NavigationBar from "../components/navbar";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

function SelectRastreio() {
    return (
        <>
        <NavigationBar></NavigationBar>
        <Box sx={{ flexGrow: 0, bgcolor:"#DBDBDB", height: '75px', width: '1422px', mt:'20px'}}>
            <Typography sx={{ fontFamily:'Manrope', fontWeight:'300px', fontSize: '28px', lineHeight:'38.25px', mt:'11.5px', ml:'100px'}}>
                Abaixo, escolha uma das opções para visualizar os ativos
            </Typography>
        </Box>
        <div>
            <Button sx={{ bgcolor:"#096C86", borderRadius:'90px', width:'592px', height:'87px', mt:'186px', ml:'336px', display:'block' }}>
                <Typography sx={{color:'#FFFFFF', fontFamily:'Manrope'}}>
                    Ativos Eletrônicos
                </Typography>
            </Button>
            <Button sx={{ bgcolor:"#096C86", borderRadius:'90px', width:'592px', height:'87px', mt:'95px', ml:'336px', display:'block'}}>
                <Typography sx={{color:'#FFFFFF', fontFamily:'Manrope'}}>
                    Ativos Mobiliários
                </Typography>
            </Button>
        </div>
        </> 
    );
  }
  
  export default SelectRastreio;