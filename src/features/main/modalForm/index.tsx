import React, { useState } from 'react';
import {
  Block,
  CalculationsWrapper,
  CalculationTitles,
  Container,
  InputWrapper,
  Numbers,
  StyledButton,
  Text,
  Title,
  Wrapper,
} from './styled';
import Button from '../../../components/ui/button';
import Modal from '../../../components/ui/modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sendApplication } from '../../../services/sendApplication';
import { InvestmentSlider } from '../../../components/shared/investmentSlider';
import { Input } from '../../../components/ui/input';
import { formatMoney } from '../../../helpers/utils';
import { PhoneInputField } from '../../../components/ui/inputField/phone';
import { InputField } from '../../../components/ui/inputField/main';

export const ModalForm = () => {
  const [open, setOpen] = useState(false);

  const formik = useFormik<{ fullName: string; phoneNumber: string; investment: number[] }>({
    initialValues: { fullName: '', phoneNumber: '', investment: [1000] },
    onSubmit: async (values) => {
      const quantity = values.investment[0] / 1000;
      await sendApplication(values.fullName, values.phoneNumber, quantity);
      setOpen(false);
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

  const bondsAmount = investment[0] / 1000;
  const quarterIncome = formatMoney((investment[0] * 0.16) / 4);
  const finalSum = formatMoney(investment[0] * 0.16 * 3 + investment[0]);

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
            <form onSubmit={handleSubmit}>
              <InputField placeholder='Ваше имя' name='fullName' value={fullName} onChange={handleChange} />
              <PhoneInputField onChange={(values) => setFieldValue('phoneNumber', values)} type='phone' />
              <InvestmentSlider
                amount={investment}
                onChange={(values) => setFieldValue('investment', values)}
                min={1000}
                max={1000000}
              />
              <StyledButton type='submit'>Оставить заявку</StyledButton>
            </form>
          </InputWrapper>
          <CalculationsWrapper>
            <Block>
              <CalculationTitles>Количество облигаций</CalculationTitles>
              <Numbers>{bondsAmount}</Numbers>
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
              <Numbers>{quarterIncome} сом</Numbers>
            </Block>
            <Block>
              <CalculationTitles>Общий обьем инвестиций</CalculationTitles>
              <Numbers>{finalSum} сом</Numbers>
            </Block>
          </CalculationsWrapper>
        </Container>
      </Modal>
    </Wrapper>
  );
};
