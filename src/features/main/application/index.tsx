import React from 'react';
import { Container, TextBlock, FormBlock, Title, Text, InputWrapper, CalculatorWrapper, Signature } from './styled';
import { InvestmentSlider } from '../../../components/shared/investmentSlider';
import Button from '../../../components/ui/button';
import { useFormik } from 'formik';
import { sendApplication } from '../../../services/sendApplication';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { PhoneInputField } from '../../../components/ui/inputField/phone';
import { InputField } from '../../../components/ui/inputField/main';

const Application = () => {
  const { t } = useTranslation();
  const formik = useFormik<{ fullName: string; phoneNumber: string; investment: number }>({
    initialValues: { fullName: '', phoneNumber: '', investment: 1000 },
    onSubmit: async (values, formikHelpers) => {
      const quantity = values.investment / 1000;
      await sendApplication(values.fullName, `+${values.phoneNumber}`, quantity);
      formikHelpers.resetForm();
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
    values: { phoneNumber, fullName },
    handleSubmit,
    setFieldValue,
    isValid,
    dirty,
    setFieldTouched,
    touched: { investment: investmentTouched, phoneNumber: phoneNumberTouched, fullName: fullNameTouched },
    errors: { investment: investmentError, phoneNumber: phoneNumberError, fullName: fullNameError },
  } = formik;

  return (
    <Container>
      <TextBlock>
        <Title>{t('application.title')}</Title>
        <Text>{t('application.subtitle')}</Text>
      </TextBlock>
      <FormBlock>
        <CalculatorWrapper>
          <form onSubmit={handleSubmit}>
            <InputWrapper>
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
            </InputWrapper>
            <InvestmentSlider
              onChange={(value: number) => {
                setFieldTouched('investment');
                setFieldValue('investment', value);
              }}
              min={1000}
              max={1000000}
              error={investmentTouched ? investmentError : ''}
            />
          </form>
        </CalculatorWrapper>
        <Signature>
          {t('application.personalInfo')} &nbsp;
          <a
            href={
              'http://cbd.minjust.gov.kg/act/view/ru-ru/202269#:~:text=%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F%209.%20%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5%20%D1%81%D1%83%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B8%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83%20%D0%B5%D0%B3%D0%BE%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85'
            }
            target='_blank'
            rel='noreferrer'
          >
            {t('application.personalInfoLink')}
          </a>
        </Signature>
        <Button type='submit' onClick={() => handleSubmit()}>
          {t('global.buttonSubmit')}
        </Button>
      </FormBlock>
    </Container>
  );
};

export default Application;
