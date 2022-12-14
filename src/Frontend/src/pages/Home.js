import NavigationBar from "../components/navbar";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Graphicss from "./Graphics";
import * as React from 'react';

function Home() {
        return (
            <>
            <NavigationBar></NavigationBar>
            <Graphicss></Graphicss>
                <div>
                        <Button sx={{bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px',display:'inline-block', mt:'20px', ml:'95px' }}>
                            <Typography sx={{color:'#FFFFFF'}}>
                                Adicionar Dispositivo
                            </Typography>
                        </Button>
                        <Button sx={{bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px', display:'inline-block', mt:'20px', ml:'95px'}}>
                            <Typography sx={{color:'#FFFFFF'}}>
                                Rastrear Dispositivos
                            </Typography>
                        </Button>
                        <Button sx={{bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px', display:'inline-block', mt:'20px', ml:'95px'}}>
                            <Typography sx={{color:'#FFFFFF'}}>
                                Gerar Relatórios
                            </Typography>
                        </Button>
                </div>
            </>
        );
            
}
  
export default Home;