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

export default function () {
  return (
    <Wrapper>
      <AppHeader />
      <Container>
        <Banner />
        <Calculator />
        <ProductBenefits />
        <Advantages />
        <Purposes />
        <Instructions />
        <Footer />
      </Container>
    </Wrapper>
  );
}
