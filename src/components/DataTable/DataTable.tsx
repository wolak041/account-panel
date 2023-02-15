import React from 'react';

import {
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { Balance } from '../../domain/Balance';
import { DataTableBody } from './DataTableBody';

const COLUMN_NAMES = [
    'Użytkownik',
    'Saldo',
    'Typ salda',
    'Środki',
    'Data utworzenia',
    'Data modyfikacji',
];

interface DataTableProps {
    balances: Balance[];
}

export const DataTable = ({ balances }: DataTableProps) => (
    <TableContainer>
        <MuiTable sx={{ minWidth: 650 }}>
            <TableHead>
                <TableRow sx={{ th: { border: 0 } }}>
                    {COLUMN_NAMES.map((name) => (
                        <TableCell key={name}>{name}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {balances.map(({ balanceId, ...balance }) => (
                    <DataTableBody {...balance} key={balanceId} />
                ))}
            </TableBody>
        </MuiTable>
    </TableContainer>
);
