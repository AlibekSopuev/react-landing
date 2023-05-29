import React, { useEffect, useState } from 'react';
import { RangeSlider } from 'src/components/ui/rangeSlider';
import {
  FromToValues,
  StyledTypography,
  SliderContainer,
  ValuesContainer,
  StyledInputField,
  Container,
} from './styled';
import { useTranslation } from 'react-i18next';
import { InputErrorText } from '../../ui/inputField/base/styled';
import { ISliderProps } from './types';

export const InvestmentSlider: React.FC<ISliderProps> = ({ onChange, min, max, error }) => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState([1000]);
  const [investment, setInvestment] = useState('1000');

  useEffect(() => {
    setAmount([Number(investment)]);
    onChange(Number(investment));
  }, [investment]);

  return (
    <Container>
      <ValuesContainer>
        <FromToValues>
          <StyledTypography variant='body_a'>{t('global.investmentAmount')}</StyledTypography>
          <StyledInputField type='number' value={amount[0]} onChange={(event) => setInvestment(event.target.value)} />
          &nbsp;<span style={{ textDecoration: 'underline' }}>c</span>
        </FromToValues>
        <SliderContainer>
          <RangeSlider
            amount={amount}
            onChange={(amount: number[]) => {
              setInvestment(String(amount[0]));
            }}
            min={min}
            max={max}
          />
        </SliderContainer>
      </ValuesContainer>
      {error && <InputErrorText className='input-text__error'>{error}</InputErrorText>}
    </Container>
  );
};
