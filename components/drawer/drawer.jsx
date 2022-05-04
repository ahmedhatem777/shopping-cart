import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from '../../store/cartSlice';
import { styled } from '@mui/material/styles';
import { motion } from "framer-motion";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import DrawerCard from '../drawerCard/drawerCard';
import Badge from '@mui/material/Badge';
import MyModal from '../modal/modal';
import Typography from '@mui/material/Typography';
import styles from '../../styles/products.module.css';

const MyDrawer = () => {

  const[drawerState, setDrawerState] = useState(false);
  const {items, quantity, total} = useSelector( state => state.cart );
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    setDrawerState(!drawerState)
  };

  const DrawerContent = () => (
    <Box className={styles.drawerContent} onKeyDown={toggleDrawer}>
      {
        quantity > 0?
          items.map( item => <DrawerCard key={item.id} {...item}/>)
        :  
          <Box className={styles.drawerStatement}>
            <Typography variant='h6'>Your cart is empty.</Typography>
          </Box>
      }

      <h3>TOTAL: $ {Math.abs(total.toFixed(2))}</h3>

      <Box >                  
        
          <MyModal disabled = {total <= 0}/>

          <Button 
            className={styles.drawerButton} 
            variant='contained' 
            fullWidth 
            onClick={toggleDrawer}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
              CONTINUE SHOPPING
          </Button>

          <Button 
            className={styles.drawerButton} 
            variant='contained' 
            disabled={ total <= 0 } 
            color='secondary' 
            fullWidth
            onClick={ () => { dispatch( clearCart() ); toggleDrawer() } }
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
          CLEAR CART
          </Button>

      </Box>
                        
    </Box> 
  )

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
            PaperProps={{ sx: { backgroundColor: "#FFEDE1"} }}
          >
            <DrawerContent/>
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

export default MyDrawer;