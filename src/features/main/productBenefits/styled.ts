import styled from 'styled-components';

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
  font-weight: 500;
  font-size: 48px;
  line-height: 140%;
  letter-spacing: 0.0025em;
  color: #121112;
  margin-bottom: 64px;
`;

export const ProductBenefitsGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(278px, 1fr));
  gap: 24px;
  width: 100%;
`;

export const ProductBenefitsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  max-width: 384px;
  max-height: 218px;
  background: #ffffff;
  border: 5px;
  box-shadow: 0 4px 100px rgba(50, 160, 113, 0.02);
  border-radius: 24px;
`;

export const CardText = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: #616163;
  margin-bottom: 12px;
`;

export const CardNumbers = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 28px;
  //line-height: 120%;
  color: #121112;
`;

export const ImgContainer = styled.div`
  margin-bottom: 32px;
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
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
`;
