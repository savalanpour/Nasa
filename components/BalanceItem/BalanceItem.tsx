import * as React from 'react';
import styles from './BalanceItem.module.scss';
import { Balance } from '@/interface/balanceInterface';

export default function BalanceItem({ amount, name }: Balance) {
  return (
    <div className={styles.root}>
      <div className={styles.name}>{name}</div>
      <div className={styles.amountBox}>
        <img className={styles.icon} src="/images/coin.png" />
        <span className={styles.amount}>{amount}</span>
      </div>
    </div>
  );
}
