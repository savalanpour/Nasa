import { useContext, useState } from 'react';
import { usePostWithdraw } from '@/usePostWithdraw';
import { Button, Input } from '@/components';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogType } from '@/interface/balanceInterface';
import styles from './WithdrawDialog.module.scss';
import AppContext from '@/Context/AppContext';

interface Props {
  open: string | null;
  setOpen: (open: string | null) => void;
}

export default function WithdrawDialog({ open, setOpen }: Props) {
  const [state, setState] = useState({ amount: 0, address: '0xE4Ed......d961' });
  const value = useContext(AppContext);
  let { yollar, wallet } = value.state;
  const action = usePostWithdraw();

  const handleClickBack = () => {
    setOpen(DialogType.MANGE_BALANCE);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const withdrawClickHandler = async () => {
    if (!state.address || !state.amount) {
      return false;
    }
    setOpen(DialogType.WITHDRAW_LOADING);
    try {
      const data = await action(state);
      if (data) {
        setOpen(DialogType.WITHDRAW_REQUESTED);
        value.setYollar(yollar + +state.amount);
        value.setWallet(wallet - +state.amount);
      } else {
        setOpen(DialogType.WITHDRAW_FAILED);
      }
    } catch (e) {
      setOpen(DialogType.WITHDRAW_FAILED);
    }
  };

  const changeHandler = ({ target: { value, name } }: any) => {
    setState({ ...state, [name]: value });
  };

  const validate = () => {
    if (state.amount > wallet) {
      return false;
    }
    return state.address && state.amount;
  };

  return (
    <>
      <Dialog
        open={open === DialogType.WITHDRAW_DIALOG}
        onClose={handleClose}
        PaperProps={{
          style: { backgroundColor: '#FDE5DF', borderRadius: '15px', border: '3px solid #FA857B' },
        }}
      >
        <DialogTitle>
          <div className={styles.header}>Withdraw YOLLAR</div>
          <img src="/images/close.png" className={styles.closeIcon} onClick={handleClose} />
          <img src="/images/backIcon.png" className={styles.backIcon} onClick={handleClickBack} />
        </DialogTitle>
        <DialogContent className={styles.content}>
          <div className={styles.title}>Send to wallet </div>
          <div className={styles.inputBox}>
            <Input onChange={changeHandler} name="address" value={state.address} />
          </div>
          <div className={styles.title}>Send to wallet </div>
          <div className={styles.inputBox}>
            <Input onChange={changeHandler} name="amount" placeholder="10,000 YOLLAR" />
          </div>
          <div className={styles.titleInfo}>Blockchain transaction fee: .01 ETH</div>
          <div className={styles.contentInfo}>
            This fee is used for chainlink and other blockchains that the smart contract runs on.
            Read more
          </div>
          {state.amount > wallet && <div className={styles.error}>You Have Only 1000 Yollar</div>}
          <div className={styles.action}>
            <Button
              onClick={validate() ? withdrawClickHandler : null}
              variant="contained"
              disableRipple
              className={validate() ? styles.deposit : styles.disabledDeposit}
            >
              Withdraw
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
