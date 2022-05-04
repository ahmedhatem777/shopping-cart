import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import bg from '../public/home-bg.jpg';

const Home = () => {

  return (
    <div>

      <Head>
        <title>COOLNAME SHOP</title>
        <meta name="description" content="Shopping cart web application built by Ahmed Hatem."/>
        <link rel="icon" href='icons8.png' />
      </Head>

      <main className={styles.main}>      
         <Image alt='homepage background' src={bg} layout='fill' quality={75} placeholder='blur' objectFit='cover' objectPosition={'center'} priority></Image>
      </main>

    </div>
  )

}

export default Home;
