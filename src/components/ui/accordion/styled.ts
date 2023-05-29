import styled, { css } from 'styled-components';

export const AccordionCover = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 16px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      margin-bottom: 12px;
      padding: 24px;
    }
  `}
`;

export const AccordionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-top: solid 1px var(--grey-200);
  svg {
    max-width: 34px;
    min-width: 34px;
    ${({ theme }) => css`
      @media screen and (max-width: ${theme.media.small}) {
        max-width: 24px;
        min-width: 24px;
      }
    `}
  }
`;

export const AccordionTitle = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  color: #121112;
  letter-spacing: 0.15px;
  margin-right: 34px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 16px;
      margin-right: 13px;
    }
  `}
`;

export const Child = styled.div``;
