import styled, { css } from 'styled-components';
import Button from '../../../components/ui/button';

export const Wrapper = styled.div`
  padding: 80px 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      padding: 32px 56px 48px;
    }
  `}
  & > button {
    max-width: 248px;
    font-weight: initial;
  }
`;
export const StyledButton = styled(Button)`
  margin-top: 23px !important;
`;
export const Container = styled.div`
  display: flex;
`;

export const InputWrapper = styled.div`
  border-right: #ebebeb 1px solid;
  padding-right: 48px;
  max-width: 500px;
`;

export const CalculationsWrapper = styled.div`
  padding-left: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CalculationTitles = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #616163;
  margin-bottom: 8px;
`;

export const Numbers = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 120%;
  color: #121112;
`;

export const Block = styled.div`
  text-align: left;
`;

export const Title = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  color: #121112;
  margin-bottom: 16px;
`;

export const Text = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  display: flex;
  text-align: left;
  align-items: center;
  letter-spacing: 0.15px;
  color: #616163;
  margin-bottom: 24px;
`;
