import React from "react";
import NavigationBar from "../components/navbar";
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

function Login() {
    return (
    <>
        <NavigationBar></NavigationBar>
        <div>
            <Typography sx={{fontFamily:'Manrope', fontSize:'24px', lineHeight:'32px', ml:'255px', mt:'80px'}}>
                Usuário:
            </Typography>
            <TextField variant="filled" color="success" sx={{backgroundColor:'#DBDBDB', borderRadius:'10px', width:'751px', height:'58px', ml:'255px', mt:'9px'}} />
        </div>
        <div>
            <Typography sx={{fontFamily:'Manrope', fontSize:'24px', lineHeight:'32px', ml:'255px', mt:'113px'}}>
                Senha:
                </Typography>
            <TextField variant="filled" color="success" sx={{backgroundColor:'#DBDBDB', borderRadius:'10px', width:'751px', height:'58px', ml:'255px', mt:'9px'}} />
        </div>
        <Button sx={{backgroundColor:"#0082AF99", width:'282px', height:'81px', mt:'104px', ml:'490px', borderRadius:'90px'}}>
            <Typography sx={{color:'#FFFFFF'}}>Login</Typography>
        </Button>
    </>
  );
}
       
export default Login;