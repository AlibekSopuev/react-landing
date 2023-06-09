import styled, { css } from 'styled-components';
import Button from '../../../components/ui/button';

export const Wrapper = styled.div`
  padding: 48px 0 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      padding: 32px 0 48px;
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

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      flex-direction: column-reverse;
    }
  `}
`;

export const InputWrapper = styled.div`
  border-right: #ebebeb 1px solid;
  padding-right: 48px;
  max-width: 500px;

  form > div {
    margin-bottom: 16px;
  }

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      border-right: none;
      padding-right: 0;
    }
  `}
`;

export const CalculationsWrapper = styled.div`
  padding-left: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      padding-left: 0;
      flex-wrap: wrap;
      flex-direction: initial;
    }
  `}
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

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 24px;
    }
  `}
`;

export const Block = styled.div`
  text-align: left;
  width: 100%;
  max-width: 240px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      max-width: 135px;
      margin-bottom: 24px;
      :last-child {
        max-width: 382px;
      }
    }
  `}
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

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-weight: 500;
      font-size: 14px;
      line-height: 140%;
    }
  `}
`;
