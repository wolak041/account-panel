import React, { useMemo, useState } from 'react';

import {
    createTheme,
    PaletteMode,
    ThemeOptions,
    ThemeProvider as MuiThemeProvider,
    useMediaQuery,
} from '@mui/material';

interface ThemeProps {
    mode: PaletteMode;
    toggleThemeMode: () => void;
}

export const isLightMode = (mode: PaletteMode) => mode === 'light';

export const Theme = React.createContext<ThemeProps>({
    mode: 'light',
    toggleThemeMode: () => undefined,
});

interface ThemeProviderProps {
    children: React.ReactNode;
}

const fontFamily = ['Verdana', 'Tahoma', 'Arial'].join(',');

const lightTheme: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#4c4c4c',
        },
        secondary: {
            main: '#e3e6e6',
        },
        background: {
            default: '#f3f3f3',
        },
    },
    typography: {
        fontFamily,
        allVariants: {
            color: '#444444',
        },
        caption: {
            color: '#818181',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: '#f3f3f3',
                },
            },
        },
    },
};
const darkTheme: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#dbdbdb',
        },
        secondary: {
            main: '#454747',
        },
        background: {
            default: '#383838',
        },
    },
    typography: {
        fontFamily,
        caption: {
            color: '#818181',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: '#383838',
                },
            },
        },
    },
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const isDarkModePreferred = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState<PaletteMode>(isDarkModePreferred ? 'dark' : 'light');

    const themeMode = useMemo(
        () => ({
            mode,
            toggleThemeMode: () => {
                setMode((prevMode) => (isLightMode(prevMode) ? 'dark' : 'light'));
            },
        }),
        [mode],
    );

    const theme = React.useMemo(
        () => createTheme(isLightMode(mode) ? lightTheme : darkTheme),
        [mode],
    );

    return (
        <Theme.Provider value={themeMode}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </Theme.Provider>
    );
};
