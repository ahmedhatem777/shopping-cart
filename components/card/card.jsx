import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { motion } from "framer-motion";
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import styles from '../../styles/products.module.css';

const MyCard = ({id, image, price, title}) => {

  const dispatch = useDispatch();

  return (
    <Grid item xs={12} md={3}>

      <Grid container className={styles.cardContainer}>

        <Card className={styles.productCard}>

          <CardMedia>
              <Image alt='product image' src={image} layout={'responsive'} height='200' width='256' quality={75}></Image>
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

          <CardActions>
   
            <Button 
                variant="contained" 
                size="large" 
                fullWidth 
                onClick={ () => dispatch(addItem({id, image, price, title})) }
                endIcon={<AddShoppingCartSharpIcon />}
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >
            ADD TO CART
            </Button>
         
          </CardActions>

        </Card>

      </Grid>

    </Grid>
  )
}

export default MyCard;