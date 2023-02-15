import { LoaderFunction } from 'react-router-dom';

import { Balance, mapRawBalanceToBalance } from '../../domain/Balance';
import { getBalances } from '../../services/balances';
import { getCurrency } from '../../services/currencies';
import { getUser } from '../../services/users';

export const mainLoader: LoaderFunction = () => {
    const rawBalances = getBalances();

    if (!rawBalances) {
        throw new Response('', {
            status: 400,
            statusText: 'Bad request',
        });
    }

    return rawBalances.reduce((balances: Balance[], rawBalance) => {
        const user = getUser(rawBalance.userId);
        const currency = getCurrency(rawBalance.currencyId);

        return user && currency
            ? [...balances, mapRawBalanceToBalance({ rawBalance, user, currency })]
            : balances;
    }, []);
};
