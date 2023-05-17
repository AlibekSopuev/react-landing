import React, { InputHTMLAttributes, useMemo, useState } from 'react';
import { InputErrorMessage, FloatLabel } from './style';
import { IMaskInput } from 'react-imask';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value: any;
  type?: 'password' | 'text' | 'email' | 'number';
  errorMessage?: string | null;
  mask?: string;
  onChange: (e: any) => void;
}

export const Input: React.FC<IInputProps> = ({
  placeholder,
  errorMessage,
  value,
  onChange,
  type = 'text',
  children,
  mask = '',
  ...props
}) => {
  const [showPass, setShowPass] = useState(false);

  const inputType = useMemo(() => (showPass ? 'text' : type), [type, showPass]);
  const hasValue = useMemo(() => value !== '', [value]);

  return (
    <>
      <FloatLabel className={hasValue ? 'active' : ''}>
        <input value={value} onChange={onChange} type={inputType} {...props} />
        <label>{placeholder}</label>
      </FloatLabel>
      <InputErrorMessage>{errorMessage}</InputErrorMessage>
    </>
  );
};
