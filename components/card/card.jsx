import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import '../../styles/products.module.css';
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";


export default function MyCard() {

  const cart = useSelector( (state) => state.cart.items );
  const dispatch = useDispatch()

  return (
    <Card sx={{ maxWidth: 250, 
    backgroundColor: '#CB9CF2',
    border: 3
    }} >
      <CardMedia
        component="img"
        height="140"
        image='/home-bg.jpg'
        alt="green iguana"
      />
      <CardContent>

        <Typography gutterBottom variant="h7" component="div">
          {cart.length != 0? 'The cart now has' + cart.length + 'items': 'The card is currently empty'}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          $49.99
        </Typography>
        
      </CardContent>
      <Divider variant='middle'/>
      <CardActions className='card-actions' 
    //   sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Button 
        variant="contained" 
        size="large" 
        fullWidth 
        onClick={ () => {dispatch(addItem('item')); console.log(cart)} }
        endIcon={<AddShoppingCartSharpIcon />}>
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
}
