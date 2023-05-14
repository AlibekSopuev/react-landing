import React from 'react';
import { HeaderProps } from './types';
import { HEADER_VARIANTS } from './const';

const Header: React.FC<HeaderProps> = ({ variant, variantProps, ...rest }) => {
  const VariantHeader = HEADER_VARIANTS[variant];

  return <VariantHeader {...rest} {...variantProps} />;
};

export default Header;
