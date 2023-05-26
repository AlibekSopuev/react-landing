import React, { useEffect, useState } from 'react';
import { RangeSlider } from 'src/components/ui/rangeSlider';
import { FromToValues, StyledTypography, SliderContainer, ValuesContainer, StyledInputField } from './styled';
import { IRangeSliderProps } from 'src/components/ui/rangeSlider/types';
import { formatMoney } from 'src/helpers/utils';
import { Input } from '../../ui/input';
import { MoneyInputField } from '../../ui/inputField/money';
import { useTranslation } from 'react-i18next';
import { InputField } from '../../ui/inputField/main';

export const InvestmentSlider: React.FC<IRangeSliderProps> = ({ onChange, min, max }) => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState([1000]);
  const [investment, setInvestment] = useState('1000');

  useEffect(() => {
    onChange(amount);
  }, [amount]);

  useEffect(() => {
    setAmount([Number(investment)]);
  }, [investment]);

  return (
    <ValuesContainer>
      <FromToValues>
        <StyledTypography variant='body_a'>{t('global.investmentAmount')}</StyledTypography>
        <StyledInputField type='number' value={amount[0]} onChange={(event) => setInvestment(event.target.value)} />
        &nbsp;<span>c</span>
        {/* <Input*/}
        {/*  name='investment'*/}
        {/*  value={amount[0]}*/}
        {/*  onChange={(e) => {*/}
        {/*    setAmount([Number(e.target.value)]);*/}
        {/*  }}*/}
        {/* />*/}
        {/* <MoneyInputField defaultValue={amount[0]} onChange={(value) => setAmount([Number(value)])} />*/}
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
  );
};
