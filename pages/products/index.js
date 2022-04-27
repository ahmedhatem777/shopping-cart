import { useEffect } from "react";
import axios from "axios";
import MyCard from "../../components/card/card";
import styles from '../../styles/products.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Products() {

    // useEffect(() => {
    //     axios.get('https://fakestoreapi.com/products?limit=5')
    //     .then(function (response) {
    //     // handle success
    //     console.log(response);
    //     })
    // }, []);

    return (
        <>
        
        <div className={styles.mainContainer}>
            <div className={styles.pageTitle}>
                <h4> 8 total products</h4>
            </div>
            <Box  sx={{ flexGrow: 1 }}>
            <Grid className={styles.productsContainer} justifyContent="center" container spacing={7}> 

                <Grid item xs={12} md={3}>
                    <Grid container justifyContent="center">
                        <MyCard/>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Grid container justifyContent="center">
                        <MyCard/>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Grid container justifyContent="center">
                        <MyCard/>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Grid container justifyContent="center">
                        <MyCard/>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Grid container justifyContent="center">
                        <MyCard/>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Grid container justifyContent="center">
                        <MyCard/>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Grid container justifyContent="center">
                        <MyCard/>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Grid container justifyContent="center">
                        <MyCard/>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </div>
        </>
    )
}