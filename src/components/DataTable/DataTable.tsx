import React, { useMemo } from 'react';

import { styled } from '@mui/material';
import { Box } from '@mui/system';
import {
    DataGrid,
    gridClasses,
    GridColDef,
    GridRenderCellParams,
    GridRowHeightReturnValue,
} from '@mui/x-data-grid';
import { Balance } from '../../domain/Balance';
import { formatFunds } from '../../helpers/formatFunds';
import { getFormattedDate } from '../../helpers/getFormattedDate';
import { useIsSmallScreen } from '../../hooks/useIsSmallScreen';
import { DataTile } from './DataTile';

interface DataTableProps {
    balances: Balance[];
}

const StyledDataGrid = styled(DataGrid)({
    border: 0,
    minWidth: 630,
    [`& .${gridClasses.columnHeaders}`]: {
        border: 0,
    },
    [`& .${gridClasses.columnSeparator}`]: {
        display: 'none',
    },
    [`& .${gridClasses.columnHeaderTitle}`]: {
        fontWeight: 'bold',
    },
});

const columnBase = {
    sortable: false,
    renderCell: ({ value }: GridRenderCellParams) => <Box sx={{ pt: 1.5, pb: 1.5 }}>{value}</Box>,
};

const columns: GridColDef[] = [
    { field: 'userName', headerName: 'Użytkownik', flex: 2 },
    { field: 'balanceName', headerName: 'Saldo', flex: 1 },
    { field: 'balanceType', headerName: 'Typ salda', flex: 1 },
    { field: 'fundsAvailable', headerName: 'Środki', flex: 3 },
    { field: 'updatedAt', headerName: 'Data modyfikacji', flex: 1 },
    { field: 'createdAt', headerName: 'Data utworzenia', flex: 1 },
].map((col) => ({ ...col, ...columnBase }));

const getRowHeight = (): GridRowHeightReturnValue => 'auto';

const mapBalancesToRows = (balances: Balance[]) =>
    balances.map(
        ({
            balanceId,
            user,
            currency,
            updatedAt,
            createdAt,
            fundsAvailable,
            balanceName,
            balanceType,
        }) => {
            const updatedAtDate = getFormattedDate(updatedAt);
            const createdAtDate = getFormattedDate(createdAt);
            const funds = formatFunds(fundsAvailable, currency.precision);

            return {
                id: balanceId,
                userName: user.userName,
                balanceName,
                balanceType,
                fundsAvailable: `${funds} ${currency.currencyName}`,
                updatedAt: updatedAtDate,
                createdAt: createdAtDate,
            };
        },
    );

export const DataTable = ({ balances }: DataTableProps) => {
    const isSmallScreen = useIsSmallScreen();
    const rows = useMemo(() => mapBalancesToRows(balances), [balances]);

    return (
        <Box>
            {isSmallScreen ? (
                <Box>
                    {rows.map(({ id, ...row }) => (
                        <DataTile {...row} key={id} />
                    ))}
                </Box>
            ) : (
                <StyledDataGrid
                    rows={rows}
                    columns={columns}
                    autoHeight
                    hideFooter
                    disableColumnMenu
                    disableColumnFilter
                    disableColumnSelector
                    disableSelectionOnClick
                    getRowHeight={getRowHeight}
                />
            )}
        </Box>
    );
};
