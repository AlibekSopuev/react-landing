import styled from 'styled-components';
import { ISnackbarParams } from './types';

export const Container = styled.div<ISnackbarParams>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  min-height: 40px;
  padding: 11px;
  background: ${({ theme }) => theme.colors.text.primary_inverted.text75};
  color: ${({ theme }) => theme.colors.text.primary.text700};

  & > svg {
    min-width: 24px;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
`;
