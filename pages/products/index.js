import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/productsSlice";
import CircularProgress from '@mui/material/CircularProgress';
import MyCard from "../../components/card/card";
import styles from '../../styles/products.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Products = () => {

    const {products, isLoading} = useSelector( state => state.products );
    const dispatch = useDispatch();

    useEffect( () => {
        if( products.length === 0) {
            try {
                dispatch(getProducts());
            }
            catch {
                console.log('Error while fetching products.');
            }
        }
    }, [dispatch, products])

    return (
        <div className={styles.mainContainer}>
            {

            isLoading?
                <CircularProgress size={100}/>
            :
               <Box className={styles.productsBox}>
                    <Grid className={styles.productsContainer} container spacing={3}> 
                        {
                            products.map( product => <MyCard key={product.id} {...product}/>)
                        }   
                    </Grid>
                </Box>

            }
        </div>
    )
}

export default Products;