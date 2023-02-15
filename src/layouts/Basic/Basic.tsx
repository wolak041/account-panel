import React, { useState } from 'react';

import { Box, CssBaseline } from '@mui/material';
import { Sidebar } from '../../components/Sidebar';
import { Topbar } from '../../components/Topbar';
import { DRAWER_WIDTH } from '../../config';
import { useIsSmallScreen } from '../../hooks/useIsSmallScreen';

interface BasicLayoutProps {
    children: React.ReactNode;
}

export const BasicLayout = ({ children }: BasicLayoutProps) => {
    const isSmallScreen = useIsSmallScreen();
    const [mobileOpenDrawer, setMobileOpenDrawer] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpenDrawer((prev) => !prev);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box component="nav" sx={isSmallScreen ? {} : { width: DRAWER_WIDTH, flexShrink: 0 }}>
                <Sidebar
                    width={DRAWER_WIDTH}
                    mobileOpenDrawer={mobileOpenDrawer}
                    handleDrawerToggle={handleDrawerToggle}
                />
            </Box>
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Topbar handleDrawerToggle={handleDrawerToggle} />
                <Box sx={{ m: 4 }}>{children}</Box>
            </Box>
        </Box>
    );
};
