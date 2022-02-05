import { createContext, useCallback, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

const defaultValue = 'default';
export const ThemeContext = createContext(defaultValue);

const themes = {
    dark: {
        color: '#000000'
    },
    light: {
        color: 'rgb(106, 120, 121)'
    }
};

const themeMUI = {
    dark: createTheme({
        palette: {
            primary: {
                main: '#000000',
            },
            white: {
                main: '#fff'
            }
        },
    }),
    light: createTheme({
        palette: {
            primary: {
                main: 'rgb(106, 120, 121)',
            },
            white: {
                main: '#fff'
            }
        },
    }),
};

function CustomThemeProvider({ children, initialTheme = 'light' }) {
    
    const [theme, setTheme] = useState({
        theme: themes[initialTheme],
        name: initialTheme
    });

    const themeSetter = useCallback((name) => {
        if (themes[name]) {
            setTheme({
                name,
                theme: themes[name]
            });
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, themeSetter }}>
            <ThemeProvider theme={ themeMUI[theme.name] }>
                { children }
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default CustomThemeProvider;
