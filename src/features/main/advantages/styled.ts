import styled from 'styled-components';

export const AdvantagesGrid = styled.div`
  display: grid;
  grid-gap: 24px;
  background-color: #fff;
  color: #444;
`;

export const AdvantagesBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;
  max-width: 585px;
  //max-height: 471px;
  background: #ffffff;
  box-shadow: 0 4px 100px rgba(50, 160, 113, 0.02);
  border-radius: 24px;
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
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProductBenefitsContainer = styled.div`
  padding: 80px 120px;
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
`;

export const ImgContainer = styled.div`
  margin-bottom: 24px;
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
`;

export const AdvantagesText = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 180%;
  color: #616163;
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
`;
