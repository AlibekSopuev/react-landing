import React, { useEffect, useState } from 'react';
import { RangeSlider } from 'src/components/ui/rangeSlider';
import { FromToValues, StyledTypography, SliderContainer, ValuesContainer } from './styled';
import { IRangeSliderProps } from 'src/components/ui/rangeSlider/types';
import { formatMoney } from 'src/helpers/utils';
import { Input } from '../../ui/input';
import { MoneyInputField } from '../../ui/inputField/money';

export const InvestmentSlider: React.FC<IRangeSliderProps> = ({ onChange, min, max }) => {
  const [amount, setAmount] = useState([1000]);

  useEffect(() => {
    onChange(amount);
  }, [amount]);

  return (
    <ValuesContainer>
      <FromToValues>
        <StyledTypography variant='body_a'>Сумма инвестирования</StyledTypography>
        <StyledTypography variant='body_a'>{formatMoney(amount[0]) + ' c'}</StyledTypography>
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
            setAmount(amount);
          }}
          min={min}
          max={max}
        />
      </SliderContainer>
    </ValuesContainer>
  );
};
