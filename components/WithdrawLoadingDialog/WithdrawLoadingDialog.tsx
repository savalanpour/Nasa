import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogType } from '@/interface/balanceInterface';
import styles from './WithdrawLoadingDialog.module.scss';

interface Props {
  open: string | null;
  setOpen: (open: string | null) => void;
}

export default function WithdrawLoadingDialog({ open, setOpen }: Props) {
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Dialog
        open={open === DialogType.WITHDRAW_LOADING}
        onClose={handleClose}
        PaperProps={{
          style: { backgroundColor: '#FDE5DF', borderRadius: '15px', border: '3px solid #FA857B' },
        }}
      >
        <DialogTitle>
          <div className={styles.header}>Withdrawing</div>
          <img src="/images/close.png" className={styles.closeIcon} onClick={handleClose} />
        </DialogTitle>
        <DialogContent className={styles.content}>
          <div className={styles.contentInfo}>
            <img src="/images/loading.png" className={styles.loadingImage} onClick={handleClose} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
