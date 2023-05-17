import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 64px;
  width: 100%;
  max-width: 1200px;
  background: #ffffff;
  box-shadow: 0 4px 80px rgba(176, 176, 204, 0.07);
  border-radius: 24px;
`;

export const TextBlock = styled.div``;

export const Title = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 130%;
  display: flex;
  align-items: center;
  letter-spacing: 0.0025em;
  color: #121112;
`;

export const Text = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  color: #616163;
`;

export const FormBlock = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const CalculatorWrapper = styled.div`
  margin-bottom: 23px;
`;

export const Signature = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 135%;
  letter-spacing: 0.15px;
  color: #888888;
  margin-bottom: 16px;

  & > span {
    color: #10a060;
    text-decoration: underline;
  }
`;
