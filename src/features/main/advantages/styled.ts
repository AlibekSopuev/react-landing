import styled, { css } from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Два столбца */
  grid-gap: 24px; /* Промежуток между блоками */
  color: #444;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      grid-template-columns: 1fr; /* Одна колонка на мобильных устройствах */
      grid-gap: 16px; /* Промежуток между блоками */
    }
  `}
`;

export const LeftBlock = styled.div`
  grid-column: 1; /* Занимает первый столбец */
  background: #ffffff;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 4px 100px rgba(50, 160, 113, 0.02);

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      padding: 24px;
    }
  `}
`;

export const RightBlock = styled.div`
  grid-column: 2; /* Занимает второй столбец */
  display: grid;
  grid-template-rows: 1fr 1fr; /* Два малых блока по высоте */
  grid-gap: 24px; /* Промежуток между малыми блоками */

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      grid-column: 1; /* Занимает всю ширину на мобильных устройствах */
      grid-gap: 16px; /* Уменьшаем промежуток на мобильных устройствах */
    }
  `}
`;

export const SmallBlock = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 4px 100px rgba(50, 160, 113, 0.02);
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      padding: 24px;
    }
  `}
`;

export const ProductBenefitsWrapper = styled.div`
  width: 100%;
  //max-width: 1200px;
  align-items: center;
  display: flex;
  justify-content: center;
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
      margin-bottom: 40px;
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
