import Big from 'big.js';
import React from 'react';

import { TableCell, TableRow } from '@mui/material';
import { Balance } from '../../domain/Balance';
import { getFormattedDate } from '../../helpers/getFormattedDate';

type DataTableBodyProps = Omit<Balance, 'balanceId'>;

const formatFunds = (funds: string, precision: number) => {
    const divisor = new Big(10).pow(precision);

    return new Big(funds).div(divisor).toFixed(precision).toString();
};

export const DataTableBody = ({
    balanceName,
    balanceType,
    createdAt,
    currency,
    fundsAvailable,
    updatedAt,
    user,
}: DataTableBodyProps) => {
    const createdAtDate = getFormattedDate(createdAt);
    const updatedAtDate = getFormattedDate(updatedAt);
    const funds = formatFunds(fundsAvailable, currency.precision);

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{user.userName}</TableCell>
            <TableCell>{balanceName}</TableCell>
            <TableCell>{balanceType}</TableCell>
            <TableCell>
                {funds} {currency.currencyName}
            </TableCell>
            <TableCell>{createdAtDate}</TableCell>
            <TableCell>{updatedAtDate}</TableCell>
        </TableRow>
    );
};
