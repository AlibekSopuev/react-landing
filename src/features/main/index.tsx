import React from 'react';
import { ProductBenefits } from './productBenefits';
import { Advantages } from './advantages';
import { Purposes } from './purposes';
import { Wrapper } from './styled';
import { Instructions } from './instructions';
import { Banner } from './banner';
import { AppHeader } from './header';

export default function () {
  return (
    <Wrapper>
      <AppHeader />
      <Banner />
      <ProductBenefits />
      <Advantages />
      <Purposes />
      <Instructions />
    </Wrapper>
  );
}
