import styled, { css } from 'styled-components';

export const ProductBenefitsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProductBenefitsContainer = styled.div`
  padding: 80px 0;
  width: 100%;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      padding: 56px 16px 48px;
    }
  `}
`;

export const ProductBenefitsTitle = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 500;
  font-size: 48px;
  line-height: 140%;
  letter-spacing: 0.0025em;
  color: #121112;
  margin-bottom: 64px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-weight: 600;
      font-size: 28px;
      line-height: 130%;
      letter-spacing: 0.25px;
      margin-bottom: 40px;
    }
  `}
`;

export const ProductBenefitsGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(283px, 1fr));
  gap: 24px;
  width: 100%;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      grid-template-columns: repeat(auto-fit, minmax(156px, 1fr));
      gap: 16px;
    }
  `}
`;

export const ProductBenefitsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  max-width: 384px;
  height: 218px;
  background: #ffffff;
  border: 5px;
  box-shadow: 0 4px 100px rgba(50, 160, 113, 0.02);
  border-radius: 24px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      padding: 16px;
      height: 164px;
    }
  `}
`;

export const CardText = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: #616163;
  margin-bottom: 12px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 14px;
      margin-bottom: 8px;
    }
  `}
`;

export const CardNumbers = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 120%;
  color: #121112;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 16px;
      white-space: nowrap;
    }
  `}
`;

export const ImgContainer = styled.div`
  margin-bottom: 32px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      margin-bottom: 16px;
    }
  `}
  img {
    ${({ theme }) => css`
      @media screen and (max-width: ${theme.media.small}) {
        width: 14px;
      }
    `}
  }
`;

export const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  width: 56px;
  height: 56px;
  background: #d2e7d4;
  box-shadow: 0 4px 100px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      width: 31px;
      height: 31px;
      padding: 7px;
      border-radius: 10.3333px;
    }
  `}
`;
