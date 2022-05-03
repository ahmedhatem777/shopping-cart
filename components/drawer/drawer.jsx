import { useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import DrawerCard from '../drawerCard/drawerCard';
import Badge from '@mui/material/Badge';
import { useSelector, useDispatch } from "react-redux";
// import { cartSlice } from "../../store/productsSlice";
import {clearCart} from '../../store/cartSlice';

export default function TemporaryDrawer() {
  const[drawerState, setDrawerState] = useState(false);
  const {items, quantity, total} = useSelector( state => state.cart );
  const dispatch = useDispatch();


  const toggleDrawer = () => {
    setDrawerState(!drawerState)
  };

  const Malist = () => (
    // <Container maxWidth="false">
  
    <Box
              className='drawer-box'
              role="presentation"
              onKeyDown={toggleDrawer}
              // sx={{height: 'auto'}}
              // minHeight="100vh"
              // maxHeight="100vh"
              // overflow
            >
              {items? items.map( item => <DrawerCard key={item.id} {...item}/>)
              :
              <p>There aren't any items in your cart.</p>
              }

              <h3> <strong>TOTAL:</strong> ${total.toFixed(2)}</h3>

              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '50%'}}>                  
                  <Button onClick={ () => toggleDrawer} className='drawer-button' variant='contained' fullWidth>CHECKOUT NOW</Button>
                  <Button className='drawer-button' variant='contained' fullWidth onClick={toggleDrawer}>CONTINUE SHOPPING</Button>
                  <Button fullWidth className='drawer-button' variant='contained' color='secondary' sx={{mb: '4vh'}}
                  onClick={e => {e.preventDefault(); dispatch( clearCart() ) } }>CLEAR CART</Button>
              </Box>
              
              
            </Box>

            
   
    
  );

  return (
    <div>
        <>
        <StyledBadge  badgeContent={quantity} color="secondary">
        <IconButton color='warning' onClick={toggleDrawer}> <ShoppingCartSharpIcon/> </IconButton>
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
        </StyledBadge >
        
        </> 
    </div>
  );
}


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 6,
    top: 8,
  },
}));