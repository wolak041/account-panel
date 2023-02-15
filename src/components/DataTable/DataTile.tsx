import React from 'react';

import { Box, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { BalanceType } from '../../domain/Balance';

interface DataTileProps {
    userName: string;
    balanceName: string;
    balanceType: BalanceType;
    fundsAvailable: string;
    updatedAt: string;
    createdAt: string;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(1),
    '&:first-child': {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    '&:not(:last-child)': {
        marginBottom: theme.spacing(2),
    },
}));

export const DataTile = ({
    balanceName,
    balanceType,
    createdAt,
    fundsAvailable,
    updatedAt,
    userName,
}: DataTileProps) => (
    <StyledPaper>
        <Box>Użytkownik: {userName}</Box>
        <Box>Saldo: {balanceName}</Box>
        <Box>Typ salda: {balanceType}</Box>
        <Box>Środki: {fundsAvailable}</Box>
        <Box>Data modyfikacji: {updatedAt}</Box>
        <Box>Data utworzenia: {createdAt}</Box>
    </StyledPaper>
);
