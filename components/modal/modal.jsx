import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from '../../styles/products.module.css';

const MyModal = ({disabled}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <Box>

        <Button disabled={disabled} onClick={handleOpen} className={styles.drawerButton} variant='contained' fullWidth >CHECKOUT NOW</Button>

          <Modal open={open} onClose={handleClose}>

            <Box className={styles.drawerModal}>

              <Typography variant="h5" component="h2">
                YAAY!
              </Typography>

              <Typography className={styles.modalSubtitle}>
                Congrats on fake buying these fake items!
              </Typography>

              <Button variant='contained' color='success' onClick={handleClose} fullWidth>YAAY!</Button>

            </Box>
            
          </Modal>
          
      </Box>
  );
}

export default MyModal;