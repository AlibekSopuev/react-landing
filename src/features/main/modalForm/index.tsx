import React, { useState } from 'react';
import {
  Block,
  CalculationsWrapper,
  CalculationTitles,
  Container,
  InputWrapper,
  Numbers,
  Text,
  Title,
  Wrapper,
} from './styled';
import Button from '../../../components/ui/button';
import Modal from '../../../components/ui/modal';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { sendApplication } from '../../../services/sendApplication';
import { InvestmentSlider } from '../../../components/shared/investmentSlider';
import { Input } from '../../../components/ui/input';

export const ModalForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Я инвестирую
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Container>
          <InputWrapper>
            <Title>Оставить заявку</Title>
            <Text>Оставьте свои данные и наши специалисты свяжутся с Вами в ближайшее время</Text>
            <Formik
              onSubmit={async (values) => {
                console.log({ values });
                const quantity = values.investment[0] / 1000;
                await sendApplication(values.fullName, values.phoneNumber, quantity);
                setOpen(false);
              }}
              initialValues={{ fullName: '', phoneNumber: '', investment: [1000] }}
              validationSchema={Yup.object({
                fullName: Yup.string().required('required'),
                phoneNumber: Yup.string().required('required'),
                investment: Yup.array(),
              })}
            >
              {({ values, handleChange, handleSubmit, setFieldValue }) => (
                <form onSubmit={handleSubmit}>
                  <Input name='fullName' onChange={handleChange} value={values.fullName} label='Ваше имя' />
                  <Input
                    name='phoneNumber'
                    onChange={(values) => setFieldValue('phoneNumber', values)}
                    value={values.phoneNumber}
                    label='Ваш номер телефона'
                    mask={'+{996}000000000'}
                    isMasked
                  />
                  <InvestmentSlider
                    amount={values.investment}
                    onChange={(values) => setFieldValue('investment', values)}
                    min={1000}
                    max={8500000}
                  />
                  <Button type='submit'>Оставить заявку</Button>
                </form>
              )}
            </Formik>
          </InputWrapper>
          <CalculationsWrapper>
            <Block>
              <CalculationTitles>Количество облигаций</CalculationTitles>
              <Numbers>10</Numbers>
            </Block>
            <Block>
              <CalculationTitles>Процент годовых</CalculationTitles>
              <Numbers>16%</Numbers>
            </Block>
            <Block>
              <CalculationTitles>Срок</CalculationTitles>
              <Numbers>3 года</Numbers>
            </Block>
            <Block>
              <CalculationTitles>Ежеквартальный доход</CalculationTitles>
              <Numbers>40 000 сом</Numbers>
            </Block>
            <Block>
              <CalculationTitles>Общий обьем инвестиций</CalculationTitles>
              <Numbers>1 480000 сом</Numbers>
            </Block>
          </CalculationsWrapper>
        </Container>
      </Modal>
    </Wrapper>
  );
};
