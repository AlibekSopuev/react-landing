import React from 'react';
import { ProductBenefits } from './productBenefits';
import { Advantages } from './advantages';
import { Purposes } from './purposes';
import { Instructions } from './instructions';
import { Banner } from './banner';
import { Calculator } from './calculator';
import { Questions } from './questions';
import { ModalForm } from './modalForm';
import { Application } from './application';

export default function () {
  return (
    <>
      <Banner />
      <Calculator />
      <ModalForm />
      <ProductBenefits />
      <Advantages />
      <Purposes />
      <Instructions />
      <Application />
      <Questions />
    </>
  );
}
