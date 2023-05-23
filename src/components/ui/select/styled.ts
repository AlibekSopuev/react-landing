import styled from 'styled-components';
import { IDropdownListItem } from './types';

export const DropdownWrapper = styled.div`
  width: inherit;
  position: relative;
`;

export const DropdownContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  position: absolute;
  bottom: -105px;
  right: 0;
  left: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.grey.primary_inverted.grey0};
  border-radius: 8px;
  border: solid 1px ${({ theme }) => theme.colors.grey.disabled.grey100};
`;

export const DropdownListItem = styled.li<IDropdownListItem>`
  padding: 12px 16px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: var(--grey-1000);
  background: ${({ selected, theme }) => selected && theme.colors.grey.disabled.grey100}};
`;

export const DropdownTitleContainer = styled.div`
  position: relative;
`;

interface IStyledInputProps {
  showSelectedValueIcon: boolean;
  hasLabel: boolean;
}

export const StyledInput = styled.input<IStyledInputProps>`
  border: none;
  display: block;
  width: 100%;
  height: 48px;
  color: ${({ theme }) => theme.colors.grey.primary.grey800};
  letter-spacing: 0.15px;
  font-size: 16px;
  line-height: 19px;
  background: ${({ theme }) => theme.colors.grey.disabled.grey100};
  cursor: pointer;
  border-radius: 8px;
  padding: ${({ showSelectedValueIcon, hasLabel }) => {
    const top = hasLabel ? '22px' : '0';
    const bottom = hasLabel ? '8px' : '0';

    return showSelectedValueIcon ? `${top} 16px ${bottom} 45px` : `${top} 16px ${bottom}`;
  }};

  &:not(:placeholder-shown) {
    background: ${({ theme }) => theme.colors.grey.primary_inverted.grey50};
    border: 2px solid ${({ theme }) => theme.colors.grey.disabled.grey100};
  }

  &:focus {
    background: ${({ theme }) => theme.colors.grey.primary_inverted.grey50};
    border: 2px solid ${({ theme }) => theme.colors.grey.disabled.grey100};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.grey.primary_inverted.grey50};
    color: #bbbabe;
  }

  &::placeholder {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #a0a0a3;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 8px;
`;

export const IconValueContainer = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 8px;
`;

export const Label = styled.label`
  position: absolute;
  top: 14px;
  left: 19px;
  font-size: 12px;
  font-weight: 100;
  line-height: 16px;
  pointer-events: none;
  color: #a0a0a3;
  transform: translateY(-50%);
  transition: all 0.2s ease-in-out;
  z-index: 1;
`;
