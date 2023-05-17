import React from 'react';

export interface IFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  err?: string;
  id?: string;
  onClear?: any;
  placeholder?: string;
  autoComplete?: string;
  type?: string;
  isFocused?: boolean;
  isMasked?: boolean;
  mask?: any;
  inputRef?: any;
}
