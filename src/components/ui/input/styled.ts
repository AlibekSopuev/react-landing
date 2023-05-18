import styled, { css } from 'styled-components';
import { IFormInputProps } from './types';

export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.grey.secondary.grey500};
  font-size: 16px;
  font-weight: 100;
  position: absolute;
  pointer-events: none;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease-in-out;
  left: 19px;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

export const InputField = styled.input<IFormInputProps>`
  border: 2px solid #ebebeb;
  display: block;
  width: 100%;
  height: 56px;
  color: ${({ theme }) => theme.colors.grey.primary.grey800};
  letter-spacing: 0.15px;
  font-size: 16px;
  line-height: 19px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.grey.primary_inverted.grey50};
  outline: none;
  border-radius: 16px;
  text-decoration: none;

  :not(:placeholder-shown) + ${Label}, :read-only + ${Label}, input:focus {
    outline: none;
  }

  :not(:placeholder-shown) + ${Label}, input:read-only + ${Label}, input:focus + ${Label} {
    font-size: 12px;
    line-height: 14px;
    top: 14px;
  }

  :focus + ${Label}, input:read-only + ${Label}, input:focus + ${Label} {
    font-size: 12px;
    line-height: 14px;
    top: 14px;
  }
  .input:not(:placeholder-shown) {
    background: var(--grey-50);
    border: 2px solid var(--grey-100);
  }

  .input:focus {
    outline: none;
    background: var(--grey-50);
    border: 2px solid var(--grey-100);
  }

  .input::placeholder {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #a0a0a3;
  }

  ${(props: any) =>
    props.err &&
    css`
      border: solid 1px var(--error-main) !important;
    `}
`;

export const InputErrText = styled.div`
  color: var(--error-main);
  letter-spacing: 0.4px;
  font-size: 12px;
  line-height: 20px;
  padding-left: 12px;
  margin-top: 8px;
`;
