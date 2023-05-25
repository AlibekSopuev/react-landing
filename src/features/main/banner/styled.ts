import styled, { css } from 'styled-components';
import { IconBanner } from '../../../components/icons/iconBanner';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 250px 12px 120px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      display: block;
      padding: 250px 16px 40px;
    }
  `}
`;

export const TextBlock = styled.div`
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      align-items: center;
      text-align: center;
    }
  `}
`;

export const ImgBlock = styled.div`
  max-width: 422px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    ${({ theme }) => css`
      @media screen and (max-width: ${theme.media.small}) {
        max-width: 248px;
        width: 100%;
        padding: 28px 56px 0;
      }
    `}
  }
`;

export const Title = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 140%;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  color: #121112;
  margin-bottom: 24px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-weight: 600;
      font-size: 28px;
      line-height: 130%;
      letter-spacing: 0.25px;
      margin-bottom: 12px;
    }
  `}
`;

export const Text = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 130%;
  letter-spacing: 0.15px;
  color: #616163;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 18px;
      line-height: 139.5%;
    }
  `}
`;
