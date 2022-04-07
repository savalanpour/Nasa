import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import styles from './index.module.scss';
import { Balance } from '@/components';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg" className="containerBox">
      <div className={styles.root}>
        <div className={styles.content}>
          <Typography variant="h4" component="h1" gutterBottom>
            NASA GAME
          </Typography>
        </div>
        <Balance />
      </div>
    </Container>
  );
};

export default Home;
