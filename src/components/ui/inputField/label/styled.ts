import styled, { css } from 'styled-components';
import Typography from '../../typography';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      margin-bottom: 16px;
    }
  `}
`;

export const Label = styled(Typography)`
  margin-bottom: 12px;

  :empty {
    display: none;
  }
`;
