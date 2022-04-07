import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@/components';
import { DialogType } from '@/interface/balanceInterface';
import styles from './ManageBalanceDialog.module.scss';

interface Props {
  open: string | null;
  setOpen: (open: string | null) => void;
}

export default function ManageBalanceDialog({ open, setOpen }: Props) {
  const handleClickOpen = () => {
    setOpen(DialogType.MANGE_BALANCE);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const dialogStyle = {
    style: { backgroundColor: '#FDE5DF', borderRadius: '15px', border: '3px solid #FA857B' },
  };

  const withdrawClickHandler = () => {
    setOpen(DialogType.WITHDRAW_DIALOG);
  };

  return (
    <>
      <div className={styles.manage} onClick={handleClickOpen}>
        Manage
      </div>
      <Dialog
        open={open === DialogType.MANGE_BALANCE}
        onClose={handleClose}
        PaperProps={dialogStyle}
      >
        <DialogTitle>
          <div className={styles.header}>Manage game balance</div>
          <img src="/images/close.png" className={styles.closeIcon} onClick={handleClose} />
        </DialogTitle>
        <DialogContent className={styles.content}>
          <div className={styles.title}>Overview</div>
          <div className={styles.valueDetails}>
            <div className={styles.valueItem}>
              Daily YOLLAR earned via staking:<div>2,000</div>
            </div>
            <div>
              Daily YOLLAR earned via staking:<div>10,000</div>
            </div>
          </div>
          <div className={styles.total}>
            Daily YOLLAR earned via staking:<div>12,000</div>
          </div>

          <div className={styles.action}>
            <Button
              onClick={withdrawClickHandler}
              variant="contained"
              disableRipple
              className={styles.deposit}
            >
              Withdraw
            </Button>
            <Button variant="contained" disableRipple>
              Deposit
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
