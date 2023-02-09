import { Box, Tab, Tabs, Typography } from '@mui/material';
import { HomePopular } from './HomePopular';
import { HomeNew } from './HomeNew';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

import zvezda from '../img/zvezda.png'
import ellipse from '../img/Ellipse.png'
import styles from "../pages/Main.module.scss";

export const Main = () => { 
  

  return (
    <>
      <Grid container>
        <Grid xs={6}>
          <Typography variant="h4" component="h1">
            <img className={styles.MainImgRotate} src={zvezda}></img>
          </Typography>
        </Grid>
        
        <Grid xs={6}>
          <Link to="/home">
            <Button className={styles.MainButton} variant="outlined">Развиваться</Button>
          </Link>
        </Grid>
        <Grid xs={6}>
          <Typography variant="h4" component="h1" className={styles.h1}>
            «DEVSELF» пишет о том, что даёт преимущество в жизни: о работе, саморазвитии и психическом здоровье.
          </Typography>
        </Grid>
        <Grid xs={6}>
        <img className={styles.MainImgRotate} src={ellipse}></img>
        </Grid>
      </Grid>
      </>
  );
}

export default Main;