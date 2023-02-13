import balances from '../mocks/mock-balances.json';

export const getBalances = () => balances.data.collection;
export const getBalance = (balanceId: string) =>
    balances.data.collection.find((balance) => balance.balanceId === balanceId);
