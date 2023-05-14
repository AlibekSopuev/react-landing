import React from 'react';
import { HeaderConfig, LayoutContext, LayoutContextProps } from './types';

export const AppLayoutContext = React.createContext<LayoutContext>({} as LayoutContext);

export const AppLayoutProvider: React.FC<LayoutContextProps> = ({ children }) => {
  const [headerConfig, setHeaderConfig] = React.useState<HeaderConfig>({
    variant: 'general',
    variantProps: {},
  });
  const value = {
    headerConfig,
    setHeaderConfig,
  };

  return <AppLayoutContext.Provider value={value}>{children}</AppLayoutContext.Provider>;
};
