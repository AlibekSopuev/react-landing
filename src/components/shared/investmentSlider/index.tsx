import React, { useState } from 'react';
import { RangeSlider } from 'src/components/ui/rangeSlider';
import { FromToValues, StyledTypography, SliderContainer, ValuesContainer } from './styled';

export const InvestmentSlider: React.FC = () => {
  const [investment, setInvestment] = useState([0]);

  const handleChange = (newValues: number[]) => {
    setInvestment(newValues);
  };

  return (
    <ValuesContainer>
      <FromToValues>
        <StyledTypography variant='body_a'>Сумма инвестирования</StyledTypography>
        <StyledTypography variant='body_a'>{investment[0]}</StyledTypography>
      </FromToValues>
      <SliderContainer>
        <RangeSlider amount={investment} onChange={handleChange} min={0} max={1000000} />
      </SliderContainer>
    </ValuesContainer>
  );
};
