import { motion } from 'framer-motion'
import Head from 'next/head';
import Background from '../components/background/background';
import styles from '../styles/Home.module.css';

const Home = () => {

  return (
    <motion.div initial={{ opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>

      <Head>
        <title>COOLNAME SHOP</title>
        <meta name="description" content="Shopping cart web application built by Ahmed Hatem."/>
        <link rel="icon" href='icons8.png' />
      </Head>

      <main className={styles.main}>     
        <Background/>
      </main>

    </motion.div>
  )

}

export default Home;
