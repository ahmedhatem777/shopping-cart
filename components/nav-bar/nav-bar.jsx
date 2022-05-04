import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import MyDrawer from '../drawer/drawer';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky"  color='primary'> 

      <Container maxWidth="xl">

        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            color='warning'
          >
            
            <Link href={'/'}><a><strong><i>COOLNAME</i> </strong>SHOP</a></Link>

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon color='warning' fontSize='large'/>
            </IconButton>

            <Menu
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
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href={"/products"}>
                    <Typography textAlign="center">All Products</Typography>
                  </Link>
                </MenuItem>
              
            </Menu>

          </Box>
          
              <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                <Link href={'/'}><a><strong><i>COOLNAME</i> </strong>SHOP</a></Link>
            </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
              <Button
                key={1}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
                color='warning'
              >
                  <Link href={'/products'}>ALL PRODUCTS</Link>

                
              </Button>
          </Box>
          <MyDrawer/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;