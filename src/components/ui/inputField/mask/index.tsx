import React from 'react';
import { useIMask } from 'react-imask';
import { InputMaskProps } from './types';

export const InputMask: React.FC<InputMaskProps> = ({ render, onChange, ...rest }) => {
  const maskProps = useIMask({ ...rest });
  React.useEffect(() => {
    onChange && onChange(maskProps.unmaskedValue);
  }, [maskProps.unmaskedValue]);

  return render(maskProps);
};
