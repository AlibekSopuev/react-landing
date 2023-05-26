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
  BlockContainer,
  LastBlock,
} from './styled';
import { InvestmentSlider } from 'src/components/shared/investmentSlider';
import { formatMoney } from 'src/helpers/utils';
import { useTranslation } from 'react-i18next';

const Calculator = () => {
  const { t } = useTranslation();
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
            <StyledTypography variant={'body_a'}>{t('global.maturity')}</StyledTypography>
            <StyledTypography variant={'body_a'}>3{t('global.maturityAmount')}</StyledTypography>
          </FromToValues>
        </ValuesContainer>
      </CalculatorWrapper>
      <BlocksWrapper>
        <BlockContainer>
          <Block>
            <Title>{t('global.numberOfBonds')}</Title>
            <Number>{bondsAmount}</Number>
          </Block>
          <Block>
            <Title>{t('global.interestRate')}</Title>
            <Number>16%</Number>
          </Block>
        </BlockContainer>
        <BlockContainer>
          <Block>
            <Title>{t('global.quarterlyIncome')}</Title>
            <Number>
              {quarterIncome} {t('global.currency')}
            </Number>
          </Block>
          <LastBlock>
            <Title>{t('global.totalInvestment')}</Title>
            <Number>
              {finalSum} {t('global.currency')}
            </Number>
          </LastBlock>
        </BlockContainer>
      </BlocksWrapper>
    </Container>
  );
};

export default Calculator;
