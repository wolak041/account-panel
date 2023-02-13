import React, { useState } from 'react';

import { Box, CssBaseline } from '@mui/material';
import { DRAWER_WIDTH } from '../../config';
import { Sidebar } from '../../containers/Sidebar';
import { Topbar } from '../../containers/Topbar';

interface BasicLayoutProps {
    children: React.ReactNode;
}

export const BasicLayout = ({ children }: BasicLayoutProps) => {
    const [mobileOpenDrawer, setMobileOpenDrawer] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpenDrawer((prev) => !prev);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box component="nav" sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}>
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