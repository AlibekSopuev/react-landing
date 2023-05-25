import styled, { css } from 'styled-components';

export const AdvantagesGrid = styled.div`
  display: grid;
  grid-gap: 24px;
  color: #444;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      display: block;
    }
  `}
`;

export const AdvantagesBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;
  max-width: 585px;
  background: #ffffff;
  box-shadow: 0 4px 100px rgba(50, 160, 113, 0.02);
  border-radius: 24px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      padding: 24px;
      margin-bottom: 16px;
    }
  `}
`;

export const Item1 = styled(AdvantagesBlock)`
  grid-column: 1;
  grid-row: 1 / 3;
`;

export const Item2 = styled(AdvantagesBlock)`
  grid-row: 1;
`;

export const Item3 = styled(AdvantagesBlock)`
  grid-row: 2;
`;

export const ProductBenefitsWrapper = styled.div`
  width: 100%;
  //max-width: 1200px;
  align-items: center;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
`;
export const ProductBenefitsContainer = styled.div`
  padding: 80px 10px;
  width: 100%;
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
    }
  `}
`;

export const ImgContainer = styled.div`
  margin-bottom: 24px;
  svg {
    ${({ theme }) => css`
      @media screen and (max-width: ${theme.media.small}) {
        width: 18.08px;
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

export const AdvantagesTitle = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: 0.3px;
  color: #121112;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 16px;
      margin-bottom: 16px;
    }
  `}
`;

export const AdvantagesText = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 180%;
  color: #616163;
  & > div {
    margin-bottom: 7px;
  }

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-weight: 400;
      font-size: 14px;
      line-height: 120%;
    }
  `}
`;

export const TextContainer = styled.div`
  margin-bottom: 104px;
`;

export const Button = styled.a`
  padding: 5px;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: 0.4px;
  color: #10a060;
  gap: 13px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 14px;
      line-height: 18px;
    }
  `}
`;
