import styled, { css } from 'styled-components';
import { Select } from 'src/components/ui/select';

export const CustomSelect = styled(Select)`
  .title-container {
    max-width: 180px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    background: #fafafa;
    border: 2px solid #ebebeb;
    border-radius: 12px;
    padding: 12px 12px 12px 20px;
    gap: 6px;
    ${({ theme }) => css`
      @media screen and (max-width: ${theme.media.small}) {
        padding: 12px 12.5px;
      }
    `}
  }

  .input {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.4px;
    border: none;
    padding: 0 0 0 8px;
    height: initial;
  }

  .icon-value-container,
  .icon-container {
    position: relative;
    left: 0;
    right: 0;
    transform: none;
  }

  .dropdownList {
    width: 202px;
    padding: 8px;
    left: -52px;
    bottom: -170px;
    ${({ theme }) => css`
      @media screen and (max-width: ${theme.media.small}) {
        width: initial;
        left: initial;
        padding: 13px;
      }
    `}
  }
`;

interface IListItem {
  selected: boolean;
}

export const ListItem = styled.li<IListItem>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding: 12px 8px;
  border-radius: 8px;
  background-color: ${({ selected }) => selected && '#F5F5F5'};

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      background-color: white;
    }
  `}

  svg {
    margin-right: 12px;
    ${({ theme }) => css`
      @media screen and (max-width: ${theme.media.small}) {
        margin-right: 0;
      }
    `}
  }
`;
