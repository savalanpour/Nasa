import * as React from 'react';
import Button from '../Button/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogType } from '@/interface/balanceInterface';
import styles from './WithdrawFailedDialog.module.scss';

interface Props {
  open: string | null;
  setOpen: (open: string | null) => void;
}

export default function WithdrawFailedDialog({ open, setOpen }: Props) {
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Dialog
        open={open === DialogType.WITHDRAW_FAILED}
        onClose={handleClose}
        PaperProps={{
          style: { backgroundColor: '#FDE5DF', borderRadius: '15px', border: '3px solid #FA857B' },
        }}
      >
        <DialogTitle>
          <div className={styles.header}>Withdraw failed</div>
          <img src="/images/close.png" className={styles.closeIcon} onClick={handleClose} />
        </DialogTitle>
        <DialogContent className={styles.content}>
          <div className={styles.contentInfo}>
            We were unable to Withdraw YOLLAR. Please try again.
          </div>
          <div className={styles.action}>
            <Button onClick={handleClose} variant="contained" disableRipple>
              Try again
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
