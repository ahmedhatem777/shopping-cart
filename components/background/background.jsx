import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { bgWrap, bgText } from '../../styles/Home.module.css';

const Background = () => (
  <div>

    <div className={bgWrap}>
      <Image
        alt="Mountains"
        src="/layered-peaks-haikei.svg"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
    </div>


    <Typography className={bgText} variant="h2" component="div" color='white' gutterBottom 
    >
        <b>WELCOME TO MY FAKESTORE!</b>
    </Typography>
 
    
  </div>
)

export default Background;