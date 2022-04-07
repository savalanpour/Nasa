import { useCallback } from 'react';

type WithdrawPayload = {
  address: string;
  amount: number;
};

type WithdrawResult = {
  result: 'success' | 'error' | 'unknown';
  address?: string;
  amount?: number;
};

const mockPostWithdraw = (payload: WithdrawPayload): Promise<WithdrawResult> => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand <= 0.7) {
        return resolve({
          result: 'success',
          address: payload.address,
          amount: payload.amount,
        });
      } else if (rand <= 0.85) {
        return reject({ result: 'error' });
      }
      return reject({ result: 'unkown' });
    }, Math.random() * 5000);
  });
};

export const usePostWithdraw = () => {
  return useCallback((payload: WithdrawPayload) => {
    return mockPostWithdraw(payload);
  }, []);
};
