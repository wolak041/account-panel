import React, { useMemo, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { DataTable } from '../../components/DataTable';
import { Filter } from '../../components/Filter';
import { Balance } from '../../domain/Balance';
import {
    BalanceTypeFilter,
    dateFilterList,
    DateInterval,
    operationTypeFilterList,
} from './filters';
import { getFilteredBalances } from './getFilterdBalances';

const StyledFilterHeader = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    borderRadius: `${theme.spacing(2)} ${theme.spacing(2)} 0 0`,
    padding: theme.spacing(2),
    ['& > *:not(:last-child)']: {
        marginRight: theme.spacing(3),
    },
}));

export const MainPage = () => {
    const data = useLoaderData() as Balance[];

    const [dateFilter, setDateFilter] = useState(DateInterval.Week);
    const handleDateFilterChange = (value: string) => setDateFilter(value as DateInterval);

    const [operationTypeFilter, setOperationTypeFilter] = useState<BalanceTypeFilter>('all');
    const handleOperationTypeFilterChange = (value: string) =>
        setOperationTypeFilter(value as BalanceTypeFilter);

    const filteredData = useMemo(
        () =>
            getFilteredBalances(data, {
                dateInterval: dateFilter,
                balanceType: operationTypeFilter,
            }),
        [data, dateFilter, operationTypeFilter],
    );

    return (
        <Box>
            <Typography sx={{ fontWeight: 'bold', fontSize: 24, mb: 2 }}>Historia</Typography>
            <StyledFilterHeader>
                <Filter
                    label="Data"
                    value={dateFilter}
                    list={dateFilterList}
                    onChange={handleDateFilterChange}
                />
                <Filter
                    label="Typ operacji"
                    value={operationTypeFilter}
                    list={operationTypeFilterList}
                    onChange={handleOperationTypeFilterChange}
                />
            </StyledFilterHeader>
            <DataTable balances={filteredData} />
        </Box>
    );
};
