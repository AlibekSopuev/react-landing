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

  & > div:not(:last-child) {
    margin-right: 60px;
  }
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      display: block;
      padding: 32px 24px;
    }
  `}
`;

export const TopContentBoxTitle = styled.h3`
  display: block;
  color: var(--grey-800);
  margin-bottom: 16px;

  & strong {
    display: block;
    color: var(--grey-800);
    margin-bottom: -7px;
  }
`;

export const TopContentBoxList = styled.ul`
  & li {
    margin-bottom: 12px;
  }

  & li a {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: var(--grey-650);
    text-decoration: none;
  }
`;

export const TopContentTypography = styled.p`
  display: block;
  width: 100%;
`;

export const MobileBox = styled.div`
  display: block;
`;

export const BottomContentBox = styled.div`
  min-width: 180px;
  max-width: 210px;
  width: 100%;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      margin-bottom: 0;
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
  margin-top: auto;
`;

export const BottomContentBoxText = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.15px;
  color: #434344;
`;

export const Empty = styled.div`
  width: 100%;
  min-width: 180px;
  max-width: 210px;
`;

export const SocialIconsBox = styled.div`
  & svg:not(:last-child) {
    margin-right: 12px;
  }
`;
