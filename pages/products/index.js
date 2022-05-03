import { useEffect } from "react";
import axios from "axios";
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
                console.log('hmm')
            }
        }
    }, [])
        return (
            <>
                <div className={styles.mainContainer}>
                    <div className={styles.pageTitle}>
                        { products? <h4> {products.length} total products</h4>: <p>loading</p>}
                        
                    </div>
                    <Box  sx={{ flexGrow: 1 }}>
                        <Grid className={styles.productsContainer} container spacing={5}> 
                            {
                                products?
                                    products.map( product => <MyCard key={product.id} {...product}/>)
                                :
                                    <p> nope</p>
                                    
                            }
                            {/* <MyCard/> */}
                            
                            
                        </Grid>
                    </Box>
                </div>
            </>
        )
    
}