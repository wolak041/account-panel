import React, { useContext, useState } from 'react';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Box, Fab, Menu, MenuItem, Typography } from '@mui/material';
import { isLightMode, Theme } from '../../contexts/ThemeProvider';
import { Avatar } from '../Avatar';

export const CurrentUser = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { mode, toggleThemeMode } = useContext(Theme);
    const handleToggleMode = () => {
        toggleThemeMode();
        handleClose();
    };

    return (
        <>
            <Fab variant="extended" onClick={handleClick} sx={{ boxShadow: 'none' }}>
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
                    <Typography variant="body1" sx={{ textTransform: 'none' }}>
                        Jan Kowalski
                    </Typography>
                    <Typography variant="caption" sx={{ textTransform: 'none' }}>
                        j.kowalski@gmail.com
                    </Typography>
                </Box>
                {isOpen ? <ExpandLess /> : <ExpandMore />}
            </Fab>
            <Menu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
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
