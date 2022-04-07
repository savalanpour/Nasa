export interface Balance {
  amount: number;
  name: string;
}

export const DialogType = {
  MANGE_BALANCE: 'manageBalance',
  WITHDRAW_DIALOG: 'withdrawDialog',
  WITHDRAW_REQUESTED: 'withdrawRequested',
  WITHDRAW_LOADING: 'withdrawLoading',
  WITHDRAW_FAILED: 'withdrawFailed',
};
