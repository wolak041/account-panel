import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { RawBalance } from '../../domain/Balance';

export const BalancesPage = () => {
    const data = useLoaderData() as RawBalance;

    return <div className="balances">Saldo {data.balanceName}</div>;
};
