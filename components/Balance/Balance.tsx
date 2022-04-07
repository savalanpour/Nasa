import { useState, useContext } from 'react';
import {
  ManageBalanceDialog,
  WithdrawDialog,
  BalanceItem,
  WithdrawRequestedDialog,
  WithdrawLoadingDialog,
  WithdrawFailedDialog,
} from '@/components';
import styles from './Balance.module.scss';
import AppContext from '@/context/AppContext';

export default function Balance() {
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const value = useContext(AppContext);
  let { yollar, wallet } = value.state;

  return (
    <div className={styles.root}>
      <div className={styles.balanceBox}>
        <BalanceItem amount={yollar} name="YOLLAR balance" />
        <BalanceItem amount={wallet} name="Wallet balance" />
        <ManageBalanceDialog open={openDialog} setOpen={setOpenDialog} />
        <WithdrawDialog open={openDialog} setOpen={setOpenDialog} />
        <WithdrawRequestedDialog open={openDialog} setOpen={setOpenDialog} />
        <WithdrawLoadingDialog open={openDialog} setOpen={setOpenDialog} />
        <WithdrawFailedDialog open={openDialog} setOpen={setOpenDialog} />
      </div>
      <div />
    </div>
  );
}
