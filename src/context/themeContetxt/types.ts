import React from 'react';

export type ThemeProps = {
  children: React.ReactNode | JSX.Element | JSX.Element[];
};
export type AppThemeContextType = { isLight: boolean; toggleTheme: () => void };
