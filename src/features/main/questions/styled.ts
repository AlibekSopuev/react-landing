import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      padding: 48px 16px;
    }
  `}
`;

export const Title = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  color: #121112;
  margin-bottom: 64px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 28px;
      line-height: 130%;
      margin-bottom: 40px;
    }
  `}
`;

export const Text = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: #323233;
  & > span {
    font-weight: 550;
  }

  a {
    color: #10a060;
    text-decoration: underline;
  }
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 16px;
    }
  `}
`;

export const TextWithMargin = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: #323233;
  margin-bottom: 35px;

  & > span {
    font-weight: 550;
  }

  a {
    color: #10a060;
    text-decoration: underline;
  }

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 16px;
    }
  `}
`;

export const BoxList = styled.ul`
  list-style-type: decimal;

  & li {
    font-family: 'PT Root UI', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #323233;
    margin-left: 22px;
    margin-bottom: 12px;
    ${({ theme }) => css`
      @media screen and (max-width: ${theme.media.small}) {
        font-size: 16px;
      }
    `}
  }
`;
