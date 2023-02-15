import React, { useContext } from 'react';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Box, Fab, Menu, MenuItem, Typography } from '@mui/material';
import { isLightMode, Theme } from '../../contexts/ThemeProvider';
import { usePopupMenu } from '../../hooks/usePopupMenu';
import { Avatar } from '../Avatar';

export const CurrentUser = () => {
    const { anchorElement, isMenuOpen, handleTriggerClick, handleMenuClose } = usePopupMenu();

    const { mode, toggleThemeMode } = useContext(Theme);
    const handleToggleMode = () => {
        toggleThemeMode();
        handleMenuClose();
    };

    return (
        <>
            <Fab variant="extended" onClick={handleTriggerClick} sx={{ boxShadow: 'none' }}>
                <Avatar />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left',
                        ml: 1,
                        mr: 2,
                    }}
                >
                    <Typography variant="body1" sx={{ textTransform: 'none', lineHeight: 1 }}>
                        Jan Kowalski
                    </Typography>
                    <Typography variant="caption" sx={{ textTransform: 'none', lineHeight: 1 }}>
                        j.kowalski@gmail.com
                    </Typography>
                </Box>
                {isMenuOpen ? <ExpandLess /> : <ExpandMore />}
            </Fab>
            <Menu
                anchorEl={anchorElement}
                open={isMenuOpen}
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleToggleMode} disableRipple>
                    Zmień tryb na:{' '}
                    {isLightMode(mode) ? (
                        <>
                            ciemny <LightModeOutlinedIcon sx={{ ml: 1 }} />
                        </>
                    ) : (
                        <>
                            jasny <DarkModeOutlinedIcon sx={{ ml: 1 }} />
                        </>
                    )}
                </MenuItem>
            </Menu>
        </>
    );
};
