import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 64px;
  width: 100%;
  max-width: 1200px;
  background: #ffffff;
  box-shadow: 0 4px 80px rgba(176, 176, 204, 0.07);
  border-radius: 24px;
  margin-bottom: 160px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      display: block;
      padding: 56px 16px;
      margin-bottom: 0;
    }
  `}
`;

export const TextBlock = styled.div``;

export const Title = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 130%;
  letter-spacing: 0.0025em;
  color: #121112;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 28px;
      margin-bottom: 16px;
    }
  `}
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
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-weight: 400;
      font-size: 18px;
      line-height: 130%;
      margin-bottom: 32px;
    }
  `}
`;

export const FormBlock = styled.div`
  flex-basis: 60%;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      display: block;
    }
  `}
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

  & > a {
    color: #10a060;
    text-decoration: underline;
  }

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 14px;
    }
  `}
`;
