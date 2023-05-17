import React from 'react';
import { ProductBenefits } from './productBenefits';
import { Advantages } from './advantages';
import { Purposes } from './purposes';
import { Container, Wrapper } from './styled';
import { Instructions } from './instructions';
import { Banner } from './banner';
import { AppHeader } from './header';
import { Footer } from './footer';
import { Calculator } from './calculator';
import { Questions } from './questions';

export default function () {
  return (
    <>
      <Banner />
      <Calculator />
      <ProductBenefits />
      <Advantages />
      <Purposes />
      <Instructions />
      <Questions />
    </>
  );
}
