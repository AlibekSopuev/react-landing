import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContent = styled.div`
  position: relative;
  width: 100%;
`;

export const InputErrorText = styled.div`
  font-family: ${({ theme }) => theme.fontFace.pt_root_ui_regular};
  text-align: left;
  margin-top: 15px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colors.destructive.main};
  padding: 0 16px;
`;

export const InputSideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StyledInput = styled.input`
  margin: 0;
  caret-color: ${({ theme }) => theme.colors.primary.main};
  font-family: ${({ theme }) => theme.fontFace.pt_root_ui_regular};
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  width: 100%;
  outline: none;
  border: none;
  background: inherit;

  &:read-only {
    cursor: pointer;
  }

  // TODO конкретно этот цвет не работает в Safari. Временно убрал для disabled, разница с дефолтным минимальная. Нужно найти решение для Сафари.
  &:disabled {
    // color: ${({ theme }) => theme.colors.text.disabled.text300};
  }
`;

export const InputWrapper = styled.div<{ floatLabel?: boolean }>`
  position: relative;
  background: ${({ theme }) => theme.colors.grey.primary_inverted.grey50};
  border: solid 2px ${({ theme }) => theme.colors.grey.disabled.grey100};
  gap: 4px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 16px;
  padding: 12px 16px;

  &.input-empty {
    background: ${({ theme }) => theme.colors.grey.primary_inverted.grey50};
  }

  &:focus-within {
    border: solid 2px ${({ theme }) => theme.colors.track.light};
    background: ${({ theme }) => theme.colors.grey.primary_inverted.grey0};
  }

  & .input-placeholder {
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.text.secondary.text400};
  }

  &.input-empty,
  &.input-focused {
    .input-placeholder {
      top: 0;
      font-family: ${({ theme }) => theme.fontFace.pt_root_ui_regular};
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 137%;
    }
  }

  ${({ floatLabel }) =>
    floatLabel &&
    css`
      .input {
        margin-top: 6px;
      }
    `}
`;
