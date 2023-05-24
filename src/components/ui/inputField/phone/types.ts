import { InputFieldProps } from '../main/types';

export type PhoneInputFieldProps = Omit<InputFieldProps, 'onChange' | 'value'> & {
  label?: string;
  onChange?: (key: string) => void;
  defaultValue?: string | number;
};
