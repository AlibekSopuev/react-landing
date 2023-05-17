export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element[] | JSX.Element | React.ReactNode
  onClick?: (e?: React.MouseEvent) => void
  onSubmit?: (e?: any) => void
  primary?: boolean
  secondary?: boolean
  info?: boolean
  dashed?: boolean
  danger?: boolean
  style?: React.CSSProperties
  transparent?: boolean
  fullWidth?: boolean
  center?: boolean
}
