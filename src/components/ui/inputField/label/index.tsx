import React from 'react'
import { useTheme } from 'styled-components'
import { InputContainer, Label } from './styled'
import { InputLayoutProps as InputLabelProps } from './types'

export const InputLabel: React.FC<InputLabelProps> = ({
  label,
  disabled,
  className,
  children,
}) => {
  const theme = useTheme()

  return (
    <InputContainer className={className}>
      <Label
        element='label'
        className='label'
        variant='subtitle_a'
        color={disabled ? theme.colors.text.secondary.text400 : theme.colors.text.primary.text800}
      >
        {label}
      </Label>
      {children}
    </InputContainer>
  )
}
