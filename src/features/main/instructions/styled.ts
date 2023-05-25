import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: 80px 10px;
  width: 100%;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      padding: 56px 16px;
    }
  `}
`;

export const Title = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 140%;
  letter-spacing: 0.15px;
  color: #121112;
  margin-bottom: 80px;

  & > span {
    color: #10a060;
  }
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 28px;
      line-height: 130%;
      margin-bottom: 40px;
    }
  `}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  padding-right: 70px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      display: none;
    }
  `}
`;

export const CardsWrapper = styled.div``;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 32px;
  gap: 24px;
  width: 100%;
  max-width: 690px;
  min-width: 500px;
  background: #ffffff;
  box-shadow: 0 4px 80px rgba(176, 176, 204, 0.07);
  border-radius: 24px;
  margin-bottom: 24px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      min-width: 0;
      padding: 32px 16px;
      gap: 16px;
    }
  `}
`;

export const IconBlock = styled.div`
  svg {
    ${({ theme }) => css`
      @media screen and (max-width: ${theme.media.small}) {
        width: 22px;
      }
    `}
  }
`;

export const TextBlock = styled.div``;

export const CardTitle = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  color: #212021;
  margin-bottom: 16px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 16px;
    }
  `}
`;

export const CardText = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.15px;
  color: #616163;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 14px;
    }
  `}
`;
