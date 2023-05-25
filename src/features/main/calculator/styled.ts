import styled, { css } from 'styled-components';
import Typography from '../../../components/ui/typography';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  background: #ffffff;
  box-shadow: 0 4px 80px rgba(176, 176, 204, 0.07);
  border-radius: 32px;
  padding: 56px;
  margin: 0 auto;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      padding: 40px 16px;
    }
  `}
`;

export const CalculatorWrapper = styled.div`
  display: flex;
  margin-bottom: 48px;
  gap: 32px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      display: block;
      margin-bottom: 40px;
    }
  `}
`;

export const BlocksWrapper = styled.div`
  display: flex;
  width: 100%;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      display: block;
    }
  `}
`;

export const BlockContainer = styled.div`
  display: flex;
  width: 100%;
  margin-right: 32px;
  justify-content: space-between;
  &:last-child {
    margin-right: 0;
  }
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      justify-content: space-between;
      margin-bottom: 32px;
    }
    }
  `}
`;

export const Block = styled.div`
  width: 100%;
  max-width: 248px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      max-width: 150px;
    }
  `}
`;

export const LastBlock = styled.div`
  width: 100%;
  max-width: 248px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      max-width: 150px;
    }
  `}
`;

export const Title = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #111111;
  margin-bottom: 12px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 14px;
      margin-bottom: 8px;
      white-space: nowrap;
    }
  `}
`;

export const Number = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 120%;
  color: #121112;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 18px;
    }
  `}
`;

export const ValuesContainer = styled.div`
  border-radius: 16px;
  width: 100%;
  max-width: 528px;
  background-color: ${({ theme }) => theme.colors.grey.primary_inverted.grey50};
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
  color: ${({ theme }) => theme.colors.text.secondary.text500};
`;
