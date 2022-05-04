import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
//   width: '100',
  bgcolor: '#FFEDE1',
  border: '3',
  boxShadow: 24,
  p: 4,
};

export default function MyModal({disabled}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{width: '100%'}}>

      <Button disabled={disabled} onClick={handleOpen} className='drawer-button' variant='contained' fullWidth >CHECKOUT NOW</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box 
        sx={style}
        >
          <Typography id="modal-modal-title" variant="h5" component="h2" textAlign={'center'}>
            YAAY!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 3 }}>
            Congrats on fake buying these fake items!
          </Typography>
          <Button fullWidth variant='contained' color='success' onClick={handleClose}>YAAY!</Button>
        </Box>
      </Modal>
    </Box>
  );
}
