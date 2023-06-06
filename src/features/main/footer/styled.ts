import styled, { css } from 'styled-components';

export const FooterCover = styled.footer`
  padding: 64px 0 80px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      padding: 36px 16px 48px;
    }
  `}
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 53px;
  background: #ffffff;
  border-radius: 24px;
  filter: drop-shadow(0px 4px 100px rgba(0, 0, 0, 0.07));
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      display: block;
      padding: 32px 24px;
    }
  `}
`;

export const BottomContentBox = styled.div`
  min-width: 180px;
  max-width: 210px;
  width: 100%;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      margin-bottom: 24px;
    }
  `}
`;

export const BankInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      margin-bottom: 24px;
    }
  `}
`;

export const BottomContentBoxTitle = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.3px;
  color: #868588;
  margin-bottom: 20px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      margin-bottom: 16px;
      svg {
        width: 143px;
      }
    }
  `}
`;

export const Label = styled.a`
  font-family: 'PT Root UI', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: #434344;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      margin-bottom: 24px;
    }
  `}
`;

export const BankLicense = styled.h6`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.3px;
  color: #868588;
  margin-top: 32px;
  white-space: nowrap;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      white-space: normal;
    }
  `}
`;

export const UsaidLogo = styled.div`
  margin-bottom: 30px;
  img {
    width: 109px;
  }
`;

export const PartnersTitle = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 32px;
  color: #434344;
`;

export const BottomContentBoxText = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.15px;
  color: #434344;
`;

export const Link = styled.a`
  margin-right: 12px;
`;
