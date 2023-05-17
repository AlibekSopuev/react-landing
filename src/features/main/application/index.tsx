import React, { useState } from 'react';
import { Container, TextBlock, FormBlock, Title, Text, InputWrapper, CalculatorWrapper, Signature } from './styled';
import { Input } from '../../../components/ui/input';
import { InvestmentSlider } from '../../../components/shared/investmentSlider';
import { formatMoney } from '../../../helpers/utils';
import Button from '../../../components/ui/button';
import { Calculator } from '../calculator';
export const Application = () => {
  const [investment, setInvestment] = useState([1000]);

  const handleChange = (newValues: number[]) => {
    setInvestment(newValues);
  };

  const bondsAmount = investment[0] / 1000;
  const quarterIncome = formatMoney((investment[0] * 0.16) / 4);
  const finalSum = formatMoney(investment[0] * 0.16 * 3 + investment[0]);
  return (
    <Container>
      <TextBlock>
        <Title>Инвестировать прямо сейчас!</Title>
        <Text>Оставьте свои данные и наши специалисты свяжутся с Вами в ближайшее время</Text>
      </TextBlock>
      <FormBlock>
        <CalculatorWrapper>
          <InputWrapper>
            <Input
              name='phoneNumber'
              onChange={() => {
                console.log('hello');
              }}
              value={''}
              placeholder='Ваше имя'
            />
            <Input
              name='phoneNumber'
              onChange={() => {
                console.log('hello');
              }}
              value={''}
              placeholder='Ваш номер телефона'
            />
          </InputWrapper>
          <InvestmentSlider amount={investment} onChange={handleChange} min={1000} max={8500000} />
        </CalculatorWrapper>
        <Signature>
          Оставляя заявку, я соглашаюсь на <span>обработку персональных данных</span>
        </Signature>
        <Button type='submit'>Оставить заявку</Button>
      </FormBlock>
    </Container>
  );
};
