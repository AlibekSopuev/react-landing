import { InputFieldProps } from '../main/types';

export type MoneyInputFieldProps = InputFieldProps & {
  label?: string;
  onChange?: (value: string) => void;
  defaultValue?: string | number;
  value?: any;
};
