import { LoaderFunction } from 'react-router-dom';

import { getBalance } from '../../services/balances';

export const balanceLoader: LoaderFunction = ({ params }) => {
    const balance = params.balanceId && getBalance(params.balanceId);

    if (!balance) {
        throw new Response('', {
            status: 404,
            statusText: 'Not Found',
        });
    }

    return balance;
};
