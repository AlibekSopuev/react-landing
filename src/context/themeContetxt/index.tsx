import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'src/styles/theme';
import { ThemeEnum } from 'src/types/theme';
import { AppThemeContextType, ThemeProps } from './types';

export const AppThemeContext = React.createContext({} as AppThemeContextType);

export const AppThemeProvider = ({ children }: ThemeProps) => {
  const [currentTheme, setCurrentTheme] = React.useState<DefaultTheme>(lightTheme);

  const isLight = currentTheme.type === ThemeEnum.light;

  const toggleTheme = () => setCurrentTheme(currentTheme.type === ThemeEnum.light ? darkTheme : lightTheme);

  return (
    <AppThemeContext.Provider value={{ isLight, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};
