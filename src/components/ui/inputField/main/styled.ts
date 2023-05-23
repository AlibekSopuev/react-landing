import styled from 'styled-components'
import { Typography } from 'ui'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled(Typography)`
  margin-bottom: 12px;

  :empty {
    display: none;
  }
`
