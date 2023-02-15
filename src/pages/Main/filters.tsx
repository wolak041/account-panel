import React from 'react';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { BalanceType } from '../../domain/Balance';

export enum DateInterval {
    Week = '7',
    Month = '30',
    Quarter = '90',
    Custom = 'custom',
}

export type BalanceTypeFilter = BalanceType | 'all';

export const dateFilterList = [
    {
        value: DateInterval.Week,
        label: 'Ostatnie 7 dni',
    },
    {
        value: DateInterval.Month,
        label: 'Ostatnie 30 dni',
    },
    {
        value: DateInterval.Quarter,
        label: 'Ostatnie 90 dni',
    },
    {
        value: DateInterval.Custom,
        label: 'Dokładna data',
        icon: <AddOutlinedIcon />,
    },
];

export const operationTypeFilterList = [
    {
        value: 'all',
        label: 'Wszystkie',
    },
    {
        value: BalanceType.Admin,
        label: 'Administrator',
    },
    {
        value: BalanceType.User,
        label: 'Użytkownik',
    },
    {
        value: BalanceType.System,
        label: 'System',
    },
];
