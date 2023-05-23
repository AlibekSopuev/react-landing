import React from 'react';
import { InputFieldProps } from './types';
import { InputFieldBase } from '../base';
import { InputLabel } from '../label';
import { useDebouncedValue } from '../../../../core/hooks/useDebounce';

export const InputField: React.FC<InputFieldProps> = ({
  label,
  onChange,
  disabled,
  className,
  debounceTimeout = 0,
  ...rest
}) => {
  const [inputValue, setInputValue] = React.useState('');
  const debouncedValue = useDebouncedValue(inputValue as string, debounceTimeout);

  React.useEffect(() => {
    if (onChange && debounceTimeout) {
      onChange({
        target: {
          id: rest.id,
          name: rest.name,
          value: debouncedValue,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }, [debouncedValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    if (onChange && !debounceTimeout) {
      onChange(event);
    }
  };

  return (
    <InputLabel className={className} label={label} disabled={disabled}>
      <InputFieldBase value={inputValue} onChange={handleChange} disabled={disabled} {...rest} />
    </InputLabel>
  );
};
