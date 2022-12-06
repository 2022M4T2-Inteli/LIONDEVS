import NavigationBar from "../components/navbar";
import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from "@mui/material";

export default function Relatorios() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <Box sx={{ width:'230px', height: '229px', mt:'92px', ml:'36px', backgroundColor: '#FEE4CB', borderRadius:'25px'}}>
        <Typography sx={{ width:'148px', height:'25.33px', pt:'51.71px', pl:'41px', fontFamily: 'Inter', fontSize: '20px', fontWeight: '700', lineHeight: '24px', letterSpacing: '0em', align: 'left'}}>Chromebooks</Typography>
        <Typography sx={{ color:'#242424', width:'122px', height:'15px', pt:'33.96px', pl:'54px', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '700', lineHeight: '14.06px', letterSpacing: '0em', align: 'left'}}>Número de ativos</Typography>
        <Button sx={{width:'81px', height:'24.27px', mt:'57.62px', ml:'137px', color:'#FF942E', backgroundColor:'#FFFFFF', borderRadius:'10px'}}>Gerar</Button>
    </Box>
    <Box sx={{ width:'230px', height: '229px', mt:'-230px', ml:'288px', backgroundColor: '#E9E7FD', borderRadius:'25px'}}>  
        <Typography sx={{ width:'148px', height:'25.33px', pt:'52px', pl:'31px', fontFamily: 'Inter', fontSize: '20px', fontWeight: '700', lineHeight: '24px', letterSpacing: '0em', align: 'left'}}>Tablets</Typography>
        <Typography sx={{ color:'#242424', width:'122px', height:'15px', pt:'33.96px', pl:'54px', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '700', lineHeight: '14.06px', letterSpacing: '0em', align: 'left'}}>Número de ativos</Typography>
        <Button sx={{width:'81px', height:'24.27px', mt:'57.62px', ml:'137px', color:'#4F3FF0', backgroundColor:'#FFFFFF', borderRadius:'10px'}}>Gerar</Button>
    </Box>
    <Box sx={{ width:'230px', height: '229px', mt:'-230px', ml:'543px', backgroundColor: '#DBF6FD', borderRadius:'25px'}}>
        <Typography sx={{ width:'148px', height:'25.33px', pt:'52px', pl:'29px', fontFamily: 'Inter', fontSize: '20px', fontWeight: '700', lineHeight: '24px', letterSpacing: '0em', align: 'left'}}>Macbooks</Typography>
        <Typography sx={{ color:'#242424', width:'122px', height:'15px', pt:'33.96px', pl:'54px', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '700', lineHeight: '14.06px', letterSpacing: '0em', align: 'left'}}>Número de ativos</Typography>
        <Button sx={{width:'81px', height:'24.27px', mt:'57.62px', ml:'137px', color:'#096C86', backgroundColor:'#FFFFFF', borderRadius:'10px'}}>Gerar</Button>
    </Box>
    <Box sx={{ width:'230px', height: '229px', mt:'-230px', ml:'798px', backgroundColor: '#FFD3E2', borderRadius:'25px'}}>
        <Typography sx={{ width:'148px', height:'25.33px', pt:'49px', pl:'26px', fontFamily: 'Inter', fontSize: '20px', fontWeight: '700', lineHeight: '24px', letterSpacing: '0em', align: 'left'}}>Ativos Tecnológicos</Typography>
        <Typography sx={{ color:'#242424', width:'122px', height:'15px', pt:'33.96px', pl:'54px', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '700', lineHeight: '14.06px', letterSpacing: '0em', align: 'left'}}>Número de ativos</Typography>
        <Button sx={{width:'81px', height:'24.27px', mt:'57.62px', ml:'137px', color:'#DF3670', backgroundColor:'#FFFFFF', borderRadius:'10px'}}>Gerar</Button>
    </Box>


    <Box sx={{ width:'230px', height: '229px', mt:'15px', ml:'36px', backgroundColor: '#DBF6FD', borderRadius:'25px'}}>
        <Typography sx={{ width:'148px', height:'25.33px', pt:'51.71px', pl:'41px', fontFamily: 'Inter', fontSize: '20px', fontWeight: '700', lineHeight: '24px', letterSpacing: '0em', align: 'left'}}>Cadeiras e Mesas</Typography>
        <Typography sx={{ color:'#242424', width:'122px', height:'15px', pt:'33.96px', pl:'54px', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '700', lineHeight: '14.06px', letterSpacing: '0em', align: 'left'}}>Número de ativos</Typography>
        <Button sx={{width:'81px', height:'24.27px', mt:'57.62px', ml:'137px', color:'#0082AF', backgroundColor:'#FFFFFF', borderRadius:'10px'}}>Gerar</Button>
    </Box>
    <Box sx={{ width:'230px', height: '229px', mt:'-229px', ml:'288px', backgroundColor: '#C8F7DC', borderRadius:'25px'}}>
        <Typography sx={{ width:'148px', height:'25.33px', pt:'51.71px', pl:'41px', fontFamily: 'Inter', fontSize: '20px', fontWeight: '700', lineHeight: '24px', letterSpacing: '0em', align: 'left'}}>Mesas</Typography>
        <Typography sx={{ color:'#242424', width:'122px', height:'15px', pt:'33.96px', pl:'54px', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '700', lineHeight: '14.06px', letterSpacing: '0em', align: 'left'}}>Número de ativos</Typography>
        <Button sx={{width:'81px', height:'24.27px', mt:'57.62px', ml:'137px', color:'#34C471', backgroundColor:'#FFFFFF', borderRadius:'10px'}}>Gerar</Button>
    </Box>
    <Box sx={{ width:'230px', height: '229px', mt:'-229px', ml:'543px', backgroundColor: '#D5DEFF', borderRadius:'25px'}}>
        <Typography sx={{ width:'148px', height:'25.33px', pt:'51.71px', pl:'41px', fontFamily: 'Inter', fontSize: '20px', fontWeight: '700', lineHeight: '24px', letterSpacing: '0em', align: 'left'}}>Instrumentos Musicais</Typography>
        <Typography sx={{ color:'#242424', width:'122px', height:'15px', pt:'33.96px', pl:'54px', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '700', lineHeight: '14.06px', letterSpacing: '0em', align: 'left'}}>Número de ativos</Typography>
        <Button sx={{width:'81px', height:'24.27px', mt:'57.62px', ml:'137px', color:'#4F3FF0', backgroundColor:'#FFFFFF', borderRadius:'10px'}}>Gerar</Button>
    </Box>
    <Box sx={{ width:'230px', height: '229px', mt:'-229px', ml:'798px', backgroundColor: '#E9E7FD', borderRadius:'25px'}}>
        <Typography sx={{ width:'148px', height:'25.33px', pt:'51.71px', pl:'41px', fontFamily: 'Inter', fontSize: '20px', fontWeight: '700', lineHeight: '24px', letterSpacing: '0em', align: 'left'}}>Ativos Móveis</Typography>
        <Typography sx={{ color:'#242424', width:'122px', height:'15px', pt:'33.96px', pl:'54px', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '700', lineHeight: '14.06px', letterSpacing: '0em', align: 'left'}}>Número de ativos</Typography>
        <Button sx={{width:'81px', height:'24.27px', mt:'57.62px', ml:'137px', color:'#4F3FF0', backgroundColor:'#FFFFFF', borderRadius:'10px'}}>Gerar</Button>
    </Box>


    <Box sx={{ width:'230px', height: '229px', mt:'-352px', ml:'1037px', backgroundColor: '#FFD3E2', borderRadius:'25px'}}>
        <Typography sx={{ width:'148px', height:'25.33px', pt:'49px', pl:'58px', fontFamily: 'Inter', fontSize: '20px', fontWeight: '700', lineHeight: '24px', letterSpacing: '0em', align: 'left'}}>Todos os ativos</Typography>
        <Typography sx={{ color:'#242424', width:'122px', height:'15px', pt:'33.96px', pl:'54px', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '700', lineHeight: '14.06px', letterSpacing: '0em', align: 'left'}}>Número de ativos</Typography>
        <Button sx={{width:'81px', height:'24.27px', mt:'57.62px', ml:'137px', color:'#DF3670', backgroundColor:'#FFFFFF', borderRadius:'10px'}}>Gerar</Button>
    </Box>
    </>
  );
}