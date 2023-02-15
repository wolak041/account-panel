import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';

export const useIsSmallScreen = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return isSmallScreen;
};
