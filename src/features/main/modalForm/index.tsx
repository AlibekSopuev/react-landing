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
    onSubmit: async (values, formikHelpers) => {
      const quantity = values.investment / 1000;
      await sendApplication(values.fullName, `+${values.phoneNumber}`, quantity);
      formikHelpers.resetForm();
      setOpen(false);
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('global.requiredField'),
      phoneNumber: Yup.string()
        .matches(/^\d{12}$/, 'global.minimumPhoneNumber')
        .required('global.requiredField'),
      investment: Yup.number().min(1000, 'global.minimumAmount').required('global.requiredField'),
    }),
  });

  const {
    values: { investment, phoneNumber, fullName },
    handleSubmit,
    setFieldValue,
    isValid,
    dirty,
    setFieldTouched,
    touched: { investment: investmentTouched, phoneNumber: phoneNumberTouched, fullName: fullNameTouched },
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
                onChange={(e) => {
                  setFieldTouched('fullName');
                  setFieldValue('fullName', e.target.value);
                }}
                error={fullNameTouched ? fullNameError : ''}
              />
              <PhoneInputField
                floatLabel
                label={t('global.number') as string}
                placeholder={t('global.number') as string}
                onChange={(values) => {
                  setFieldTouched('phoneNumber', !!values);
                  setFieldValue('phoneNumber', values);
                }}
                type='phone'
                defaultValue={phoneNumber}
                error={phoneNumberTouched ? phoneNumberError : ''}
              />
              <InvestmentSlider
                onChange={(value: number) => {
                  setFieldTouched('investment');
                  setFieldValue('investment', value);
                }}
                min={1000}
                max={1000000}
                error={investmentTouched ? investmentError : ''}
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
