import React from 'react';
import { ProductBenefits } from './productBenefits';
import { Advantages } from './advantages';
import { Purposes } from './purposes';
import { Instructions } from './instructions';
import { Banner } from './banner';
import { Calculator } from './calculator';
import { ModalForm } from './modalForm';

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
    </>
  );
}
