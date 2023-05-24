import { InputFieldBaseProps } from '../base/types'

export interface InputFieldProps extends InputFieldBaseProps {
  label?: string
  debounceTimeout?: number
}
