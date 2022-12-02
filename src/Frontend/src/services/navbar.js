import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import logo from '../images/image_5.png';
// import { Link } from 'react-router-dom'
  
  


const settings = ['Home', 'Patrimônio', 'Relatórios', 'Registro de Dispositivo'];

const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const pagesMax = [
    { name: "Home", link: "/Home" },
    { name: "Tabela", link: "/tabela"  },
    { name: "Relatórios", link: "/relatorios" },
    { name: "Registro de Dispositivo", link: "/registro" },
    { name: "Localização", link: "/localizacao" },
    { name: "Manual", link: "https://www.canva.com/design/DAFSIjEMmEo/j3-27AW7dS6rZgzmiTdtzA/view?utm_content=DAFSIjEMmEo&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" }
  ];
  const pagesMin = [
    { name: "Home", link: "/Home" },
    { name: "Patrimônio", link: "/patrimonio" },
    { name: "Relatórios", link: "/relatorios" },
    { name: "Registro de Dispositivo", link: "/registro" },
    { name: "Localização", link: "/location" },
    { name: "Manual", link: "https://www.canva.com/design/DAFSIjEMmEo/j3-27AW7dS6rZgzmiTdtzA/view?utm_content=DAFSIjEMmEo&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" }
  ];
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: '#FFFFFF', boxShadow:'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <img src={logo} alt="Logo" /> 
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#2A3342',
              textDecoration: 'none',
            }}
          >
            Beacon School
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color: "#2A3342"}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ 
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pagesMin.map(({ link, name }) => (
                <a href={link} style={{
                    textDecoration: 'none'
                }}>
                  <MenuItem key={link} onClick={handleCloseNavMenu} sx={{ color:"#2A3342", textDecoration:'none'}} >
                  <Typography textAlign="center" >{name}</Typography>
                </MenuItem>
                </a>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: "#2A3342",
              textDecoration: 'none',
            }}
          >
            Beacon School
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pagesMax.map(({ link, name }) => (
                <a href={link} style={{
                    textDecoration: 'none'
                }}>
                  <MenuItem key={link} onClick={handleCloseNavMenu} sx={{ color:"#2A3342", textDecoration:'none'}}>
                  <Typography textAlign="center" >{name}</Typography>
                </MenuItem>
                </a>
              ))}
          </Box>

          <Box sx={{ flexGrow: 0, bgcolor:"#4776E6", borderRadius:'15px' }}>
            <div>
                <Button size="medium" sx={{color:"#EEF3FF"}}>Sair</Button>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
