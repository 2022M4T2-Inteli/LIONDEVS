import { Box, TextField, Typography } from "@mui/material";
import NavigationBar from "../components/navbar";
import Button from "@mui/material/Button";

function MainRastreio() {
    return (
        <>
            <NavigationBar></NavigationBar>
            <div>
                <Typography sx={{mt:'36px', ml:'33px', display:'inline'}}>Pesquisar por ID</Typography>
                <TextField sx={{ml:'2px', display:'inline'}}></TextField>
            </div>
            <div>
                <Typography sx={{display:'inline', ml:'15px'}}>Pesquisa por Tipo</Typography>
                <TextField sx={{display:'inline', ml:'2px'}}></TextField>
            </div>
            <Box sx={{width:'472px', height:'165px', mt:'-110px', ml:'808px', backgroundColor:'#D9D9D9', borderRadius:'24px'}}>
                <Button sx={{width:'172px', height:'57px', padding: '8px 16px 8px 16px'}}>Remover</Button>
                <Button>Remover Tudo</Button>
                <Button>Adicionar</Button>
                <Button>Revelar Tudo</Button>
            </Box>
        </>
    );
  }
  
  export default MainRastreio;