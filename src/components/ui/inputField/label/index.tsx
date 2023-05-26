import React from 'react';
import { InputContainer } from './styled';
import { InputLayoutProps as InputLabelProps } from './types';

export const InputLabel: React.FC<InputLabelProps> = ({ label, disabled, className, children }) => {
  return <InputContainer className={className}>{children}</InputContainer>;
};
