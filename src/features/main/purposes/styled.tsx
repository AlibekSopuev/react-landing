import styled, { css } from 'styled-components';

interface ICardProps {
  backgroundImage: string;
}

export const ProductBenefitsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProductBenefitsContainer = styled.div`
  padding: 80px 10px;
  width: 100%;
`;

export const ProductBenefitsTitle = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 200;
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
    }
  `}
`;

export const ProductBenefitsGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(278px, 1fr));
  gap: 24px;
  width: 100%;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      grid-template-columns: repeat(auto-fit, minmax(156px, 1fr));
      gap: 16px;
    }
  `}
`;

export const ProductBenefitsCard = styled.div<ICardProps>`
  padding: 32px 24px 24px 32px;
  max-width: 384px;
  height: 218px;
  border-radius: 24px;
  background: url(${(props) => props.backgroundImage}) no-repeat;
  background-size: 65% 65%;
  background-position: 130px 50px;
  box-shadow: 0 4px 80px rgba(176, 176, 204, 0.07);
  background-color: #ffffff;

  h2 {
    font-family: 'PT Root UI', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: #212021;
    margin: 0;
  }
`;

export const Card = styled.div`
  padding: 32px 24px 24px 32px;
  max-width: 384px;
  height: 218px;
  border-radius: 24px;
  box-shadow: 0 4px 80px rgba(176, 176, 204, 0.07);
  background-color: #ffffff;
  position: relative;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      padding: 24px;
    }
  `}

  h2 {
    font-family: 'PT Root UI', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: #212021;
    margin: 0;
    ${({ theme }) => css`
      @media screen and (max-width: ${theme.media.small}) {
        font-size: 16px;
      }
    `}
  }

  svg {
    position: absolute;
    right: 20px;
    bottom: 20px;
    ${({ theme }) => css`
      @media screen and (max-width: ${theme.media.small}) {
        width: 105px;
      }
    `}
  }
`;
