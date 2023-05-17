import styled, { css } from 'styled-components';
import { IButtonProps } from './types';

export const Button = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding: 0 16px;
  margin: 0;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 17px;
  line-height: 17px;
  letter-spacing: 0.4px;
  border: none;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.track.main};
  color: ${({ theme }) => theme.colors.text.primary_inverted.contrast_text};
  outline: none;
  width: 100%;
  max-width: 536px;

  &:not(:disabled):hover {
    opacity: 0.9;
  }

  ${({ primary, theme }) =>
    primary &&
    css`
      background: ${theme.colors.primary.main};
      color: ${theme.colors.text.primary_inverted.contrast_text};
    `}

  ${({ secondary, theme }) =>
    secondary &&
    css`
      background: ${theme.colors.primary.light200};
      color: ${theme.colors.primary.main};
    `}

  ${({ info, theme }) =>
    info &&
    css`
      background: ${theme.colors.informative.main};
      color: ${theme.colors.text.primary_inverted.contrast_text};
    `}

  ${({ danger, theme }) =>
    danger &&
    css`
      background: ${theme.colors.destructive.dark};
      color: ${theme.colors.text.primary_inverted.contrast_text};
    `}

  ${({ transparent, theme }) =>
    transparent &&
    css`
      background: transparent;
      color: ${theme.colors.primary.main};
    `}

    ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ disabled, transparent, theme }) =>
    disabled &&
    css`
      color: ${theme.colors.text.primary_inverted.contrast_text} !important;
      background: ${transparent ? 'transparent' : theme.colors.grey.disabled.grey200} !important;
      & svg path {
        stroke: ${theme.colors.text.primary_inverted.contrast_text} !important;
      }
    `}

  ${({ dashed, theme }) =>
    dashed &&
    css`
      border: 1px dashed #cbc7ed;
      background: transparent;
      color: ${theme.colors.primary.main};
    `}
`;
