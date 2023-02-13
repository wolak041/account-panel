import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { Balance } from '../../interfaces/Balance';

export const BalancesPage = () => {
    const data = useLoaderData() as Balance;

    return <div className="balances">Saldo {data.balanceName}</div>;
};
