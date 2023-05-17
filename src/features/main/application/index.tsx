import React, { useState } from 'react';
import { Container, TextBlock, FormBlock, Title, Text, InputWrapper, CalculatorWrapper, Signature } from './styled';
import { Input } from '../../../components/ui/input';
import { InvestmentSlider } from '../../../components/shared/investmentSlider';
import Button from '../../../components/ui/button';
import { useFormik } from 'formik';
import { sendApplication } from '../../../services/sendApplication';
import * as Yup from 'yup';

export const Application = () => {
  const formik = useFormik<{ fullName: string; phoneNumber: string; investment: number[] }>({
    initialValues: { fullName: '', phoneNumber: '', investment: [1000] },
    onSubmit: async (values) => {
      const quantity = values.investment[0] / 1000;
      await sendApplication(values.fullName, values.phoneNumber, quantity);
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('required'),
      phoneNumber: Yup.string().required('required'),
      investment: Yup.array(),
    }),
  });

  const {
    values: { investment, phoneNumber, fullName },
    handleChange,
    handleSubmit,
    setFieldValue,
  } = formik;

  return (
    <Container>
      <TextBlock>
        <Title>Инвестировать прямо сейчас!</Title>
        <Text>
          Оставьте свои данные и наши специалисты <br /> свяжутся с Вами в ближайшее время
        </Text>
      </TextBlock>
      <FormBlock>
        <CalculatorWrapper>
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <Input name='fullName' onChange={handleChange} value={fullName} label='Ваше имя' />
              <Input
                name='phoneNumber'
                onChange={(values) => setFieldValue('phoneNumber', values)}
                value={phoneNumber}
                label='Ваш номер телефона'
                mask={'+{996}000000000'}
                isMasked
              />
            </InputWrapper>
            <InvestmentSlider
              amount={investment}
              onChange={(values) => setFieldValue('investment', values)}
              min={1000}
              max={1000000}
            />
          </form>
        </CalculatorWrapper>
        <Signature>
          Оставляя заявку, я соглашаюсь на &nbsp;
          <a
            href={
              'http://cbd.minjust.gov.kg/act/view/ru-ru/202269#:~:text=%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F%209.%20%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5%20%D1%81%D1%83%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B8%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83%20%D0%B5%D0%B3%D0%BE%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85'
            }
            target='_blank'
            rel='noreferrer'
          >
            обработку персональных данных
          </a>
        </Signature>
        <Button type='submit' onClick={() => handleSubmit()}>
          Оставить заявку
        </Button>
      </FormBlock>
    </Container>
  );
};
