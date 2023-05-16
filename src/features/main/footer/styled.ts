import styled from 'styled-components';

export const FooterCover = styled.footer`
  margin-top: 64px;
  padding: 0 16px;
`;

export const Container = styled.div`
  max-width: 1232px;
  width: 100%;
  margin: 0 auto;
`;

export const FooterTop = styled.div``;

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
`;

export const BottomContentBoxTitle = styled.h6`
  color: var(--grey-200);
  margin-bottom: 20px;
`;

export const BottomContentBoxText = styled.div`
  color: var(--grey-200);
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
