import React, { useState } from 'react';
import { Wrapper } from './styled';
import Button from '../../../components/ui/button';
import Modal from '../../../components/ui/modal';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { sendApplication } from '../../../services/sendApplication';
import { Input } from '../../../components/ui/input';
import { InvestmentSlider } from '../../../components/shared/investmentSlider';

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
        submit={() => {
          // setOpen(false);
          console.log('yo');
        }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Formik
          onSubmit={(values) => sendApplication(values.fullName, values.phoneNumber, 10000)}
          initialValues={{ fullName: '', phoneNumber: '' }}
          validationSchema={Yup.object({
            fullName: Yup.string().required('required'),
            phoneNumber: Yup.string().required('required'),
          })}
        >
          {({ values, handleChange, handleSubmit, isValid, dirty }) => (
            <form onSubmit={handleSubmit}>
              <Input name='fullName' onChange={handleChange} value={values.fullName} placeholder='Ваше имя' />
              <Input
                name='phoneNumber'
                onChange={handleChange}
                value={values.phoneNumber}
                placeholder='Ваш номер телефона'
              />
              {/*<InvestmentSlider amount={investment} onChange={handleChange} min={1000} max={8500000} />*/}

              <Button type='submit' disabled={!isValid || !dirty}>
                Оставить заявку
              </Button>
            </form>
          )}
        </Formik>
      </Modal>
    </Wrapper>
  );
};
