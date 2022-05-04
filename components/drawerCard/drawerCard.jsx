import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import { Grid } from '@mui/material';
import Image from 'next/image';
import {addItem, removeItem} from '../../store/cartSlice';
import { useDispatch } from "react-redux";

export default function DrawerCard({id, image, price, title, quantity}) {
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(addItem({id, image, price, title, quantity}));
    }
    
    const decrement = () => {
        dispatch(removeItem({id, image, price, title, quantity}));
    }
    
    return (
        <Card sx={{ display: 'flex', width: '90%', marginTop: '3vh', 
        border: 3}}>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1, alignItems: 'center', pl: '2%', overflow: 'hidden'}}>
            <Grid container  spacing={7}>

                <Grid item xl={4} lg={4} md={4} sm={5} xs={5} >
                    <Box sx={{marginTop:'1vh'}}>
                        <CardMedia>
                            <Image src={image}  objectFit='cover' height='150' width='150' quality={50}></Image>
                        </CardMedia>
                    </Box>
                </Grid>
                

                <Grid item xl={8} lg={8} md={8} sm={7} xs={7}>
                    <Box>
                        <CardContent>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                <Typography component="div" noWrap>
                                    {title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    ${price}
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <IconButton onClick={decrement}  variant='contained'>
                                        <RemoveSharpIcon />
                                    </IconButton>
                                    <p>{quantity}</p>
                                    <IconButton onClick={increment}>
                                        <AddSharpIcon /> 
                                    </IconButton>
                                </Box>
                                
                            </Box>
                        </CardContent>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </Card>
    );
}
