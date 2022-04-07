import * as React from 'react';
import Button from '../Button/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogType } from '@/interface/balanceInterface';
import styles from './WithdrawRequestedDialog.module.scss';

interface Props {
  open: string | null;
  setOpen: (open: string | null) => void;
}

export default function WithdrawRequestedDialog({ open, setOpen }: Props) {
  const handleClose = () => {
    setOpen(null);
  };

  const withdrawClickHandler = () => {
    setOpen(DialogType.WITHDRAW_REQUESTED);
  };

  return (
    <>
      <Dialog
        open={open === DialogType.WITHDRAW_REQUESTED}
        onClose={handleClose}
        PaperProps={{
          style: { backgroundColor: '#FDE5DF', borderRadius: '15px', border: '3px solid #FA857B' },
        }}
      >
        <DialogTitle>
          <div className={styles.header}>Withdrawal requested</div>
          <img src="/images/close.png" className={styles.closeIcon} onClick={handleClose} />
        </DialogTitle>
        <DialogContent className={styles.content}>
          <div className={styles.contentInfo}>
            We execute our withdrawals once a day. Your withdrawal is in now queue and will be
            completed with the next batch of withdrawals.
          </div>
          <div className={styles.action}>
            <Button
              onClick={handleClose}
              variant="contained"
              disableRipple
              className={styles.deposit}
            >
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
