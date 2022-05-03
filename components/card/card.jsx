import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import '../../styles/products.module.css';
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import Image from 'next/image';


export default function MyCard({id, image, price, title}) {
  const dispatch = useDispatch()

  return (
    <Grid item xs={12} md={3}>
      <Grid container justifyContent="center">
        
        <Card sx={{width:256, height:350, border: 3, overflow: 'hidden'}}>
          <CardMedia>
              <Image src={image} layout={'responsive'} height='200' width='256' quality={75}></Image>
          </CardMedia>

              <CardContent>
                <Typography gutterBottom variant="h7" component="div" noWrap>
                  {title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  <strong>$</strong>{price}
                </Typography>
                          
                </CardContent>
                  <Divider variant='middle'/>
                  <CardActions className='card-actions'>
                    <Button 
                      variant="contained" 
                      size="large" 
                      fullWidth 
                      onClick={ () => dispatch(addItem({id, image, price, title})) }
                      endIcon={<AddShoppingCartSharpIcon />}>
                        ADD TO CART
                      </Button>
                  </CardActions>
          </Card>
        </Grid>
    </Grid>
  );
}
