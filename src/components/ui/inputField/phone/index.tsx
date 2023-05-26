import React from 'react';
import { InputMask } from '../mask';
import { InputFieldBase } from '../base';
import { InputLabel } from '../label';
import { PhoneInputFieldProps } from './types';

const PHONE_MASK = '+{996} (000) 000-000';

export const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  label,
  onChange,
  placeholder,
  className,
  ...props
}) => (
  <InputMask
    mask={PHONE_MASK}
    onChange={onChange}
    render={({ ref }) => (
      <InputLabel className={className} label={label} disabled={props.disabled}>
        <InputFieldBase ref={ref} type='tel' placeholder={placeholder} {...props} />
      </InputLabel>
    )}
  />
);
