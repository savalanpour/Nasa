import React from 'react';
import { Button as MuButton } from '@mui/material';
import styles from './Button.module.scss';

export default function Button(props: any) {
  const { className } = props;
  return <MuButton {...props} className={`${className} ${styles.root}`} />;
}
