import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import { Grid } from '@mui/material';

export default function DrawerCard() {
  return (
    <Card sx={{ display: 'flex', width: '90%', marginTop: '3vh', 
    border: 3}}>

    
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', pl: '2%', overflow: 'hidden'}}>
        <Grid container>

            <Grid md={4} sm={5} xs={5}>
                <Box>
                    <CardMedia
                            component="img"
                            height="140"
                            image="/home-bg.jpg"
                            alt="Live from space album cover"
                        />
                </Box>
            </Grid>
            

            <Grid md={8} sm={7} xs={7}>
                <CardContent 
                // sx={{ flex: '1 0 auto' }}
                >
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden'}}>
                        <Typography component="div" noWrap>
                            {//mobile character limit 22
                            }
                            This shitty-ass jacket shity shity bang bang bang bagn bang
                            This shitty-ass jacket shity shity bang bang bang bagn bang

                            This shitty-ass jacket shity shity bang bang bang bagn bang

                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            $49.99
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <IconButton aria-label="previous" variant='contained'>
                                <RemoveSharpIcon />
                            </IconButton>
                            <p>1</p>
                            <IconButton aria-label="next">
                                <AddSharpIcon /> 
                            </IconButton>
                        </Box>
                        
                    </Box>
                </CardContent>
            </Grid>
            
            
        </Grid>

            
          

        

        
      </Box>
      
    </Card>
  );
}
