import React from 'react';
import { Input as MuInput } from '@mui/material';
import styles from './Input.module.scss';

export default function Input(props: any) {
  const { className } = props;
  return <MuInput {...props} className={`${className} ${styles.root}`} />;
}
