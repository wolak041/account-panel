import Big from 'big.js';

export const formatFunds = (funds: string, precision: number) => {
    const divisor = new Big(10).pow(precision);

    return new Big(funds).div(divisor).toFixed(precision).toString();
};
