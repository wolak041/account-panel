import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Drawer, IconButton } from '@mui/material';
import { useIsSmallScreen } from '../../hooks/useIsSmallScreen';

interface ResponsiveDrawerProps {
    width: number;
    mobileOpen: boolean;
    handleToggle: () => void;
    children: React.ReactNode;
}

export const ResponsiveDrawer = ({
    width,
    mobileOpen,
    handleToggle,
    children,
}: ResponsiveDrawerProps) => {
    const isSmallScreen = useIsSmallScreen();
    const container = window.document.body;

    return (
        <>
            {isSmallScreen ? (
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width },
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                        <IconButton size="large" onClick={handleToggle}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    {children}
                </Drawer>
            ) : (
                <Drawer
                    variant="permanent"
                    sx={{
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width,
                            borderRight: 'none',
                            boxShadow: '5px 0px 10px #0000000d',
                        },
                    }}
                    open
                >
                    {children}
                </Drawer>
            )}
        </>
    );
};
