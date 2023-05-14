import React from 'react';
import { HeaderVariantProps, HeaderVariants } from 'src/components/shared/header/types';

export interface HeaderConfig {
  variant: HeaderVariants;
  variantProps: HeaderVariantProps;
}

export interface LayoutContext {
  headerConfig: HeaderConfig;
  setHeaderConfig: (config: HeaderConfig) => void;
}

export interface LayoutContextProps {
  children: React.ReactNode;
}
