import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import DrawerCard from '../drawerCard/drawerCard';

export default function TemporaryDrawer() {
  const[drawerState, setDrawerState] = useState(false)

  const toggleDrawer = () => {
    setDrawerState(!drawerState)
  };

  const Malist = () => (
    // <Container maxWidth="false">
  
    <Box
              className='drawer-box'
              role="presentation"
              onClick={toggleDrawer}
              onKeyDown={toggleDrawer}
              // sx={{height: 'auto'}}
              // minHeight="100vh"
              // maxHeight="100vh"
              // overflow
            >
              {/* <p>There aren't any items in your cart.</p> */}
              <DrawerCard/>
              <DrawerCard/>
              <DrawerCard/>
              <DrawerCard/>
              <DrawerCard/>
              <DrawerCard/>
              <DrawerCard/>
              <DrawerCard/>
              <DrawerCard/>
              <DrawerCard/>

              <h3> <strong>TOTAL:</strong> $55</h3>

              <div>
                  
                  <Button className='drawer-button' variant='contained' fullWidth>CHECKOUT NOW</Button>
                  <Button className='drawer-button' variant='contained' fullWidth sx={{mb: '4vh'}}>CONTINUE SHOPPING</Button>

              </div>
              
              
            </Box>

            
   
    
  );

  return (
    <div>
        <>
        <IconButton color='warning' size='large' onClick={toggleDrawer}> <ShoppingCartSharpIcon/> </IconButton>
          <Drawer
            className='drawer-itself'
            anchor={'right'}
            open={drawerState}
            onClose={toggleDrawer}
            PaperProps={{
              sx: {
                backgroundColor: "#FFEDE1",
              }
            }}
            // sx={{

            // }}
          >
            <Malist/>
          </Drawer>
        </> 
    </div>
  );
}
