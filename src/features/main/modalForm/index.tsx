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
import { formatMoney } from '../../../helpers/utils';
import { PhoneInputField } from '../../../components/ui/inputField/phone';
import { InputField } from '../../../components/ui/inputField/main';
import { useDeviceDetected } from '../../../core/hooks/useDeviceDetected';
import { useTranslation } from 'react-i18next';

const ModalForm = () => {
  const { t } = useTranslation();
  const isMobile = useDeviceDetected();
  const [open, setOpen] = useState(false);

  const formik = useFormik<{ fullName: string; phoneNumber: string; investment: number }>({
    initialValues: { fullName: '', phoneNumber: '', investment: 1000 },
    onSubmit: async (values) => {
      const quantity = values.investment / 1000;
      await sendApplication(values.fullName, values.phoneNumber, quantity);
      setOpen(false);
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Обязательное поле'),
      phoneNumber: Yup.string()
        .matches(/^\d{12}$/, 'Номер должен состоять из 12 цифр')
        .required('Обязательное поле'),
      investment: Yup.number().min(1000, 'Минимальная сумма - 1 000 с').required('required'),
    }),
  });

  const {
    values: { investment, phoneNumber, fullName },
    handleChange,
    handleSubmit,
    setFieldValue,
    isValid,
    dirty,
    errors: { investment: investmentError, phoneNumber: phoneNumberError, fullName: fullNameError },
  } = formik;

  const bondsAmount = investment / 1000;
  const quarterIncome = formatMoney((investment * 0.16) / 4);
  const finalSum = formatMoney(investment * 0.16 * 3 + investment);

  return (
    <Wrapper>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        {t('modalForm.investButton')}
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Container>
          <InputWrapper>
            {!isMobile && (
              <>
                <Title>{t('modalForm.modalTitle')}</Title>
                <Text>{t('modalForm.modalSubtitle')}</Text>
              </>
            )}
            <form onSubmit={handleSubmit}>
              <InputField
                floatLabel
                label={t('global.yourName') as string}
                placeholder={t('global.yourName') as string}
                name='fullName'
                value={fullName}
                onChange={handleChange}
              />
              <PhoneInputField
                floatLabel
                label={t('global.number') as string}
                placeholder={t('global.number') as string}
                onChange={(values) => setFieldValue('phoneNumber', values)}
                type='phone'
                defaultValue={phoneNumber}
              />
              <InvestmentSlider
                onChange={(value: number) => setFieldValue('investment', value)}
                min={1000}
                max={1000000}
              />
              <StyledButton disabled={!(isValid && dirty)} type='submit'>
                {t('global.buttonSubmit')}
              </StyledButton>
            </form>
          </InputWrapper>
          <CalculationsWrapper>
            {isMobile && (
              <>
                <Title>{t('modalForm.modalTitle')}</Title>
                <Text>
                  {t('modalForm.modalSubtitle')}
                  {t('modalForm.modalSubtitle')}
                </Text>
              </>
            )}
            <Block>
              <CalculationTitles>{t('global.numberOfBonds')}</CalculationTitles>
              <Numbers>{bondsAmount}</Numbers>
            </Block>
            <Block>
              <CalculationTitles>{t('global.interestRate')}</CalculationTitles>
              <Numbers>16%</Numbers>
            </Block>
            <Block>
              <CalculationTitles>{t('modalForm.maturity')}</CalculationTitles>
              <Numbers>3 {t('global.maturityAmount')}</Numbers>
            </Block>
            <Block>
              <CalculationTitles>{t('global.quarterlyIncome')}</CalculationTitles>
              <Numbers>
                {quarterIncome} {t('global.currency')}
              </Numbers>
            </Block>
            <Block>
              <CalculationTitles>{t('modalForm.totalInvestment')}</CalculationTitles>
              <Numbers>
                {finalSum} {t('global.currency')}
              </Numbers>
            </Block>
          </CalculationsWrapper>
        </Container>
      </Modal>
    </Wrapper>
  );
};

export default ModalForm;
