import styled, { css } from 'styled-components'

export const InputIconGroup = styled.div`
  padding: 16px;
  display: flex;
  justify-content: right;
  user-select: none;
  & > * {
    cursor: pointer;
    width: 24px;
    height: 24px;
    padding-left: 4px;
    border: none;
    background: transparent;
  }
`;

export const InputErrorMessage = styled.div`
  display: ${({ children }) => (children ? 'block' : 'none')};
  padding: 8px 16px 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.destructive.main};
`;

export const FloatLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-width: 260px;
  position: relative;
  box-sizing: border-box;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.grey.disabled.grey100};
  border: 2px solid ${({ theme }) => theme.colors.grey.disabled.grey100};
  overflow: hidden;

  & > input {
    width: 100%;
    height: 56px;
    padding: 24px 16px 8px;
    outline: 0;
    background: transparent;
    font-size: 16px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  
  ${({ theme }) => css`
    & > label {
      position: absolute;
      left: 16px;
      font-size: 16px;
      line-height: 16px;
      color: ${theme.colors.text.secondary.text500};
      pointer-events: none;
      transform: translate(0, calc(50% + 12px)) scale(1);
      transform-origin: top left;
      transition: all 0.2s ease-out;
    }
    &.active {
      border: 2px solid ${theme.colors.grey.disabled.grey100};
      background-color: ${theme.colors.grey.primary_inverted.grey50};
    }
    &.active:focus-within {
      border: 2px solid ${({ theme }) => theme.colors.primary.light100};
      background-color: ${({ theme }) => theme.colors.grey.primary_inverted.grey0};
    }
  `}

  &:focus-within > label {
    transform: translate(0, 8px) scale(0.75);
  }
  &.active > label {
    transform: translate(0, 8px) scale(0.75);
  }
`;
