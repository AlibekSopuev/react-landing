import React, { useRef, useState } from 'react';
import { InputMask } from '../mask';
import { InputFieldBase } from '../base';
import { InputLabel } from '../label';
import { MoneyInputFieldProps } from './types';
import { useIMask, IMaskInput } from 'react-imask';

const PHONE_MASK = '+{996} (000) 000-000';

export const MoneyInputField: React.FC<MoneyInputFieldProps> = ({
  label,
  onChange,
  placeholder,
  className,
  ...props
}) => (
  <InputMask
    mask={Number}
    thousandsSeparator={' '}
    onChange={onChange}
    render={({ ref }) => (
      <InputLabel className={className} label={label} disabled={props.disabled}>
        <InputFieldBase ref={ref} placeholder={placeholder} {...props} />
      </InputLabel>
    )}
  />
);

export const IMaskWithHook: React.FC<{ onChange?: any; name: string; value?: any }> = (props) => {
  const [opts, setOpts] = useState({ mask: Number, thousandsSeparator: ' ', min: 1000 });
  const maskedProps = useIMask(opts);

  React.useEffect(() => {
    props?.onChange && props.onChange([Number(maskedProps.unmaskedValue)]);
  }, [maskedProps.unmaskedValue]);

  return <input {...maskedProps} />;
};
