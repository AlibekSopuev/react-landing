import React, { useState } from 'react';
import {
  Container,
  Title,
  Block,
  Number,
  BlocksWrapper,
  CalculatorWrapper,
  ValuesContainer,
  FromToValues,
  StyledTypography,
} from './styled';
import { InvestmentSlider } from 'src/components/shared/investmentSlider';
import { formatMoney } from 'src/helpers/utils';

export const Calculator = () => {
  const [investment, setInvestment] = useState([1000]);

  const handleChange = (newValues: number[]) => {
    setInvestment(newValues);
  };

  const bondsAmount = investment[0] / 1000;
  const quarterIncome = formatMoney((investment[0] * 0.16) / 4);
  const finalSum = formatMoney(investment[0] * 0.16 * 3 + investment[0]);

  return (
    <Container>
      <CalculatorWrapper>
        <InvestmentSlider amount={investment} onChange={handleChange} min={1000} max={1000000} />
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
          <Number>{bondsAmount}</Number>
        </Block>
        <Block>
          <Title>Процент годовых:</Title>
          <Number>16%</Number>
        </Block>
        <Block>
          <Title>Ежеквартальный доход:</Title>
          <Number>{quarterIncome} сом</Number>
        </Block>
        <Block>
          <Title>Сумма в конце срока:</Title>
          <Number>{finalSum} сом</Number>
        </Block>
      </BlocksWrapper>
    </Container>
  );
};
