import styled from 'styled-components';
import { InvestmentSlider } from '../../../components/shared/investmentSlider';
import Typography from '../../../components/ui/typography';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  background: #ffffff;
  box-shadow: 0 4px 80px rgba(176, 176, 204, 0.07);
  border-radius: 32px;
  padding: 56px;
  margin: 0 auto;
`;

export const CalculatorWrapper = styled.div`
  display: flex;
  margin-bottom: 48px;
  gap: 32px;
`;

export const BlocksWrapper = styled.div`
  display: flex;
`;

export const Block = styled.div`
  width: 100%;
  max-width: 248px;
  margin-right: 32px;
`;

export const Title = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #111111;
  margin-bottom: 12px;
`;

export const Number = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 120%;
  color: #121112;
`;

export const StyledInvestmentSlider = styled(InvestmentSlider)`
  width: 100%;
  max-width: 528px;
`;

export const ValuesContainer = styled.div`
  border-radius: 16px;
  width: 100%;
  max-width: 528px;
`;

export const FromToValues = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 18px;
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.colors.grey.disabled.grey100};
`;

export const StyledTypography = styled(Typography)`
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text.primary.text800};
`;
