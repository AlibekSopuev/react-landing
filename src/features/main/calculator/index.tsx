import React from 'react';
import {
  Container,
  Title,
  Block,
  Number,
  BlocksWrapper,
  CalculatorWrapper,
  StyledInvestmentSlider,
  ValuesContainer,
  FromToValues,
  StyledTypography,
} from './styled';
import { InvestmentSlider } from '../../../components/shared/investmentSlider';

export const Calculator = () => {
  return (
    <Container>
      <CalculatorWrapper>
        <StyledInvestmentSlider />
        <ValuesContainer>
          <FromToValues>
            <StyledTypography variant={'body_a'}>На период</StyledTypography>
            <StyledTypography variant={'body_a'}>3 года</StyledTypography>
          </FromToValues>
        </ValuesContainer>
      </CalculatorWrapper>
      <BlocksWrapper>
        <Block>
          <Title>Количество облигаций:</Title>
          <Number>10</Number>
        </Block>
        <Block>
          <Title>Процент годовых</Title>
          <Number>16%</Number>
        </Block>
        <Block>
          <Title>Ежеквартальный доход</Title>
          <Number>40 000 сом</Number>
        </Block>
        <Block>
          <Title>Общий обьем инвестиций</Title>
          <Number>1 480000 сом</Number>
        </Block>
      </BlocksWrapper>
    </Container>
  );
};
