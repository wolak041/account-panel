import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { CurrentUser } from '../../components/CurrentUser';
import { useIsSmallScreen } from '../../hooks/useIsSmallScreen';

interface TopbarProps {
    handleDrawerToggle: () => void;
}

export const Topbar = ({ handleDrawerToggle }: TopbarProps) => {
    const isSmallScreen = useIsSmallScreen();

    return (
        <AppBar position="static" sx={{ boxShadow: 'none', pt: 4, backgroundImage: 'none' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    {isSmallScreen && (
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Box>
                <CurrentUser />
            </Toolbar>
        </AppBar>
    );
};
