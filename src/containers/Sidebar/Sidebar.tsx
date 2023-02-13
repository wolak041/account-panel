import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import {
    Box,
    Collapse,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from '@mui/material';
import { Logo } from '../../components/Logo';
import { ResponsiveDrawer } from '../../components/ResponsiveDrawer';
import { ROUTES } from '../../config';
import { getBalances } from '../../services/balances';
import { getUsers } from '../../services/users';

interface SidebarProps {
    width: number;
    mobileOpenDrawer: boolean;
    handleDrawerToggle: () => void;
}

const isPathMatching = (current: string, pathname: string) => current === pathname;

const users = getUsers();
const balances = getBalances();

export const Sidebar = ({ width, mobileOpenDrawer, handleDrawerToggle }: SidebarProps) => {
    const { pathname } = useLocation();

    const [isUsersOpen, setUsersOpen] = useState(false);
    const handleUsersOpenedToggle = () => setUsersOpen((prev) => !prev);
    const [isBalancesOpen, setBalancesOpen] = useState(false);
    const handleBalancesOpenedToggle = () => setBalancesOpen((prev) => !prev);

    return (
        <ResponsiveDrawer
            width={width}
            mobileOpen={mobileOpenDrawer}
            handleToggle={handleDrawerToggle}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                <Logo width={150} />
            </Box>
            <Box sx={{ width: '100%', p: 3 }}>
                <List component="nav">
                    <ListItemButton
                        component={Link}
                        to={ROUTES.MAIN}
                        selected={isPathMatching(pathname, ROUTES.MAIN)}
                    >
                        <ListItemText primary="Strona główna" />
                    </ListItemButton>
                    <ListSubheader sx={{ mt: 3, background: 'inherit' }}>Zarządzanie</ListSubheader>
                    <Divider sx={{ mb: 1 }} />
                    <ListItemButton onClick={handleUsersOpenedToggle}>
                        <ListItemIcon>
                            <GroupOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Użytkownicy" />
                        {isUsersOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={isUsersOpen} timeout="auto" unmountOnExit>
                        <List disablePadding>
                            {users.map(({ userName, userId }) => (
                                <ListItemButton
                                    component={Link}
                                    to={`${ROUTES.USERS}/${userId}`}
                                    selected={isPathMatching(pathname, `${ROUTES.USERS}/${userId}`)}
                                    sx={{ pl: 4, overflowWrap: 'break-word' }}
                                    key={userId}
                                >
                                    <ListItemText primary={userName} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                    <ListItemButton
                        component={Link}
                        to={ROUTES.CURRENCIES}
                        selected={isPathMatching(pathname, ROUTES.CURRENCIES)}
                    >
                        <ListItemIcon>
                            <PaidOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Waluty" />
                    </ListItemButton>
                    <ListItemButton onClick={handleBalancesOpenedToggle}>
                        <ListItemIcon>
                            <AccountBalanceWalletOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Salda" />
                        {isBalancesOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={isBalancesOpen} timeout="auto" unmountOnExit>
                        {balances.map(({ balanceId, balanceName }) => (
                            <ListItemButton
                                component={Link}
                                to={`${ROUTES.BALANCES}/${balanceId}`}
                                selected={isPathMatching(
                                    pathname,
                                    `${ROUTES.BALANCES}/${balanceId}`,
                                )}
                                sx={{ pl: 4, overflowWrap: 'break-word' }}
                                key={balanceId}
                            >
                                <ListItemText primary={balanceName} />
                            </ListItemButton>
                        ))}
                    </Collapse>
                </List>
            </Box>
        </ResponsiveDrawer>
    );
};
