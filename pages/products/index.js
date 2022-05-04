import { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import MyCard from "../../components/card/card";
import styles from '../../styles/products.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/productsSlice";

export default function Products() {
    const {products, isLoading} = useSelector( state => state.products );
    const dispatch = useDispatch();

    useEffect( () => {
        if( products.length === 0) {
            try {
                dispatch(getProducts());
            }
            catch {
                console.log('Error while fetching products.')
            }
        }
    }, [])

    return (
        <div className={styles.mainContainer}>
            {
            isLoading?
                <CircularProgress size={100}/>
            :
                <>
                 <Box  sx={{ flexGrow: 1, mt: '6vh' }}>
                    <Grid className={styles.productsContainer} container spacing={3}> 
                        {
                            products.map( product => <MyCard key={product.id} {...product}/>)
                        }   
                    </Grid>
                 </Box>
                </>
            }
        </div>
    )
}