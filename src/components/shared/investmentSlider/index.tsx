import React from 'react';
import { RangeSlider } from 'src/components/ui/rangeSlider';
import { FromToValues, StyledTypography, SliderContainer, ValuesContainer } from './styled';
import { IRangeSliderProps } from 'src/components/ui/rangeSlider/types';
import { formatMoney } from 'src/helpers/utils';

export const InvestmentSlider: React.FC<IRangeSliderProps> = ({ onChange, amount, min, max }) => {
  return (
    <ValuesContainer>
      <FromToValues>
        <StyledTypography variant='body_a'>Сумма инвестирования</StyledTypography>
        <StyledTypography variant='body_a'>{formatMoney(amount[0]) + ' c'}</StyledTypography>
      </FromToValues>
      <SliderContainer>
        <RangeSlider amount={amount} onChange={onChange} min={min} max={max} />
      </SliderContainer>
    </ValuesContainer>
  );
};
